const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');
const Koa = require('koa');
const views = require('koa-views');
const static = require('koa-static');
const Router = require('koa-router');
const path = require('path');
const LRU = require('lru-cache');

let server = new Koa();
let router = new Router();

//映射静态资源
server.use(static(path.join(__dirname, './static'), {maxage: 3600000 * 24}));

//映射view
server.use(views(path.join(__dirname, './view'), { extension: 'ejs' }));

const clientManifest = require(path.resolve('./static/vue-ssr-client-manifest.json'));

const renderer = createBundleRenderer(
    path.resolve(__dirname, 'static/vue-ssr-server-bundle.json'),
    {
        runInNewContext: false,
        template: fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8'),
        clientManifest
    });


const microCache = LRU({
    max: 100,
    maxAge: 60000 // 重要提示：条目在 1 秒后过期。
})

router.get('*', async ctx => {
    const context = { url: ctx.url };
    const hit = microCache.get(ctx.url);

    let result = hit;
console.log(result);
    if(!hit) {
        result = await renderer.renderToString(context);
        microCache.set(ctx.url, result);
    }

    ctx.body = result;
});


// router.get('*', async ctx => {
//     await ctx.render('index')
// });

server.use(router.routes()).use(router.allowedMethods())
server.listen(3001, "0.0.0.0");
console.log('port: ', 3001)

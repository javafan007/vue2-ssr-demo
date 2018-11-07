<template>
    <div>
        <div v-if="currentUser">
            <p>姓名：{{ currentUser.name }}</p>
            <p>电话：{{ currentUser.phone }}</p>
            <p>分组：{{ currentUser.group }}</p>
            <p>地址：{{ currentUser.address }}</p>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {

        asyncData ({ store, route }) {
            return store.dispatch('findUserById', route.params.id)
        },

        data () {
            return {

            }
        },

        computed: {
            ...mapState(['currentUser'])
        }
    };
</script>
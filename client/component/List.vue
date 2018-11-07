
<template>
    <div>
        <ul>
            <li v-for="item in userList">
                <router-link :to="{name: 'detail', params: { id: item.id } }">
                    {{ item.name }}（{{ item.phone }}）
                </router-link>
            </li>
        </ul>

        <el-select filterable v-model="selectedVal" placeholder="请选择">
            <el-option :key="item.id"
                       :value="item.value"
                       :label="item.label"
                       v-for="item in users">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {

        asyncData ({ store, route }) {
            return store.dispatch('findUserList')
        },

        data () {
            return {
                selectedVal: null
            }
        },

        computed: {
            ...mapState(['userList']),
            users () {
                return this.userList.map( item => ({
                    value: item.id,
                    label: item.name
                }));
            }
        }
    };

</script>

import Vue from 'vue';
import Vuex from 'vuex';
import userService from '../service/user.service';

Vue.use(Vuex);


export function createStore () {
    return new Vuex.Store({
        state: {
            userList: [],
            currentUser: null
        },

        actions: {
            findUserList ({ commit }) {
                return userService.findUserList().then( (data) => {
                    commit('receiveUserList', data);
                })
            },
            findUserById({ commit }, userId) {
                return userService.findUserById(userId).then( data => {
                    commit('receiveUser', data)
                })
            }
        },

        mutations: {
            receiveUserList (state, userList) {
                state.userList = userList;
            },
            receiveUser (state, user) {
                console.log(user);
                state.currentUser = user;
            }
        }
    });
}



import Datasource from '../vuex/Datasource'

export default {

    findUserList () {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(Datasource.userList);
            }, 1000);
        });
    },

    findUserById (id) {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(Datasource.userList.find( user => user.id == id ));
            }, 1000);
        });
    }
}
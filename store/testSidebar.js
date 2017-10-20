/**
 * Created by ronaldo on 2017/10/19.
 */
var testSidebar = {
    state: {
        sidebar: {
            opened: true
        }
    },
    mutations: {
        "TOGGLE_SIDEBAR": function (state) {
            state.sidebar.opened = !state.sidebar.opened
        }
    },
    actions: {
        "ToggleSideBar": function (store) {
            store.commit('TOGGLE_SIDEBAR')
        }
    },
    getters: {
        sidebar: function (state) {
            return state.sidebar.opened;
        }
    }
}
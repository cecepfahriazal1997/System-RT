import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        user: null,
        rwId: null,
        rtId: null
    },
    mutations: {
        setuser(state, value) {
            state.user = value;
        },
        setrwId(state, value) {
            state.rwId = value
            localStorage.setItem('rwId', value)
        },
        setrtId(state, value) {
            state.rtId = value
            localStorage.setItem('rtId', value)
        }
    },
    actions: {},
    modules: {},
    getters: {
        dataUser: (state) => {
            return state.user;
        },
        getRWId: (state) => {
            return state.rwId;
        },
        getRT: (state) => {
            return state.rtId;
        },
        logout: (state) => {
            state.user = null
            localStorage.removeItem('token')
            return true
        }
    }
});

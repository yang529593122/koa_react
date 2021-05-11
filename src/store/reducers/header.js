const header= {
    state: {
        list:[
            {
                item_id:0,
                name:'首页',
                path:"/home"
            },
            {
                item_id:1,
                name:'javascript',
                path:'/js'
            },
            {
                item_id:2,
                name:'html',
                path:'/html'
            },
            {
                item_id:3,
                name:'css',
                path:'/css'
            },
            {
                item_id:4,
                name:'node',
                path:'/node'
            }
        ],
        active_id:0
    },
    reducers: {
        updateState(state, payload) {
            return {
                ...state,
                ...payload,
            };
        },
    },
    effects: {
        async getHotVideoUserNote(payload) {
            console.log(22222)
        },


    },
};
export default  header;

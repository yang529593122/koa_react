 const  home= {
    state: {
        homeData:[1,2,3,4],
        obj:{
            a:[1,2,3],
            c:4
        }
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
 export default home
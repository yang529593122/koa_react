const  javascript={
    state: {
        jsData:'js'
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
            console.log('js')
        },
    },
};
export  default  javascript;

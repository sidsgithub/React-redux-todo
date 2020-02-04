const initialState = {
    keyword: '',
    list: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TODO_LIST':
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        case 'SET_TODO_KEYWORD':
            return {
                ...state,
                keyword: action.payload
            }
        default: 
            return state
    }
}
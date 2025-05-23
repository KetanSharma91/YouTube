const videoreducer = (state = { data: null }, action) => {
    switch (action.type) {
        case 'POST_VIDEO':
            return { ...state };

        case 'FETCH_ALL_VIDEOS':
            return { ...state, data: action.payload };

        case 'POST_LIKE':
            return { ...state };

        case 'POST_VIEWS':
            return { ...state };

        default:
            return state;
    }
}

export default videoreducer;
import * as constants from './constants'

const defaultStat = {
    focused: false
};

export default (state = defaultStat, action) => {
    if(action.type === constants.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if(action.type === constants.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state;
};

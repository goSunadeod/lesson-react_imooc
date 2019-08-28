import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultStat = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
    });
};

export default (state = defaultStat, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        default:
            return state;
    }
};

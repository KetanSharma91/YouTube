import {combineReducers} from 'redux';
import authreducer from './auth';
import currentuserreducer from './currentuser'
import channelreducer from './chanel';
import videoreducer from './video';
import commentreducer from './comment';
import historyreducer from './history';
import likedvideoreducer from './likedvideo';
import watchlaterreducer from './watchlater';

export default combineReducers({
    authreducer,
    currentuserreducer,
    channelreducer,
    videoreducer,
    commentreducer,
    historyreducer,
    likedvideoreducer,
    watchlaterreducer
})
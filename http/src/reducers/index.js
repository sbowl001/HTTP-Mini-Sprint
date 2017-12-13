import { combineReducers } from 'redux';
import { GET_FRIENDS } from '../actions';

const friendsReducer = (friends = [], action) => {
    switch(action.type) { //should be pure function
        case GET_FRIENDS:
            return action.payload.data;
        default:
            return friends;
    }
};

const rootReducer = combineReducers({
    friends: friendsReducer
});

export default rootReducer;
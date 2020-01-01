import { combineReducers } from 'redux';

const selectPost = (state=[],action) =>{
    switch(action.type){ 
        case "FETCH_POST":
            return action.payload;
        default:
            return state;
    }
}

const selectUser = (state=[], action) =>{
    switch(action.type){
        case "FETCH_USER":
            return [...state ,action.payload];
        default:
            return state;
    }
}

export default combineReducers({ posts: selectPost, users: selectUser });

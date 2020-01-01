import jsonPlaceHolder from  '../api/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUser = () => async (dispatch,getState) =>{
        await dispatch(fetchPost());
        
        // Simple way of getting unique username 
        // const id = _.uniq(_.map(getState().posts,'userId'));
        // id.map(id => dispatch(fetchUser(id)));
        // chain function from lodash for shorter way
        
        _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}
export const fetchPost = () =>async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({ type: 'FETCH_POST', payload: response.data});
};

export const fetchUser =(id) => async dispatch =>{
        const response = await jsonPlaceHolder.get(`/users/${id}`);
        dispatch({ type:"FETCH_USER", payload: response.data});
};

//lodash option but restrict the userInfo update in future
// export const fetchUser = id => async dispatch => _fetchUser(id,dispatch);
// export const _fetchUser =_.memoize( async(id,dispatch) =>{
//         const response = await jsonPlaceHolder.get(`/users/${id}`);
//         dispatch({ type:"FETCH_USER", payload: response.data});
// });
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import selectPost from './reducers/postReducer';
import App from './components/App';

const store = createStore(selectPost,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById("root")
);
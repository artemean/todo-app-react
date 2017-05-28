import {combineReducers, createStore, compose} from "redux";
import {searchTextReducer, showCompletedReducer, todosReducer} from '../reducers/reducers';

const store = (initialState = {}) => {
    const reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    return createStore(reducer, initialState, compose(// return store
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ));
};

export default store;
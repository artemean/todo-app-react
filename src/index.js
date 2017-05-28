import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './components/TodoApp';
import actions from './actions/actions';
import TodoAPI from './api/TodoAPI';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    console.log('New state', state);
    TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

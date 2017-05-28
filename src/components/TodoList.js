import React, { Component } from 'react';
import {connect}  from 'react-redux';
import Todo from './Todo';
import TodoAPI from '../api/TodoAPI';

class TodoList extends Component {
    renderTodos = () => {
        if (this.props.todos.length === 0) {
            return (
                <p className="container__message">Nothing To Do</p>
            );
        }
        return TodoAPI.filterTodos(this.props.todos, this.props.showCompleted, this.props.searchText).map((todo) => {
            return (
                <Todo key={todo.id} {...todo}/>
            );
        });
    };

    render() {
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}

export default connect(
    (state) => state
)(TodoList);

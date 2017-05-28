import React, { Component } from 'react';
import {connect}  from 'react-redux';
import moment  from 'moment';
import actions from '../actions/actions';

class Todo extends Component {
    renderDate = () => {
        let message = 'Created ';
        let timestamp = this.props.createdAt;

        if (this.props.completed) {
            message = 'Completed ';
            timestamp = this.props.completedAt;
        }

        return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    render() {
        const {id, text, completed, dispatch} = this.props;
        const todoClassName = completed ? 'todo todo-completed' : 'todo';

        return (
            <div className={todoClassName} onClick={() => {
                dispatch(actions.toggleTodo(id));
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{this.renderDate()}</p>
                </div>
            </div>
        )
    }
}

export default connect()(Todo);

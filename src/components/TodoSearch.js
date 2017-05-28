import React, { Component } from 'react';
import {connect}  from 'react-redux';
import actions from '../actions/actions';

class TodoSearch extends Component {
    handleSearch = () => {
        const searchText = this.refs.searchText.value;
        this.props.dispatch(actions.setSearchText(searchText));
    };

    handleShowCompleted = () => {
        this.props.dispatch(actions.toggleShowCompleted());
    };

    render() {
        const {showCompleted, searchText} = this.props;

        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={this.handleSearch} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={this.handleShowCompleted} />
                        Show completed todos
                    </label>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch);


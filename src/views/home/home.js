import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from 'actions/todos'
import ClearableInput from 'components/clearable-input/clearable-input'

import './home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }

    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCompleteState = this.handleCompleteState.bind(this)
  }

  handleUserInput(event) {
    this.setState({ text: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.text) return;

    this.props.addTodo(this.state.text)
    this.setState({ text: "" })
  }

  handleCompleteState(todoId) {
    this.props.toggleCompleteTodo(todoId);
  }

  render() {
    const { todos } = this.props;

    return (
      <div className="flex-column centered">
        <div id="controls">
          <form onSubmit={this.handleSubmit}>
            <ClearableInput
              label="What do you want to do?"
              value={this.state.text}
              onChange={this.handleUserInput}
            />
          </form>
        </div>
        <ul id="todo-list">
        {
          todos.map(item => (
            <li key={item.id}>
              <label>
                <input type="checkbox" onChange={() => this.handleCompleteState(item.id)} />
              { item.description }
              </label>
            </li>
          ))
        }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.list
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

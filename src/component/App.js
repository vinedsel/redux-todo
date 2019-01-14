import React from 'react';
import TodoList from './Todo';
import { connect } from 'react-redux';
import { addTodo, todoTextChanged } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Todo List:</h3>
        <TodoList items={this.props.items} onAddTodo={this.props.onAddTodo} onTodoTextChanged={this.props.onTodoTextChanged} addTodoText={this.props.addTodoText} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: () => dispatch(addTodo()),
    onTodoTextChanged: text => dispatch(todoTextChanged(text))
  };
}
function mapStateToProps(state) {
  return {
    items: state.items,
    addTodoText: state.addTodoText
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {

  render() {
    let todoItems;
    if(this.props.todos){  //check if there is a todo
      todoItems = this.props.todos.map(todo =>{  //mapping through the projects array
        return(
            <TodoItem key={todo.title} todo={todo} />
          
        );
       // console.log(project)
      });
    }
    //console.log(this.props);
    return (
      <div className="Todos">
      <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {   //validation for properties
  todos: PropTypes.array
}


export default Todos;

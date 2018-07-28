import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

  render() {
    console.log(this.props);
    return (
      <li className="TodoItem">
       <strong> {this.props.todo.title}</strong>
      </li>
    );
  }
}

TodoItem.propTypes = {   //validation for properties
  todo: PropTypes.object
}

export default TodoItem;

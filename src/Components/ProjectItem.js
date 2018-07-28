import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProjectItem extends Component {

  deleteProject(id){
    this.props.onDelete(id); 
  }

  render() {
    console.log(this.props);
    return (
      <li className="ProjectItem">
       <strong> {this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a> {/*click on it to delete*/}
      </li>
    );
  }
}

ProjectItem.propTypes = {   //validation for properties
  project: PropTypes.object,
  onDelete: PropTypes.func
}


export default ProjectItem;

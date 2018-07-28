import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';


class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);     /*delete id, when function triggered*/
  }

  render() {
    let projectItems;
    if(this.props.projects){  //check if there is a project
      projectItems = this.props.projects.map(project =>{  //mapping through the projects array
        return(
            <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
          
        );
       // console.log(project)
      });
    }
    //console.log(this.props);
    return (
      <div className="Projects">
      <h3>Latest project</h3>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {   //validation for properties
  projects: PropTypes.array,
  onDelete: PropTypes.func
}


export default Projects;

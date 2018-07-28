import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
    constructor(){  //submit data to state, needs to be at the top
      super();
      this.state ={
        newProject: {}
      }
    }
    static defaultProps = {
      categories: ['Web Design', 'Web Development', 'Media Development']
    }

    handleSubmit(e){  //action when submit happens
      if(this.refs.title.value === ''){
        alert("This is required");
      }
      else{  //set state and add it newprojects with value from form
        this.setState({newProject: {  //setstate and add to newproject object
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }}, 
        function(){ //callback function  
          this.props.addProject(this.state.newProject); //this passes the state here to app.js
        });
      }
      e.preventDefault(); //prevent form from submittinng
    }

    render() {
    let categoryOptions = this.props.categories.map(category =>{    //map through categories array as category
      return <option key={category} value={category}>{category}</option>  //create options with array 4rm categoryoptions now category
    });

    //console.log(this.props);
    return (
      <div> {/**/}
       <h3>Add Projects</h3>
        <form onSubmit={this.handleSubmit.bind(this)}> {/*bind with this to use in handlesubmit(e) */}
          <div>
            <label>Title</label> <br />
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>Category</label> <br />
            <select ref="category">
              {categoryOptions}  {/*from categoryOptions that creates option*/}
            </select>
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {   //validation for properties, if it has .props
  categories: PropTypes.array,
  handleSubmit: PropTypes.func
}

export default AddProject;

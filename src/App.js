import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery'
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css'

class App extends Component {
  constructor() {
    super();  //you need to call super when you have a constructor
    this.state = {
      projects: [],  //array of objects
      todos: []
   }
}

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){  //set todos to data, callback check if theres a state
          console.log(this.state);
        });   //setState has colon after it 
      }.bind(this),
      error: function(xhr, status, err){ //if there is error, print error
        console.log(err);
      }
    }); //ajaxx also has colon
  }

  getProject(){
    this.setState ({
      projects: [  //array of objects
      {
        id: uuid.v4(),
        title: "Business Design",
        category: "Web Design"
      },
      {
        id: uuid.v4(),
        title: "Social App",
        category: "Media Development"
      },
      {
        id: uuid.v4(),
        title: "Ecommerce Shopping Cart",
        category: "Web Development"
      }
    ]
   });
  }

  componentWillMount(){  //you want to set state here. Fires up everything it renders
   this.getProject();  //gets projectfunction, state is fired here
   this.getTodos();   
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects= this.state.projects;
    let index = projects.findIndex(x => x.id);  //look through project and if id matches it gets put in inndex
    projects.splice(index, 1); //delete it from index
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">   {/*everything should be in that one div*/}
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects = {this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />    
        <hr />
        <Todos todos={this.state.todos} /> 
      </div>
    );
  }
}

export default App;

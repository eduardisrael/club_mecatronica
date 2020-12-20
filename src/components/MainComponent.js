import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import ProjectDetail from './ProjectDetailComponent';
import { PROJECTS } from '../shared/projects';
import Activity from './ActivityComponent';


class Main extends React.Component{
  //define the state
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
      selectedProject: null
    };
  }

  onProjectSelect(projectId) {
    this.setState(
      {selectedProject: projectId}
    );
  }

  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
          <NavbarBrand href="/">Club de Mecatronica</NavbarBrand>
          </div>
        </Navbar>
        <Activity projects={this.state.projects} 
          onClick={(projectId) => this.onProjectSelect(projectId)}
        />
        <ProjectDetail project={this.state.projects.filter((project) => project.id === this.state.selectedProject)[0]}/>
      </div>
    );
  }
}

export default Main;
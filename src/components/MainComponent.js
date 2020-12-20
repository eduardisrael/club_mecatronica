import React from 'react';
import Activity from './ActivityComponent';
import ProjectDetail from './ProjectDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { PROJECTS } from '../shared/projects';


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
      <div>
        <Header/>
        <Activity projects={this.state.projects} 
          onClick={(projectId) => this.onProjectSelect(projectId)}
        />
        <ProjectDetail project={this.state.projects.filter((project) => project.id === this.state.selectedProject)[0]}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
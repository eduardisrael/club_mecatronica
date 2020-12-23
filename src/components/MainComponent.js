import React from 'react';
import Home from './HomeComponent';
import Activity from './ActivityComponent';
import ProjectDetail from './ProjectDetailComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import { PROJECTS } from '../shared/projects';
import { SUMMARIES } from '../shared/summaries';
import { EVENTS } from '../shared/events';
import { MEMBERS } from '../shared/members';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component{
  //define the state
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
      summaries: SUMMARIES,
      events: EVENTS,
      members: MEMBERS
    };
  }

  //reason exact path, this way can pass in a props to the ActivityComponent, only receive projects.
  //It wont receive the onClick method anymore, Redirect default path route to home
  render(){
    const HomePage = () => {
      return(
        <Home
          project = {this.state.projects.filter((project) => project.featured)[0]}
          event = {this.state.events.filter((event) => event.featured)[0]}
          member = {this.state.members.filter((member) => member.featured)[0]}
        />
      );
    }

    const ProjectWithId = ({match}) => {
      return(
        <ProjectDetail 
          project={this.state.projects.filter((project) => project.id === parseInt(match.params.projectId,10))[0]}
          summaries={this.state.summaries.filter((summary) => summary.projectId === parseInt(match.params.projectId,10))}
        />
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path='/aboutus' component={() => <About members={this.state.members}/>}/>
          <Route exact path='/activity' component={() => <Activity projects = {this.state.projects}/>}/>
          <Route path='/activity/:projectId' component={ProjectWithId}/>
          <Route exact path='/contactus' component={Contact}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
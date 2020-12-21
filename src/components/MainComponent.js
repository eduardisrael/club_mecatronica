import React from 'react';
import Home from './HomeComponent';
import Activity from './ActivityComponent';
import ProjectDetail from './ProjectDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { PROJECTS } from '../shared/projects';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component{
  //define the state
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    };
  }

  //reason exact path, this way can pass in a props to the ActivityComponent, only receive projects.
  //It wont receive the onClick method anymore, Redirect default path route to home
  render(){
    const HomePage = () => {
      return(
        <Home/>
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='./home' component={HomePage}/>
          <Route exact path='/activity' component={() => <Activity projects = {this.state.projects}/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
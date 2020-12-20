//import logo from './logo.svg';
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Activity from './components/Activity';
import './App.css';
import { PROJECTS } from './shared/projects';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      projects: PROJECTS
    };
  }


  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div class="container">
            <NavbarBrand href="/">Club de Mecatronica</NavbarBrand> 
          </div>
        </Navbar>
        <Activity projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends React.Component{

  //UI state 
  //<> sintax for using react fragmnet or React.Fragment
  //A common pattern in React is for a component to return multiple elements. 
  //Fragments let you group a list of children without adding extra nodes to the DOM.
  render() {
    return(
      <>
        <Navbar dark>
          <div className="container">
          <NavbarBrand href="/">Club de Mecatrónica</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>ESPOL</h1>
                <p>El club de Mecatrónica es un espacio ideal para encontrar personas que comparten
                    un espiritu creativo y emprendedor, y establecer relaciones que te permitan 
                    desarrollar tus proyectos personales, profesionales y académicos.
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default Header;
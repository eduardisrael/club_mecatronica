import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
       super(props);
        //UI-state show or hide toogle nav or collapse
        this.state = {
            isNavOpen: false
        };
        //Bind crea una nueva función, que cuando es llamada, asigna a su operador
        //this el valor entregado, con una secuencia de argumentos dados
        this.toogleNav = this.toogleNav.bind(this);
    }

    //Value is swapp
    toogleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    //UI state 
    //<> sintax for using react fragmnet or React.Fragment
    //A common pattern in React is for a component to return multiple elements. 
    //Fragments let you group a list of children without adding extra nodes to the DOM.
    render() {
        return(
        <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toogleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="80px" alt='CM' /></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-center">
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'> Inicio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'> Acerca de</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/activity'> Proyectos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'> Contáctanos</NavLink>
                            </NavItem>
                            </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron fluid>
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
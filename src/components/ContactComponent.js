import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props){
  return(
    <div className="container">
        <div className="row">
            <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
            <BreadcrumbItem active>Contacto</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
            <h3>Contáctanos</h3>
            <hr />
            </div>                
        </div>
        <div className="row row-content">
            <div className="col-12">
            <h3>Ubicación</h3>
            </div>
            <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Nuestra dirección</h5>
                    <address>
                    Escuela Superior Politécnica del Litoral - km. 30.5 vía perimetral
                    <br />
                    Guayaquil, Ecuador<br />
                    <i className="fa fa-phone"></i>: +852 1234 5678<br />
                    <i className="fa fa-envelope fa-lg"></i>: club_mecatronica@espol.edu.ec
                    </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
                <h5>Map of our Location</h5>
            </div>
            <div className="col-12 col-sm-11 offset-sm-1">
                <div className="btn-group" role="group">
                    <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                    <a role="button" className="btn btn-info" href="skype:MySkypeName?call"><i className="fa fa-skype"></i> Skype</a>
                    <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact; 

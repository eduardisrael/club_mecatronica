import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

function Footer(props){

  return(
    <div className="footer bg-dark">
      <div className="container">
          <div className="row justify-content-center">             
              <div className="col-12 col-sm-6">
                  <h5>Más información</h5>
                  <address>
                    Escuela Superior Politécnica del Litoral
                    - km. 30.5 vía perimetral<br />
                    Guayaquil<br />
                <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                <i className="fa fa-envelope fa-lg"></i>: 
                        club_mecatronica@espol.edu.ec
                  </address>
              </div>
              <div className="col-12 col-sm-6 align-self-center mt-4">
                  <div className="text-center">
                    <a href="https://www.facebook.com/learnbuildteach/" className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/learnbuildteach" className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/learnbuildteach" className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                  </div>
              </div>
          </div>
          <div className="row justify-content-center">             
              <div className="col-auto text-center">
                  <p className="m-2">© 2021 Club de Mecatrónica ESPOL</p>
              </div>
          </div>
      </div>
  </div>
  );
}

export default Footer;
import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media} from "reactstrap";
import { Link } from "react-router-dom";

//Renderiza los lideres, usa componentes Media Modulo 1
function RenderMember({member}){
  return(
    <div key={member.id} className="col-12 m-1">
      <Media tag="li">
        <Media left middle>
          <Media object class="align-self-star" src={member.image} alt={member.name}/>
        </Media>
        <Media body className="ml-5">
          <Media heading>{member.name}</Media>
          <p>{member.designation}</p>
          <p>{member.description}</p>
        </Media>
      </Media>
    </div>
  );
}

function About(props) {
  const members = props.members.map((member) => <RenderMember member={member}/>);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Inicio</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>El Club</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Nosotros</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor augue semper justo pretium vestibulum. 
            In luctus cursus orci, sit amet ornare ipsum laoreet quis. Quisque tempor, leo ac vehicula commodo, nibh 
            nunc euismod eros, et mollis ex elit sit amet nulla. Morbi a isum. Donec pretium velit venenatis arcu 
            sodales, et pretium urna vehicula. In eget gravida libero. Curabitur ornare fringilla sapien a tincidunt. 
            Mauris rhoncus tempus tristique.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <em>TLorem ipsum dolor</em>, it amet ornare ipsum laoreet quis. 
            Quisque tempor, leo ac vehicula commodo, nibh 
            nunc euismod eros, et mollis ex elit sit amet nulla.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">3 Feb. 2013</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">HK Fine Foods Inc.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$1,250,375</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">40</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  You better cut the pizza in four pieces because I'm not hungry
                  enough to eat six.
                </p>
                <footer className="blockquote-footer">
                  Yogi Berra,
                  <cite title="Source Title">
                    The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books,
                    2014
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Directiva del Club</h2>
        </div>
        <div className="col-12">
          <Media list>{members}</Media>
        </div>
      </div>
    </div>
  );
}

export default About;
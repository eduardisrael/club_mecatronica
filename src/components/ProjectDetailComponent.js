import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

//renderiza una nueva Card - function Component
function RenderProject({project}) {
  return(
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={project.image} alt={project.name} />
        <CardBody>
          <CardTitle className="text-center">{project.name}</CardTitle>
          <CardText className="text-justify">{project.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

//renderiza comentarios y fecha - function Component
function RenderSummaries({summaries}){
  if (summaries != null){
    let  dateFormat = { year: "numeric", month:"short", day:"numeric"};
    const summariesProjects = summaries.map((summary) => {
      return(
        <li key = {summary.id}>
          <p className="text-justify">{summary.summary}</p>
          <p className="text-justify">-- {summary.author}, {new Date(summary.date).toLocaleDateString("en-US",dateFormat)}</p>
        </li>
      );
    });

    return (
      <div className="col-12 col-md-5 m-1">
        <h4 className="text-justify">Extracto</h4>
        <ul className="list-unstyled">
          {summariesProjects}
        </ul>
      </div>
    );
  }
  else {
    return(<div></div>);
  }
}

//Se renderiza la nueva vista
const ProjectDetail = (props) => {
  if (props.project != null){
    return(
      <div class="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/activity">Proyecto</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.project.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.project.name}</h3>
                <hr />
            </div> 
          </div>
          <div className="row">
            <RenderProject project={props.project} />
            <RenderSummaries summaries = {props.summaries}/>
          </div>  
      </div>   
    );
  }
  else {
    return(<div></div>);
  }
}

export default ProjectDetail; 
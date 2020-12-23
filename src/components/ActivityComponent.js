import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
  
function RenderActivityItem ({project,onClick}){
  return (
    <Card>
      <Link to={`/activity/${project.id}`}>
        <CardTitle className="text-center">{project.name}</CardTitle>
        <CardImg src={project.image} alt={project.name} />
      </Link>
    </Card>
  );
}


//another way of implementing a functional component
//this is the parameter that is going yo receive the props parameter
//this function is going to return the project and inside here
//This is egere iterating over all the items
//RenderActivityItem takes the parameters project which is the project that has received here, 2do onClick
//the onClick which was sent in by the mainComp that parsing in to the render ActivityComponent as the function here
const Activity = (props) => {
  const activity = props.projects.map((project) => {
    return(
      <div key={project.id} className="col-12 col-md-5 m-1">
        <RenderActivityItem project={project}/>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
          <BreadcrumbItem active>Proyectos</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Proyectos</h3>
          <hr />
        </div>  
      </div>
      <div className="row">
        {activity}
      </div>
    </div>
  );
}

  
export default Activity;
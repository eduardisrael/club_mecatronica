import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

  
function RenderActivityItem ({project,onClick}){
  return (
    <Card onClick={() => onClick(project.id)}>
      <CardTitle className="text-center">{project.name}</CardTitle>
      <CardImg width="100%" height="100%" object src={project.image} alt = {project.image} />
    </Card>
  );
}


//another way of implementing a functional component
//this is the parameter that is going yo receive the props parameter
//this function is going to return the menu and inside here
//This is egere iterating over all the items
//RenderActivityItem takes the parameters dish which is the dish that has received here, 2do onClick
//the onClick which was sent in by the mainComp that parsing in to the render ActivityComponent as the function here
const Activity = (props) => {
  const activity = props.projects.map((project) => {
    return(
      <div key={project.id} className="col-12 col-md-5 m-1">
        <RenderActivityItem project={project} onClick={props.onClick}/>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {activity}
      </div>
    </div>
  );
}

  
  export default Activity;
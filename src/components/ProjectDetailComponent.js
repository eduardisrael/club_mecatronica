import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class ProjectDetail extends React.Component {

  //renderiza una nueva Card
  renderProject(project) {
    return(
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={project.image} alt={project.name} />
          <CardBody>
            <CardTitle className="text-justify">{project.name}</CardTitle>
            <CardText className="text-justify">{project.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  //renderiza comentarios y fecha
  renderComments(comments){
    if (comments != null){
      let  dateFormat = { year: "numeric", month:"short", day:"numeric"};
      const commentsProjects = comments.map((comment) => {
        return(
          <li key = {comment.id}>
            <p className="text-justify">{comment.comment}</p>
            <p className="text-justify">-- {comment.author}, {new Date(comment.date).toLocaleDateString("en-US",dateFormat)}</p>
          </li>
        );
      });

      return (
        <div className="col-12 col-md-5 m-1">
          <h4 className="text-justify">Comments</h4>
          <ul className="list-unstyled">
            {commentsProjects}
          </ul>
        </div>
      );
    }
    else {
      return(<div></div>);
    }
  }

  //Se renderiza la nueva vista
  render(){
    if ( this.props.project != null){
      return(
        <div className="row">
          {this.renderProject(this.props.project)}
          {this.renderComments(this.props.project.comments)} 
        </div>     
      );
    }
    else {
      return(<div></div>);
    }

  }
}

export default ProjectDetail; 
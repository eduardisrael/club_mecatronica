import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import ProjectDetail from './ProjectDetailComponent';

class Activity extends React.Component {
    constructor(props){
      super(props);

      this.state = {
       selectedProject: null
      }
    }

    onProjectSelect(project){
      this.setState(
        {selectedProject: project }
      );
    }

    renderProject(project){
      if (project!=null){
        return(
          <Card>
            <CardImg top src={project.image} alt={project.name} />
            <CardBody>
              <CardTitle>{project.name}</CardTitle>
              <CardText>{project.description}</CardText>
            </CardBody>
          </Card>
        );
      }
      else {
        return(
          <div></div>
        );
      }
    }
  
    render() {
      const activity = this.props.projects.map((project) => {
          return (
            <div key={project.id} className="col-12 col-md-5 m-1">
              <Card onClick={() => this.onProjectSelect(project)}>
                <CardTitle className="text-justify">{project.name}</CardTitle>
                <CardImg width="100%" object src={project.image} alt = {project.image} />
              </Card>
            </div>
          );
      });
  
      return (
        <div className="container">
          <div className="row">
            {activity}
          </div>
          <ProjectDetail project = {this.state.selectedProject}/>
        </div>
      );
    }
  }
  
  export default Activity;
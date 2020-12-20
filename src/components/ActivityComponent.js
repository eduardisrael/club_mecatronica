import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

class Activity extends React.Component {
  
  render() {
    const activity = this.props.projects.map((project) => {
        return (
          <div key={project.id} className="col-12 col-md-5 m-1">
            <Card onClick={() => this.props.onClick(project.id)}>
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
      </div>
    );
  }
}
  
  export default Activity;
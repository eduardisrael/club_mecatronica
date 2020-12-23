import React from 'react';
import { Card, CardImg, CardGroup,CardText, CardBody, CardTitle, CardSubtitle, Col, Row, Container} from 'reactstrap';
const style = { height: "18rem" };

function RenderCard({item}){
  //Render Card by Activity from /shared/*.js and pass props to Home Component
  //javascript code inside JSX, designation only exists for leader item.image style={style}
  return(
    
      <Card className="text-center">
        <CardImg top src={item.image} alt={item.name}/>
        <CardBody>
          <CardTitle tag="h5">{item.name}</CardTitle>
          {item.designation ? <CardSubtitle tag="h6" className="mb-2 text-muted">{item.designation}</CardSubtitle> : null}
          <CardText>{item.description}</CardText> 
        </CardBody>
      </Card>
    
  );
}

function Home(props){
  return(
    <div className="container">
      <div className="row">
        <CardGroup>
          <RenderCard  item={props.project}/>
          <RenderCard  item={props.event}/>
        </CardGroup>  
    </div>
    </div>
  );
}

export default Home;

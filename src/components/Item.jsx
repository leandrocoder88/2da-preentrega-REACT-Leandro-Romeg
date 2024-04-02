import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
    return (
      <Card className="card">
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
          <Link to={`/item/${item.id}`}><Button className= "button" variant="primary">Ver Producto</Button></Link>
      </Card.Body>
    </Card>
  );
}



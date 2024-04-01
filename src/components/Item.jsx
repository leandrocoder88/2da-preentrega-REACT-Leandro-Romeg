import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
export const Item = ({ item }) => {
    return (
    <Card>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>{item.category}</Card.Text>
        <Card.Footer>${item.price}</Card.Footer>
        <Link to={`/item/${item.id}`} ><Button variant="primary">Más info!</Button></Link> 
      </Card.Body>
    </Card>
  );
};




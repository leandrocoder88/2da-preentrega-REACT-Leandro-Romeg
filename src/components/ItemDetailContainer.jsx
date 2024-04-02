import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'; 
import data from "../data/products.json";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
              const filteredData = data.find(d => d.id === Number(id));
              setItem(filteredData);
    });
  }, [id]);
  
  if (!item) return null;
  
  return (
      <Container className='mt-4 text-center' >
        <Card>
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                {item.description}
                </Card.Text>
                <Card.Text>$
                {item.price}
                </Card.Text>
                <Card.Text>
                {item.category}  
                </Card.Text>
            </Card.Body>
        </Card>
      </Container>
    )
}

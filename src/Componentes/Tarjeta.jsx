import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function Tarjeta({personaje}) {//paso de parámetros-argumentos: props {nombredealgo}

    
    
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img 
            variant="top" 
            src={personaje.image} 
        />
        <Card.Body>
            <Card.Title>{personaje.name}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{personaje.species}</ListGroup.Item>
            <ListGroup.Item>{personaje.status}</ListGroup.Item>
            <ListGroup.Item>{personaje.status}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    );
}

export default Tarjeta;
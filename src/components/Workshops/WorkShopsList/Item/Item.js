import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ name, id, imageUrl, location }) => {
    return (
        <Card className="w-100 p-3">
            <Card.Img variant="top" src={imageUrl} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {location.address}, {location.city}, {location.state}
                </Card.Text>
                <Link to={`/workshops/${id}`}>
                    <Button variant="primary">Know more</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default Item;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from './CartContext';
import { useContext } from 'react';

export const GroceryCard = ({pictureUrl, title, price}) => {
    const {addToCart} = useContext(Context)
    return(<Card style={{ width: '18rem', backgroundColor:'lightgrey' }}>
<Card.Img variant="top" src={pictureUrl} width={315} height={250}/>
<Card.Body>
  <Card.Title>{title}</Card.Title>
  <Card.Text>${price}</Card.Text>
  <Button variant="primary" onClick={() => addToCart({pictureUrl, title, price})}>Add to cart</Button>
</Card.Body>
</Card>)}
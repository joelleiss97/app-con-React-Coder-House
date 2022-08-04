import './Item.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';

import ItemCount from './ItemCount';

const Item = ({ name, price, thumbnail, stock, id}) => {
    const onAdd = (count) =>{
        alert( `has agregado ${count} a tu carrito`);
    }
      
        return (
          <Card className='card' style={{ width: '18rem' }}>
          <Card.Img className='productImg' variant="top" src={thumbnail} alt="" />
          <Card.Body >
            <Card.Title className="ProductTitle">{name}</Card.Title>
            <Button variant='info'>Ver Detalle</Button>
            <Card.Title className="ProductPrice">$ {price}</Card.Title>
            <ItemCount stock={stock} onAdd={onAdd} initial={1}></ItemCount>
            
          </Card.Body>
        </Card>

          
          
        )
      
};



export default Item;
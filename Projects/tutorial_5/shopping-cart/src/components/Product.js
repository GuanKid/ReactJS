import React from 'react';

export default function Product(props) {
  const { product, onAdd, cartItems, onRemove } = props;
  const cartItem = cartItems.find((x) => x.id === product.id);
  const quantity = cartItem ? cartItem.qty : 0;

  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>R{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
      {quantity > 0 && (
        <div>
          <p>Quantity: {quantity}</p>
          <button onClick={() => onRemove(product)}>-</button>
          <button onClick={() => onAdd(product)}>+</button>
        </div>
      )}
    </div>
  );
}
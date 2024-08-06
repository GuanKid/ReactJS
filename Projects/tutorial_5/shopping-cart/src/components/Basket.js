import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, onEmpty } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.15; // Tax set to 200%

  let shippingPrice = 0;
  if (itemsPrice > 0 && itemsPrice <= 1000) {
    shippingPrice = Math.floor(Math.random() * 100) + 100; // Random shipping price between 100 and 199
  } else if (itemsPrice > 1000 && itemsPrice <= 2000) {
    shippingPrice = Math.floor(Math.random() * 200) + 200; // Random shipping price between 200 and 399
  } else if (itemsPrice > 2000) {
    shippingPrice = Math.floor(Math.random() * 1500) + 500; // Random shipping price between 500 and 999
  }

  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const handleCheckout = () => {
    const invoiceNumber = Math.floor(Math.random() * 1000000); // Generate a random invoice number

    if (cartItems.some((item) => item.name.toLowerCase().includes('car'))) {
      alert(`Dear Customer,\n\nThanks for your shopping! However, we do not ship cars over the country. Please choose a different shipping method or remove the car from your cart.`);
    } else {
      alert(`Dear Customer,\n\nThanks for your shopping! We have received your proof of payment.\nA receipt has been emailed to you with the invoice number: ${invoiceNumber}`);
      onEmpty(); // Empty the cart after successful checkout
    }
  };

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x R{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">R{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">R{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                R{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>R{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={handleCheckout}>
                Checkout
              </button>
              <button onClick={onEmpty}>
                Empty Cart
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
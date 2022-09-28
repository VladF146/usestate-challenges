import "./ShoppingItem.css";
import { useState } from "react";

function ShoppingItem({ name, price }) {
  const [amount, setAmount] = useState(0);

  return (
    <section className="item">
      <h2>{name}</h2>
      <p>price: {price}</p>
      <p>amount: {amount}</p>
      <p>total: {price * amount}</p>
      <button
        className="item__button"
        type="button"
        onClick={() => setAmount(amount - 1)}
      >
        -
      </button>
      <button
        className="item__button"
        type="button"
        onClick={() => setAmount(amount + 1)}
      >
        +
      </button>
    </section>
  );
}

export default ShoppingItem;

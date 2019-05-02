import React from "react";
import { formatPrice } from '../helpers';

class Order extends React.Component {
  render() {
    const { fishes, order } = this.props;
    const orderIds = Object.keys(order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = fishes[key];
      const count = order[key];
      const isAvailable = fish && fish.status === 'available';

      if (isAvailable) return prevTotal + (count * fish.price);
      return prevTotal;
    }, 0)
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul>
          {orderIds.map(key => <li>{key}</li>)}
        </ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;

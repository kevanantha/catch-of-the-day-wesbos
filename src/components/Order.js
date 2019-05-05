import React from "react";
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {
  render() {
    const { fishes, order, deleteOrder } = this.props;
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
        <TransitionGroup component="ul" className="order">
          {orderIds.map(key => {
            const fish = fishes[key];
            const count = order[key];
            const isAvailable = fish && fish.status === 'available';
            if (!fish) return null;
            if (!isAvailable) {
              return (
                <CSSTransition
                  classNames="order"
                  key={key}
                  timeout={{ enten: 500, exit: 500 }}
                >
                  <li key={key}>
                    Sorry {fish ? fish.name : 'fish'} is no longer available
                  </li>
                </CSSTransition>
              )
            } else {
              return (
                <CSSTransition
                  classNames="order"
                  key={key}
                  timeout={{ enten: 500, exit: 500 }}
                >
                  <li key={key}>
                    <span>
                      <TransitionGroup component="span" className="count">
                        <CSSTransition
                          classNames="count"
                          key={count}
                          timeout={{ enter: 500, exit: 500 }}
                        >
                          <span>{count}</span>
                        </CSSTransition>
                      </TransitionGroup>
                      lbs {fish.name}
                      {" "}
                      {formatPrice(count * fish.price)}
                      <button onClick={deleteOrder(key)}>&times;</button>
                    </span>
                  </li>
                </CSSTransition>
              )
            }
          })}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;

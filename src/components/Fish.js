import React from "react";
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const { addToOrder, details, index } = this.props;
    const isAvailable = details && details.status === 'available';
    return (
      <div>
        {details &&
          <li className="menu-fish">
            <img src={details.image} alt={details.name} />
            <h3 className="fish-name">
              {details.name}
              <span className="price">{formatPrice(details.price)}</span>
            </h3>
            <p>{details.desc}</p>
            <button disabled={!isAvailable} onClick={addToOrder(index)}>{isAvailable ? "Add To Order" : "Sold Out"}</button>
          </li>
        }
      </div>
    );
  }
}

export default Fish;

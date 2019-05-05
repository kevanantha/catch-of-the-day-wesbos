import React from "react";
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  static PropTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string,
    }),
    addToOrder: PropTypes.func,
  }

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

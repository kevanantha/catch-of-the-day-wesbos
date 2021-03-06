import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: [],
    order: {},
  }

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    )
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  }

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  deleteFish = key => () => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => () => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  deleteOrder = key => () => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  }

  render() {
    const { fishes, order } = this.state;
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeafoodMarket" />
          <ul className="fishes">
            {Object.keys(fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={fishes}
          order={order}
          deleteOrder={this.deleteOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={fishes}
        />
      </div>
    );
  }
}

export default App;

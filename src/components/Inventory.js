import React from "react";
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    const { addFish, loadSampleFishes } = this.props
    return (
      <div className="inventory">
        <h2>inventory</h2>
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;

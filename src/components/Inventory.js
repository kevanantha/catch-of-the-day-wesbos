import React from "react";
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
  render() {
    const { addFish, updateFish, deleteFish, loadSampleFishes, fishes } = this.props
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            deleteFish={deleteFish}
            fish={fishes[key]}
            updateFish={updateFish}
          />
        ))}
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;

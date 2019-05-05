import React from 'react';

class EditFishForm extends React.Component {
  handleChange = e => {
    const { fish, updateFish, index } = this.props;
    const updatedFish = {
      ...fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    updateFish(index, updatedFish);
  }
  render() {
    const { fish, deleteFish, index } = this.props;
    return (
      <div>
        {fish &&
          <div className="fish-edit">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={fish.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={fish.price}
              onChange={this.handleChange}
            />
            <select
              name="status"
              value={fish.status}
              onChange={this.handleChange}
            >
              <option value="available">Fresh!</option>
              <option value="unavailable">Sold Out!</option>
            </select>
            <textarea
              name="desc"
              placeholder="Desc"
              value={fish.desc}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="image"
              placeholder="Image"
              value={fish.image}
              onChange={this.handleChange}
            />
            <button onClick={deleteFish(index)}>Remove Fish</button>
          </div>
        }
      </div>
    );
  }
}

export default EditFishForm;

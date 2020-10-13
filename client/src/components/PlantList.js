import React, { Component } from "react";
import axios from "axios";
import "./PlantList.css"

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor(props) {
    super(props);
    this.state = { 
      plants: [{ name: "...loading", id: 0 }], filter: "" 
    };
  }


  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  componentDidMount() {
    axios
      .get("http://localhost:3333/plants")
      .then(res => {
        console.log("ko: components: Plantlist.js: CDM: get data: ", res.data.plantsData)
        this.setState({
          plants: res.data.plantsData
        })
      })
      .catch((err) => console.error("failure to fetch plants: ", err.message));
  }

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <>
        <div className="searchContainer">
          <label htmlFor="filterText">
            Search for plant by name:{" "}
            <input
              type="text"
              name="filterText"
              id="filterText"
              value={this.state.filter}
              onChange={(e) => this.setState({ filter: this.Capitalize(e.target.value) })}
            />
          </label>
        </div>
        <main className="plant-list">
          {this.state.plants
            .filter(
              (p) =>
                p.name.includes(this.state.filter) ||
                p.description.includes(this.state.filter) ||
                p.scientificName.includes(this.state.filter)
            )
            .map((plant) => (
              <div className="plant-card" key={plant.id}>
                <img className="plant-image" src={plant.img} alt={plant.name} />
                <div className="plant-details">
                  <h2 className="plant-name">{plant.name}</h2>
                  <p className="plant-scientific-name">
                    {plant.scientificName}
                  </p>
                  <p>{plant.description}</p>
                  <div className="plant-bottom-row">
                    <p>${plant.price}</p>
                    <p>
                      <span role="img" aria-label="sun">
                        ☀️
                      </span>{" "}
                      {plant.light}
                    </p>
                    <p>
                      <span role="img" aria-label="water">
                        💦
                      </span>{" "}
                      {plant.watering}x/month
                    </p>
                  </div>
                  <button
                    className="plant-button"
                    onClick={() => this.props.addToCart(plant)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
        </main>
      </>
    );
  }
}
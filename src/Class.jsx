import React from "react";
import "./App.css";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "click on me !",

    };
  }

  updateState() {
    this.setState({ name: "Hello, This Amandeep Chauhan" })
  }

  render() {

    return (
      <div>
        <p onClick={() => { this.updateState() }} ><h2>{this.state.name}</h2></p>npm dev
      </div>
    );
  }
}
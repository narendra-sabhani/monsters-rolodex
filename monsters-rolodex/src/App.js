import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((elements) => elements.json())
      .then((monsters) => this.setState({ monsters: monsters }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>
          
      </div>
    );
  }
}

export default App;

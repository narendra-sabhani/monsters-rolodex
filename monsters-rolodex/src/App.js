import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((elements) => elements.json())
      .then((monsters) => this.setState({ monsters: monsters }));
  }

  handleOnChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex </h1>
        <SearchBox onChangeEvent={this.handleOnChange} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;

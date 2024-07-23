import { useState, Component } from "react";

import "./App.css";
import { CardList } from "./components/card-list/CardList.component";
import { SearchField } from "./components/seach-field/search-field.component";
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
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const newMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    console.log(newMonsters);
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchField placeholder="search monster" handleChange={e=>this.setState({searchField:e.target.value})} />
        <CardList monsters={newMonsters} />
      </div>
    );
  }
}

export default App;

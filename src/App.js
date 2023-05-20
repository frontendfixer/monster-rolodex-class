import { Component } from 'react';

import './App.css';

// Components
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



class App extends Component {
  // Constructor start
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  // =======================================

  //========Component mount start ==========
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  //========================================

  onSearchChange = event => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  // ======= App Component render start =======
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonstres = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>

        <div className="search-container">
          Search Monsters:
          <SearchBox
            className="monster-search-box"
            onChangeHandler={onSearchChange}
            placeholder="search monster..."
          />
        </div>

        <CardList monsters={filteredMonstres} />
      </div>
    );
  }
}

export default App;

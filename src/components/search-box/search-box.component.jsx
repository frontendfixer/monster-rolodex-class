import { Component } from 'react';
import './search-box.style.css';

class SearchBox extends Component {
  render() {
    const searchMethod = this.props.onChangeHandler;
    const placeholder = this.props.placeholder;
    const className = this.props.className;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={searchMethod}
      />
    );
  }
}

export default SearchBox;

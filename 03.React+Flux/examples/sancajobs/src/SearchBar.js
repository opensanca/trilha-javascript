//src/SearchBar.js

import React, { Component } from 'react';

class SearchBar extends Component {

  handleChange = event => {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.search}
            placeholder="Buscar por vagas"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;

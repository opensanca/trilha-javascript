//src/SearchBar.js

import React, { Component } from 'react';

class SearchBar extends Component {

  handleChange = event => {
    this.props.onChange({
      ...this.props.search,
      text: event.target.value,
    });
  };

  handleFullTimeChange = () => {
    this.props.onChange({
      ...this.props.search,
      isFullTime: !this.props.search.isFullTime,
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.search.text}
            placeholder="Buscar por vagas"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={this.props.search.isFullTime}
              onChange={this.handleFullTimeChange}
            />
            Full Time
          </label>
        </div>
      </div>
    );
  }
}

export default SearchBar;

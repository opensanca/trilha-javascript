//src/JobItem.js
import React, { Component, PropTypes } from 'react';

class JobItem extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    contract: PropTypes.oneOf(['CLT', 'PJ']),
    type: PropTypes.string,
    company: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
  };

  render() {
    const {
      title,
      contract,
      type,
      company,
      city,
      state,
    } = this.props;

    return (
      <div style={{
        textAlign: 'left',
        border: '1px solid gray',
        padding: 8,
      }}>
        <div>{title}</div>
        <div>
          {contract}, {type} @ {company} - {city}/{state}
        </div>
      </div>
    );
  }
};

export default JobItem;

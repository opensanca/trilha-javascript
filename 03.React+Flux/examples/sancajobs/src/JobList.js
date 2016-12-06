//src/JobList.js
import React, { Component, PropTypes } from 'react';

import JobItem from './JobItem';

class JobList extends Component {

  static propTypes = {
    jobs: PropTypes.array,
  };

  render() {
    const itens = this.props.jobs.map(job =>
      <JobItem
        key={job.id}
        title={job.title}
        contract={job.contract}
        type={job.type}
        company={job.company}
        city={job.city}
        state={job.state}
      />
    );
    return (
      <div>
        {itens}
      </div>
    );
  }
}

export default JobList;

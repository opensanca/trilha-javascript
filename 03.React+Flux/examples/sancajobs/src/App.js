import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import JobList from './JobList';
import SearchBar from './SearchBar';

const jobs = [
   {
      "id":1,
      "title":"Programador PL Java",
      "contract":"CLT",
      "type":"Full Time",
      "company":"Monitora",
      "city":"Sao Carlos",
      "state":"SP"
   },
   {
      "id":2,
      "title":"Gerente de Projeto",
      "contract":"CLT",
      "type":"Full Time",
      "company":"Siena Ideia",
      "city":"Sao Carlos",
      "state":"SP"
   },
   {
      "id":3,
      "title":"Programador Delphi",
      "contract":"CLT",
      "type":"Part Time",
      "company":"Guarani Sistemas",
      "city":"Sao Carlos",
      "state":"SP"
   },
   {
      "id":4,
      "title":"Programador Mobile iOS",
      "contract":"PJ",
      "type":"Full Time",
      "company":"Minha Vida",
      "city":"Sao Carlos",
      "state":"SP"
   }
];

const jobToString = job =>
  `${job.title} ${job.company} ${job.city} ${job.state}`.toLowerCase();

class App extends Component {

  state = {
    search: {
      text: '',
      isFullTime: false,
    },
  };

  handleChange = search => {
    this.setState({ search });
  }

  render() {
    const text = this.state.search.text;
    console.log(this.state.search.isFullTime);
    return (
      <div className="App">
        <SearchBar
          search={this.state.search}
          onChange={this.handleChange}
        />
        <JobList
          jobs={jobs.filter(job =>
            jobToString(job)
              .includes(text.toLowerCase()))}
        />
      </div>
    );
  }
}

export default App;

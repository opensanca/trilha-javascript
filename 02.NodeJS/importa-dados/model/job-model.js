'use strict';

const jobs = [];

function Job(title, company, contact) {
  this.title = title;
  this.company = company;
  this.contact = contact;
}

Job.prototype.save = function() {
  jobs.push(this);
};

module.exports = Job;

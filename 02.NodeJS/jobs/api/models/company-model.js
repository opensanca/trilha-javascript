'use strict';
let companies = [];

class Company {
  constructor(name, segment, email, site, city, tecnologies) {
    this.name = name;
    this.segment = segment;
    this.email = email;
    this.site = site;
    this.city = city;
    this.tecnologies = tecnologies;
  }

  save() {
    companies.push(this);
  }

  update() {
    companies[this.id] = this;
  }

  static remove(id) {
    companies.splice(id, 1);
  }

  static getById(id) {
    return companies[id];
  }

  static get(name) {
    if(name) {
      return companies.filter(
        (company) => company.name.toLowerCase().startsWith(name)
      );
    }
    return companies;
  }
}
module.exports = Company;

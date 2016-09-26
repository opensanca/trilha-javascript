'use strict';
const companies = [];
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

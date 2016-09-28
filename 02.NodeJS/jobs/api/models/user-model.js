'use strict';
const users = [];

class User {
  constructor(name, password, profile) {
    this.name = name;
    this.password = password;
    this.profile = profile;
  }
  save() {
    users.push(this);
  }

  static get(name) {
    if(name) {
      return users.filter(
        (user) => user.name.toLowerCase().startsWith(name)
      );
    }
    return users;
  }
}

new User('Renan', '123456', 'ADMIN').save();

module.exports = User;

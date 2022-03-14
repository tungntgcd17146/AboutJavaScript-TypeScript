/**
 * Constructor of user information
 * @param {Number} id : User id
 * @param {String} name : User name
 * @param {String} age : User Age
 * @param {String} address : User address
 * @param {String} email : User email
 */
export default class User {
  constructor(id, name, age, address, email) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.email = email;
  }
}

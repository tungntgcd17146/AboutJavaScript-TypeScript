/**
 * Constructor of user information
 * @param {Number} id : User id
 * @param {String} name : User name
 * @param {String} age : User Age
 * @param {String} address : User address
 * @param {String} email : User email
 */
export default class User {
  id: number;
  name: string;
  age: string;
  email: string;
  address: string;
  
  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.age = user.age;
    this.address = user.address;
    this.email = user.email;
  }
}


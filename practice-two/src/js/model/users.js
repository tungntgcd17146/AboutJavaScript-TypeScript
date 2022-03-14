import { defaultValue } from "../mock/users";
import User from "./user";

export default class Users {
  constructor() {
    this.users =
      defaultValue || JSON.parse(localStorage.getItem("users"));
    this.isAscend = true;
  }
  /**
   * @param {object} user: Bind store list changed
   */
  bindUsersChanged(user) {
    this.onListChanged = user;
  }

  /**
   * Commit data to localStorage
   * @param {object} users: Stores data
   */
  setUsersStorage(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  /**
   * display information data
   */
  displayUsers() {
    return this.users;
  }

  /**
   * Create new user information
   * @param {object} user: Content of new user
   */
  createUser(user) {
    let id =
      this.users.length > 0
        ? this.users[this.users.length - 1].id + 1
        : 1;
    const newInfo = new User(
      id,
      user.name,
      user.age,
      user.address,
      user.email
    );
    this.users.push(newInfo);
    this.setUsersStorage(this.users);
  }

  /**
   * Get user info by id
   * @param {id} id: user id
   */
  findUser(id) {
    let matchedUser = this.users.findIndex((user) => user.id === id);
    return this.users[matchedUser];
  }

  /**
   * Update user info
   * @param {user} user
   */
  updateUser(user) {
    let matchedUser = this.users.findIndex((item) => item.id === user.id);
    this.users[matchedUser] = new User(
      user.id,
      user.name,
      user.age,
      user.address,
      user.email
    );
  }

  /**
   * Delete user info by id
   * @param {id} id
   */
  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
    this.setUsersStorage(this.users);
  }

  /**
   * sort user from array data by name
   */
  sortUser() {
    if (this.isAscend) {
      this.users.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      this.users.sort((a, b) => (a.name > b.name ? -1 : 1));
    }
    this.isAscend = !this.isAscend;
    return this.users;
  }
}

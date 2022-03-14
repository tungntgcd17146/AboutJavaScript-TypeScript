import { defaultValue } from '../mock/users';
import User from './user';

export default class Users {
  private users: User[];
  private isAscend: boolean;
  
  constructor() {
    this.users =
      defaultValue || JSON.parse(localStorage.getItem('users') || '');
    this.isAscend = true
  }

  /**
   * Commit data to localStorage
   * @param {object} users: Stores data
   */
  setUsersStorage = (users: User[]): void => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  /**
   * display users information data
   */
  displayUsers = (): User[] => this.users;

  /**
   * Create new user information
   * @param {object} user: Content of new user
   */
  createUser = (user: User): void => {
    
    user.id =
      this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;

    this.users.push(user);
    this.setUsersStorage(this.users);
  };

  /**
   * Get user info by id
   * @param {id} id: user id
   */
  findUser(id: number): User {
    const matchedUser = this.users.findIndex(user => user.id === id);
    
    return this.users[matchedUser];
  }

  /**
   * Update user info
   * @param {user} user
   */
  updateUser(user: User): void {
    const matchedUser = this.users.findIndex(item => item.id === user.id);
    this.users[matchedUser] = user;
  }

  /**
   * Delete user info by id
   * @param {id} id
   */
  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    this.setUsersStorage(this.users);
  }

  /**
   * sort user from array data by name
   */
  sortUser(): User[] {

    if (this.isAscend) {
      this.users.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      this.users.sort((a, b) => (a.name > b.name ? -1 : 1));
    }
    
    this.isAscend = !this.isAscend;
    
    return this.users;
  }
}


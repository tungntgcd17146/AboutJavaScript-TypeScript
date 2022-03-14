import UserModel from '../model/users';
import UserView from '../view/users';
import User from '../model/user';

export default class UsersController {
  private view: UserView;
  private model: UserModel;

  constructor(model: UserModel, view: UserView) {
    this.model = model;
    this.view = view;

    this.view.showUsers(this.model.displayUsers());
    this.view.addBtnEvent();
    this.view.bindSubmitUsers(this.handleUser);
    this.view.updateBtnEvent(this.getUser);
    this.view.deleteBtnEvent(this.handleDeleteUser);
    this.view.sortBtnEvent(this.handleSortUser);
  }

  /**
   * Get User Info
   * @param {id} id : user id
   */
  getUser = (id: number): void => {
    const user = this.model.findUser(id);
    this.view.displayUsersEdit(user);
  };

  handleUser = (users: User): void => {
    
    if (users.id) {
      this.model.updateUser(users);
    } else {
      this.model.createUser(users);
    }
    this.view.showUsers(this.model.displayUsers());
  };

  /**
   * Handle delete user information
   * @param {id} id : User id
   */
  handleDeleteUser = (id: number): void => {
    this.model.deleteUser(id);
    this.view.showUsers(this.model.displayUsers());
  };

  /**
   * Handle sort user info
   */
  handleSortUser = (): void => {
    this.model.sortUser();
    this.view.showUsers(this.model.displayUsers());
  };
}


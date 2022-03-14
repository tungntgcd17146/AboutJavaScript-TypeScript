export default class UsersController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.initial();
  }

  initial() {
    this.view.showUsers(this.model.displayUsers());
    this.view.addBtnEvent();
    this.model.bindUsersChanged(this.handleUsersChanged);
    this.view.updateBtnEvent(this.getUser.bind(this));
    this.view.bindSubmitUsers(this.handleUser.bind(this));
    this.view.deleteBtnEvent(this.handleDeleteUser.bind(this));
    this.view.sortBtnEvent(this.handleSortUser.bind(this));
  }

  /**
   * display data when stores data changed
   */
   handleUsersChanged(users) {
    this.view.displayUsers(users);
  };

  /**
   * Get User Info
   * @param {id} id : user id
   */
  getUser(id) {
    const user = this.model.findUser(id);
    this.view.displayUsersEdit(user);
  };

  /**
   * Handle when update or create new user information
   * @param {user} user : User info
   */
  handleUser(user) {
    if(user.id) {
      this.model.updateUser(user);
    } else {
      this.model.createUser(user);
    }
    this.view.showUsers(this.model.displayUsers());
  };

  /**
   * Handle delete user information
   * @param {id} id : User id
   */
  handleDeleteUser(id) {
    this.model.deleteUser(id);
    this.view.showUsers(this.model.displayUsers());
  };

  /**
   * Handle sort user info
   */
  handleSortUser() {
    this.model.sortUser();
    this.view.showUsers(this.model.displayUsers());
  };
}

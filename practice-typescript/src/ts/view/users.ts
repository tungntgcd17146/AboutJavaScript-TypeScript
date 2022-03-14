import User from '../model/user';
import { validateForm } from '../utils/formValidate';
import { RULES, ERROR_MESSAGES } from '../constant/validation';

export default class UsersView {
  private displayUsersList: HTMLElement;
  private formInput: HTMLFormElement;
  private formTitle: HTMLElement;

  private addUser: HTMLElement;
  private sortButton: HTMLElement;

  private errorName: HTMLElement;
  private errorAge: HTMLElement;
  private errorAddress: HTMLElement;
  private errorEmail: HTMLElement;

  constructor() {
    this.displayUsersList = <HTMLElement>this.getElement('#display-info');
    this.formInput = <HTMLFormElement>this.getElement('#createNewForm');
    this.formTitle = <HTMLElement>this.getElement('.modal-title');

    this.addUser = <HTMLElement>this.getElement('#createButton');
    this.sortButton = <HTMLElement>this.getElement('#sortButton');

    this.errorName = <HTMLElement>this.getElement('#errorNameMess');
    this.errorAge = <HTMLElement>this.getElement('#errorAgeMess');
    this.errorAddress = <HTMLElement>this.getElement('#errorAddressMess');
    this.errorEmail = <HTMLElement>this.getElement('#errorEmailMess');
  }

  /**
   * Create new element
   * @param {tag} tag : Element tag name
   */
  createElement = (tag: string): HTMLElement => document.createElement(tag);

  /**
   * Get element
   * @param {selector} selector : Querying element by selector
   */
  getElement = (selector: string): HTMLElement | null =>
    document.querySelector(selector);

  /**
   * show user info data
   * @param {users} users : user info
   */
  showUsers = (users: User[]): void => {
    this.displayUsersList.innerHTML = '';
    users.forEach((user, id) => {
      this.displayUsers(user, id);
    });
  };

  /**
   * Render User information from stores data
   * @param {users} users : user info
   * @param {id} id : id index of user
   */
  displayUsers = (users: User, id: number): void => {
    const trElement = this.createElement('tr');
    const dataArray = [
      id + 1,
      users.name,
      users.age,
      users.address,
      users.email,
    ];

    for (const value of dataArray) {
      const tdElement = this.createElement('td');
      tdElement.innerHTML += value;
      trElement.append(tdElement);
    }

    const tdElement = this.createElement('td');

    const editButton = this.createElement('button');
    editButton.className = 'delete btn btn-outline-success';
    editButton.setAttribute('data-bs-toggle', 'modal');
    editButton.setAttribute('data-bs-target', '#createNewModal');
    editButton.setAttribute('data-id', `${users.id}`);
    editButton.setAttribute('id', 'edit-btn');
    editButton.textContent = 'Edit';

    const deleteButton = this.createElement('button');
    deleteButton.className = 'edit btn btn-outline-danger';
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('data-id', `${users.id}`);
    deleteButton.setAttribute('id', 'delete-btn');

    tdElement.append(editButton, deleteButton);

    trElement.append(tdElement);

    this.displayUsersList.append(trElement);
  };

  /**
   * Form validation for create form and edit form
   * @param {user} user : user info
   */
  formValidate = (user: User): boolean => {
    const regexName = validateForm(
      RULES.regexName,
      user.name,
      ERROR_MESSAGES.name
    );
    const regexAge = validateForm(
      RULES.regexAge, 
      user.age, 
      ERROR_MESSAGES.age
    );
    const regexAddress = validateForm(
      RULES.regexAddress,
      user.address,
      ERROR_MESSAGES.address
    );
    const regexEmail = validateForm(
      RULES.regexEmail,
      user.email,
      ERROR_MESSAGES.email
    );

    this.errorName.innerHTML = regexName || '';
    this.errorAge.innerHTML = regexAge || '';
    this.errorAddress.innerHTML = regexAddress || '';
    this.errorEmail.innerHTML = regexEmail || '';

    return !regexName && !regexAge && !regexAddress && !regexEmail;
  };

  /**
   * Events when click create new user info button
   */
  addBtnEvent = (): void => {
    this.addUser.addEventListener('click', () => {
      this.formTitle.innerHTML = 'Create New Information';
      this.formInput.submitButton.innerHTML = 'Submit';
      this.formInput.userId.value = '';
      this.formInput.reset();
    });
  };

  /**
   * Event submit form
   * @param {handler} handler : functional
   */
  bindSubmitUsers = (handler: (user: User) => void): void => {
    this.formInput.addEventListener('submit', e => {
      e.preventDefault();
      const id: number = +this.formInput.userId.value;
      const name: string = this.formInput.fullName.value;
      const age: string = this.formInput.age.value;
      const address: string = this.formInput.address.value;
      const email: string = this.formInput.email.value;

      const userInfo: User = { id, name, age, address, email };

      if (this.formValidate(userInfo)) {
        handler(userInfo);
        this.formInput.reset();
      }
    });
  };

  /**
   * Events when click update user info button
   */
  updateBtnEvent = (handler: (id: number) => void): void => {
    this.displayUsersList.addEventListener('click', e => {
      const element: HTMLElement = <HTMLInputElement>e.target;
      
      if (element.id === 'edit-btn') {
        this.formTitle.innerHTML = 'Edit Information';
        this.formInput.submitButton.innerHTML = 'Update';
        const dataSet: HTMLElement = <HTMLFormElement>element.dataset;
        handler(parseInt(dataSet.id));
      }
    });
  };

  /**
   * Show data from stores data to form edit
   * @param {User} User : data from stores data
   */
  displayUsersEdit = (user: User): void => {
    this.formInput.userId.value = user.id;
    this.formInput.fullName.value = user.name;
    this.formInput.age.value = user.age;
    this.formInput.address.value = user.address;
    this.formInput.email.value = user.email;
  };

  /**
   * Delete user info button
   * @param {handler} handler : functional
   */
  deleteBtnEvent = (handler: (id: number) => void): void => {
    this.displayUsersList.addEventListener('click', e => {
      const element = <HTMLInputElement>e.target;
      
      if (element.id === 'delete-btn') {
        const dataSet: HTMLElement = <HTMLFormElement>element.dataset;
        const isConfirmed: boolean = window.confirm(
          'Are you sure to delete this information?'
        );
        
        if (isConfirmed) {
          return handler(parseInt(dataSet.id));
        }
      }
    });
  };

  /**
   * Sort user info button
   * @param {handler} handler : functional
   */
  sortBtnEvent = (handler: () => void): void => {
    this.sortButton.addEventListener('click', e => {
      e.preventDefault;
      handler();
    });
  };
}


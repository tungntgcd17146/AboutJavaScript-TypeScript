import {Rules} from "../utils/validate-rules";

export default class UsersView {
  errorMessage = document.querySelectorAll('.form-error-message')
  constructor() {
    this.queryPlace();
    this.queryButton();
    this.queryMessage();
  }

  queryPlace() {
    this.formInput = this.getElement("#createNewForm");
    this.formTitle = this.getElement(".modal-title");
    this.displayUsersList = this.getElement("#display-info");
  }

  queryButton() {
    this.sortButton = this.getElement("#sortButton");
    this.addUser = this.getElement("#createButton");
  }

  queryMessage() {
    this.errorName = this.getElement("#errorNameMess");
    this.errorAge = this.getElement("#errorAgeMess");
    this.errorAddress = this.getElement("#errorAddressMess");
    this.errorEmail = this.getElement("#errorEmailMess");
  }

  /**
   * Create new element
   * @param {tag} tag : Element tag name
   * @param {className} className : element class name attribute
   */
  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  /**
   * Get element
   * @param {selector} selector : Querying element by selector
   */
  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  /**
   * Render User information from stores data
   * @param {users} users : user info
   * @param {id} id : id index of user
   */
  displayUsers(users, id) {
    let trElement = this.createElement("tr");
    let dataArray = [id + 1, users.name, users.age, users.address, users.email];
    for (const value of dataArray) {
      let tdElement = this.createElement("td");
      tdElement.textContent = value;
      trElement.append(tdElement);
    }

    let tdElement = this.createElement("td");

    const editButton = this.createElement("button");
    editButton.type = "button";
    editButton.classList = "delete btn btn-outline-success";
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#createNewModal");
    editButton.setAttribute("data-id", users.id);
    editButton.setAttribute("id", "edit-btn");
    editButton.textContent = "Edit";

    const deleteButton = this.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList = "edit btn btn-outline-danger";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("data-id", users.id);
    deleteButton.setAttribute("id", "delete-btn");

    tdElement.append(editButton, deleteButton);

    trElement.append(tdElement);

    this.displayUsersList.append(trElement);
  }

  /**
   * show user info data
   * @param {users} users : user info
   */
  showUsers(users) {
    this.displayUsersList.innerHTML = "";
    users.forEach((item, index) => {
      this.displayUsers(item, index);
    });
  }

  /**
   * Form validation for create form and edit form
   * @param {users} users : user info
   */
  validateForm(users) {
    let valid = true;

    if (!Rules.regexName.test(users.name)) {
      this.errorName.innerHTML =
        "Please input right value(exam: Nguyen Thanh Tung)";
      valid = false;
    } else {
      this.errorName.innerHTML = "";
    }

    if (!Rules.regexAge.test(users.age)) {
      this.errorAge.innerHTML = "Enter the correct format DD-MM-YYYY";
      valid = false;
    } else {
      this.errorAge.innerHTML = "";
    }

    if (!Rules.regexAddress.test(users.address)) {
      this.errorAddress.innerHTML =
        "Please enter the correct address (exam: 12 Quang Trung, Da Nang";
      valid = false;
    } else {
      this.errorAddress.innerHTML = "";
    }

    if (!Rules.regexEmail.test(users.email)) {
      this.errorEmail.innerHTML =
        "This field must be email (exam:abc@gmail.com.vn)";
      valid = false;
    } else {
      this.errorEmail.innerHTML = "";
    }

    return valid;
  }

  /**
   * Events when click create new user info button
   */
  addBtnEvent() {
    this.addUser.addEventListener("click", () => {
      this.formTitle.innerHTML = "Create New Information";
      this.formInput.submitButton.innerHTML = "Submit";
      this.formInput.userId.value = "";
      this.formInput.reset();
    });
  }

  /**
   * Event submit form
   * @param {handler} handler : functional
   */
  bindSubmitUsers(handler) {
    this.formInput.addEventListener("submit", (e) => {
      e.preventDefault();
      const elements = e.currentTarget;
      const id = +elements.userId.value;

      const name = this.formInput.fullName.value;
      const age = this.formInput.age.value;
      const address = this.formInput.address.value;
      const email = this.formInput.email.value;

      const userInfo = { id, name, age, address, email };
      if (this.validateForm(userInfo)) {
        handler(userInfo);
        this.formInput.reset();
      }
    });
  }

  /**
   * Events when click update user info button
   */
  updateBtnEvent(handler) {
    this.displayUsersList.addEventListener("click", (e) => {
      if (e.target.id === "edit-btn") {
        this.formTitle.innerHTML = "Edit Information";
        this.formInput.submitButton.innerHTML = "Update";
        handler(parseInt(e.target.dataset.id));
      }
    });
  }

  /**
   * Show data from stores data to form edit
   * @param {Users} Users : data from stores data
   */
  displayUsersEdit(Users) {
    this.formInput.userId.value = Users.id;
    this.formInput.fullName.value = Users.name;
    this.formInput.age.value = Users.age;
    this.formInput.address.value = Users.address;
    this.formInput.email.value = Users.email;
  }

  /**
   * Delete user info button
   * @param {handler} handler : functional
   */
  deleteBtnEvent(handler) {
    this.displayUsersList.addEventListener("click", (e) => {
      if (e.target.id === "delete-btn") {
        let isConfirmed = window.confirm(
          "Are you sure to delete this information?"
        );
        if (isConfirmed) return handler(parseInt(e.target.dataset.id));
      }
    });
  }

  /**
   * Sort user info button
   * @param {handler} handler : functional
   */
  sortBtnEvent(handler) {
    this.sortButton.addEventListener("click", (e) => {
      handler();
    });
  }
}

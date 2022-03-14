import Users from "./js/model/users";
import UsersView from "./js/view/users";
import UsersController from "./js/controller/users";

new UsersController(new Users(), new UsersView());

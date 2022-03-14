import Users from './ts/model/users';
import UsersView from './ts/view/users';
import UsersController from './ts/controller/users';

new UsersController(new Users(), new UsersView());


import {getUsers} from './users';
import login from './login';
import loggedIn from './loggedIn';

// Chack if logged in
loggedIn();


document.getElementById('loginButton')!.addEventListener('click', function(e){

    e.preventDefault();

    let username:string = (<HTMLInputElement>document.getElementById('username')).value;
    let password:string = (<HTMLInputElement>document.getElementById('password')).value;


    login(getUsers()[0], {username, password});

});

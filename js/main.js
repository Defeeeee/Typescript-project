"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
var login_1 = __importDefault(require("./login"));
document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    login_1.default(users_1.getUsers()[0], { username: username, password: password });
});

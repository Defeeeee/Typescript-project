"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
function default_1() {
    if (localStorage.username) {
        document.getElementById('loginModalButtonContainer').innerHTML = "<span>Hola, " + users_1.getUsers()[0].username + "</span>";
        document.getElementById('addGalleryItemButtonContainer').innerHTML = "<button class=\"btn btn-primary btn-block\">Add photo</button>";
    }
}
exports.default = default_1;

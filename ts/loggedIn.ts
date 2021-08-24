import { getUsers } from "./users";

export default function(){

    if( localStorage.username ){

        document.getElementById('loginModalButtonContainer')!.innerHTML = `<span>Hola, ${getUsers()[0].username}</span>`;

        document.getElementById('addGalleryItemButtonContainer')!.innerHTML = `<button class="btn btn-primary btn-block">Add photo</button>`;

        

    }

}
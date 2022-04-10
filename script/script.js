let character = document.getElementById('character');
let block = document.getElementById('block');

function jump() {
    character.classList.add('animated');
    setTimeout(function(){
        character.classList.remove('animated')
    }, 500);
}
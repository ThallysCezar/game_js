//criando as variáveis e pegando o valor delas do html
let character = document.getElementById('character');
let block = document.getElementById('block');


// o efeito de pular
function jump() {

    if(character.classList != 'animated'){
        character.classList.add('animated');
    }

    setTimeout(function(){
        character.classList.remove('animated')
    }, 500);
}


//verificar a morte, se o bloco entrou em contato com o character
let verfMorte = setInterval(function(){
    let characterTop = parseInt (window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt (window.getComputedStyle(block).getPropertyValue('left'));

    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = 'none';
        block.style.display = 'none';
        alert("Você perdeu!!!")
    }
}, 10);
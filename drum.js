
// Evento de teclado selecionada
document.onkeydown = teclado;

// function central
function teclado(e){
    if(e.keyCode == 65){
        Audio = document.getElementById('audi1');
        Audio.play();
    }
}



function click(x){
    le = x
    if(le == 'a'){
        Audio = document.getElementById('audi1');
        Audio.play();
    }
}

// Key_code
// a = 65
// s = 83
// d = 68
// f = 70
// g = 71
// h = 72
// j = 74
// k = 75
// l = 76
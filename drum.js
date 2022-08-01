
// Evento de teclado selecionada
document.onkeydown = teclado;

// function central
function teclado(e){
    if(e.keyCode == 65){
        Audio = document.getElementById('audi1');
        Audio.play();
    }
    else if (e.keyCode == 83){
        Audio = document.getElementById('audi2');
        Audio.play();
    }
    else if (e.keyCode == 68){
        Audio = document.getElementById('audi3');
        Audio.play();
    }
    else if (e.keyCode == 71){
        Audio = document.getElementById('audi4');
        Audio.play();
    }
    else if (e.keyCode == 72){
        Audio = document.getElementById('audi5');
        Audio.play();
    }
    else if (e.keyCode == 74){
        Audio = document.getElementById('audi6');
        Audio.play();
    }
    else if (e.keyCode == 75){
        Audio = document.getElementById('audi7');
        Audio.play();
    }
    else if (e.keyCode == 76){
        Audio = document.getElementById('audi8');
        Audio.play();
    }
}


function click(x){
    var part = x
    if(part == 'a'){
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
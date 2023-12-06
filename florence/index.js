


function HoverMouse(titulo, paragrafo) {
    var titulo1 = document.getElementById('tituloh1');
    var paragrafo1 = document.getElementById("paragrafo")
    titulo1.innerHTML = titulo;
    paragrafo1.innerHTML = paragrafo;
}


function abrirSessao() {
    
    var minhaSessao = document.getElementById('minhaSessao');
    if (minhaSessao.style.display === 'none') {
        minhaSessao.style.display = 'block';
    } else {
        minhaSessao.style.display = 'none';
    }
}

function toggleLista() {
    var lista = document.getElementById('listaNavegacao');
    lista.style.display = (lista.style.display === 'none' || lista.style.display === '') ? 'block' : 'none';
}
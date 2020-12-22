
function redirecionar() {
    window.location.href = "/area-usuario";
}

function resultado(){
    const pesquisa = document.getElementById('b-pesquisa');

    return pesquisa
    window.location.href = "/vagas?="+pesquisa+"";
}
function trocaClasse(elemento, antiga, nova) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
}

setTimeout(function () {
    var body = document.querySelector('body');
    trocaClasse(body, 'web', 'dark');
}, 2000);
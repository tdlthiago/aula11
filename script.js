function salvarDados() {
    let area = document.querySelector('.area').value
    let numero = document.querySelector('.numero').value
    let bairro = document.querySelector('.bairro').value
    let cidade = document.querySelector('.cidade').value

    let lista = document.createElement('li')

    lista.innerText = area + " m² -numero: " + numero + " (" + bairro + " - " + cidade + ")"
    let botao = document.createElement('button')

    botao.innerText = "remover"

    botao.setAttribute("onclick", "removerLista(this)")

    lista.appendChild(botao)
    document.getElementById("lista").appendChild(lista)

}

function removerLista(button) {
    let removerLista = button.parentNode
    document.getElementById("lista").removeChild(removerLista)
}

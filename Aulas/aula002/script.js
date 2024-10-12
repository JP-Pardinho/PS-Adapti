const adicionarCard = () => {
    let cardExemplo = document.querySelector("#card-exemplo")
    //console.log(cardExemplo)

    let novoCard = cardExemplo.cloneNode(true)
    novoCard.removeAttribute("id")
    //console.log(novoCard)

    let container = document.querySelector("#container")
    container.appendChild(novoCard)


}

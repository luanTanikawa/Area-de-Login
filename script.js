let campoText = [...document.querySelectorAll('.campo-text')]
let input = [...document.querySelectorAll('.input')]
let btnEntrar = document.querySelector('#botao-entrar')
let btnSenha = document.querySelector('.senha')
let boxSenha = document.querySelector('.box-senha')
let inputEmail = document.querySelector('.input-email')
let campoEmail = document.querySelector('.campo-email')
let btnEmail = document.querySelector('#botao-email')

btnEntrar.addEventListener('click', () => {

    input.map((input, indice) => {
        
        input.classList.remove('error')

        if (input.value == '') {

            input.classList.add('error')
            
            if (campoText[indice].children.length == 1) {
                campoText[indice].innerHTML += '<div class="text-error">Este Campo é obrigatório</div>'           
            }
        } else if (campoText[indice].children.length == 2) {
            campoText[indice].children[1].remove()
        }
    })   
})

btnSenha.addEventListener('click', () => {
    boxSenha.style.display = 'block'
})

btnEmail.addEventListener('click', () => {

    inputEmail.classList.remove('error')

    if (inputEmail.value == '') {
        
        inputEmail.classList.add('error')

        if (campoEmail.children.length == 1) {
            campoEmail.innerHTML += '<div class="text-error">Este Campo é obrigatório</div>'    
        }
    } else if (campoEmail.children.length == 2) {
        campoEmail.children[1].remove()
    }
})
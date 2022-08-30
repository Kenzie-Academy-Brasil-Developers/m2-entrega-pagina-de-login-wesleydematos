let spanSenhaEsquecida = document.getElementById('senhaEsquecida')
let spanFechaModal = document.getElementById('spanFechaModal')
let btnModal = document.getElementById('btnModal')
let spanFechaPopUp = document.getElementById('fechaPopUp')
let modalSenha = document.querySelector('.section__modal__senha')
let popUp = document.querySelector('.section__popup')
let inputEmail = document.getElementById('email')

function abreFechaModal(span){
    span.addEventListener('click', ()=>{
        inputEmail.value = ''
        modalSenha.classList.toggle('hidden')
    })
}
abreFechaModal(spanSenhaEsquecida)
abreFechaModal(spanFechaModal)

function abrePopUp(){
    btnModal.addEventListener('click', ()=>{
        if(inputEmail.value.includes('@')){
            modalSenha.classList.toggle('hidden')
            inputEmail.value = ''
            popUp.classList.toggle('hidden')
        }else{
            alert('Insira um email válido!')
        }
    })
}
abrePopUp()

function fechaPopUp(){
    spanFechaPopUp.addEventListener('click', ()=>{
        inputEmail.value = ''
        popUp.classList.toggle('hidden')
    })
}
fechaPopUp()
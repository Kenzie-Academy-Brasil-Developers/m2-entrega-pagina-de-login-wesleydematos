let spanSenhaEsquecida = document.getElementById('senhaEsquecida')
let spanFechaModal = document.getElementById('spanFechaModal')
let btnModal = document.getElementById('btnModal')
let spanFechaPopUp = document.getElementById('fechaPopUp')
let modalSenha = document.querySelector('.section__modal__senha')
let popUp = document.querySelector('.section__popup')

function abreFechaModal(span){
    span.addEventListener('click', ()=>{
        modalSenha.classList.toggle('hidden')
    })
}
abreFechaModal(spanSenhaEsquecida)
abreFechaModal(spanFechaModal)

function abrePopUp(){
    let inputEmail = document.getElementById('email')
    btnModal.addEventListener('click', ()=>{
        if(inputEmail.value.includes('@')){
            modalSenha.classList.toggle('hidden')
            popUp.classList.toggle('hidden')
        }else{
            alert('Insira um email válido!')
        }
    })
}
abrePopUp()

function fechaPopUp(){
    spanFechaPopUp.addEventListener('click', ()=>{
        popUp.classList.toggle('hidden')
    })
}
fechaPopUp()
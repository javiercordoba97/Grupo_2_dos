window.onload = function(){


    const imputName= document.querySelector("#email")
    imputName.focus()
    const form = document.querySelector(".form")
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        var completarCampo=""
        const err = document.querySelector(".err")
        if(form.email.value==""){
            form.email.classList.add("invalid")
            completarCampo="Falta completar campos"
        } else{
            form.email.classList.remove("invalid")
        }
        if(form.password.value==""){
            form.password.classList.add("invalid")
            completarCampo="Falta completar campos"
        } else{
            form.password.classList.remove("invalid")
        }
        if (completarCampo==""){form.submit()}
        else{
            err.innerHTML += "<li>"+completarCampo+"</li>"
            err.classList.add("alert_warning")}
    })
}
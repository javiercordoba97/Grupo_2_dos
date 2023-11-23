window.onload = function(){


    const imputName= document.querySelector("#name")
    imputName.focus()
    const form = document.querySelector(".form")
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        var completarCampo=""
        const err = document.querySelector(".err")
        if(form.name.value==""){
            form.name.classList.add("invalid")
            completarCampo="Falta completar campos"
        } else{
            form.name.classList.remove("invalid")
        }
        if(form.last_name.value==""){
            form.last_name.classList.add("invalid")
            completarCampo="Falta completar campos"
        } else{
            form.last_name.classList.remove("invalid")
        }
        if(form.password.value==""){
            form.password.classList.add("invalid")
            completarCampo="Falta completar campos"
        } else{
            form.password.classList.remove("invalid")
        }
        /*console.log(form.confirmPassword.value)
        console.log(form.password.value)*/
        if(form.confirmPassword.value!=form.password.value){
            form.confirmPassword.classList.add("invalid")
            /*const err = document.querySelector(".err")*/
            err.innerHTML = "<li>Password must match</li>"
            err.classList.add("alert_warning")
        } else{
            form.confirmPassword.classList.remove("invalid")
            /*const err = document.querySelector(".err")*/
            err.innerHTML =""
            err.classList.remove("alert_warning")
        }
        if(form.confirmPassword.value=="" || form.confirmPassword.value!=form.password.value){
            form.confirmPassword.classList.add("invalid")
            if(form.confirmPassword.value==""){completarCampo="Falta completar campos"}
        } else{
            form.confirmPassword.classList.remove("invalid")
        }
        if(form.tel.value==""){
            form.tel.classList.add("invalid")
            completarCampo="Falta completar campos"
        } else{
            form.tel.classList.remove("invalid")
        }
        if(form.email.value==""){
            form.email.classList.add("invalid")
            completarCampo="Falta completar campos"
        } else{
            form.email.classList.remove("invalid")
        }
        if (completarCampo==""){form.submit()}
        else{
            err.innerHTML += "<li>"+completarCampo+"</li>"
            err.classList.add("alert_warning")}
    })
}
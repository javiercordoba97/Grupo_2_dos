window.onload = function(){


    const imputName= document.querySelector("#titulo")
    imputName.focus()
    const form = document.querySelector(".form")
    form.addEventListener("submit",(e)=>{
    
        e.preventDefault()
        var completarCampo=""
        const err = document.querySelector(".err")
        console.log(form.titulo.value)
        if(form.titulo.value==""){
            form.titulo.classList.add("invalid")
        } else{
            form.titulo.classList.remove("invalid")
        }
        if(form.precio.value==""){
            form.precio.classList.add("invalid")
            completarCampo="Falta completar campos"
        } else{
            form.precio.classList.remove("invalid")
        }
        if(form.rating.value==""){
            form.rating.classList.add("invalid")
            completarCampo="Falta completar campos"
        } else{
            form.rating.classList.remove("invalid")
        }
        if(form.descripcion.value==""){
            form.descripcion.classList.add("invalid")
            completarCampo="Falta completar campos"
        } else{
            form.descripcion.classList.remove("invalid")
        }
        if (completarCampo==""){form.submit()}
        else{
            err.innerHTML += "<li>"+completarCampo+"</li>"
            err.classList.add("alert_warning")}
    })
}
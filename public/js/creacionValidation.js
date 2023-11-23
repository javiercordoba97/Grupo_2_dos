window.onload = function(){


    const imputName= document.querySelector("#titulo")
    imputName.focus()
    const form = document.querySelector(".form")
    form.addEventListener("submit",(e)=>{
    
        e.preventDefault()
        console.log(form.titulo.value)
        if(form.titulo.value==""){
            form.titulo.classList.add("invalid")
                        
        } else{
            form.titulo.classList.remove("invalid")
        }
        if(form.precio.value==""){
            form.precio.classList.add("invalid")
        } else{
            form.precio.classList.remove("invalid")
        }
        form.submit()
    })
}
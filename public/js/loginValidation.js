window.onload = function(){


    const imputName= document.querySelector("#email")
    imputName.focus()
    const form = document.querySelector(".form")
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        console.log(form.email.value)
        if(form.email.value==""){
            form.email.classList.add("invalid")
        } else{
            form.email.classList.remove("invalid")
        }
        if(form.password.value==""){
            form.password.classList.add("invalid")
        } else{
            form.password.classList.remove("invalid")
        }
    })
}
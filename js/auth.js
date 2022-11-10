// CHECK VALID FORM
function checkValid(){
    let submitBtn = document.querySelector(".auth__submit")
        submitBtn.addEventListener("click", (e)=> {
            e.preventDefault()
            let activeTab = document.querySelector(".tab-wrapper_active"),
                fields = activeTab.querySelectorAll(".auth__field")
            for(let i = 0; i < fields.length; i++){
                if(fields[i].value == ""){
                    let error = document.createElement("span")
                    error.classList.add("auth__error")
                    error.innerText = "Заполните все поля"
                    activeTab.appendChild(error)
                    break
                }
            }
        })
    
}

// START FUNCTION
checkValid()
// SELECT SPECIALS FOR DOCTOR`S CABINET PAGE
function selectSpecial(trigger){
    let specialBtns = document.querySelectorAll(trigger)
    specialBtns.forEach(specialBtn => {
        specialBtn.addEventListener('click', (e)=> {
            specialBtn.classList.toggle(specialConfing.specialBtnActiveClass)
        })
    })
}

// START FUNCTIONS
selectSpecial(specialConfing.specialItemClass)
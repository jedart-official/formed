// SEARCH IN DOCTORS PAGE
function searchDoctors(trigger, items){
    let searchInput = document.querySelector(trigger)
    let doctorItems = document.querySelectorAll(items)
    searchInput.addEventListener("change", ()=> {
        doctorItems.forEach(doctorItem => {
            let doctorFIO =  doctorItem.querySelector(searchConfig.searchDoctorCardItemClass)
            let searchTo = searchInput.value.toLowerCase()
            let searchFrom = doctorFIO.innerText.toLowerCase()
            searchFrom.includes(searchTo) != true ? doctorItem.style.display = "none" : doctorItem.style.display = "flex"
        })
    })
}

// START FUNCTIONS
searchDoctors(searchConfig.searchLineItemClass, searchConfig.serachShowDoctorCardItemClass)
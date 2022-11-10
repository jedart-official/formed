// FILTERS ON ALL DOCTORS PAGE


// Show results by CITY
function showDoctorByCity(doctorItems, filterData){
    doctorItems.forEach(doctorItem => {
        let doctorCity = doctorItem.querySelector(filtersConfig.filterAddressItemClass)
        filterData == doctorCity.getAttribute(filtersConfig.filterDataCityAtr) ? doctorItem.style.display = "flex" : doctorItem.style.display = "none";
    })
}
// Show results by SPECIAL
function showDoctorBySpecial(doctorItems,filterData){
    doctorItems.forEach(doctorItem => {
        let doctorSpecials = doctorItem.querySelectorAll(filtersConfig.filterSpecialItemClass)
        for(let i = 0; i < doctorSpecials.length; i++){
            if(filterData == doctorSpecials[i].getAttribute(filtersConfig.filterDataSpecialAtr)){
                doctorItem.style.display = "flex";
                break
            }
            else {
                doctorItem.style.display = "none";
            }
        }
    })
}
// FILTERS
function filters(triggerSelect, filterSelector, filterContainerSelector, attr){
    let trigger  = document.querySelector(triggerSelect),
        filter = document.querySelector(filterSelector)
        filterContainer = document.querySelector(filterContainerSelector)
        filterList = document.querySelectorAll(filtersConfig.filterListItemClass)
        filter.classList.add("off")
        trigger.addEventListener("click", ()=> {
            filtersShowHide(filter)
        })
        filterBy(filter.children[0].children, attr, filter)
}
// SHOW & HIDE FILTERS
function filtersShowHide(filter){
    if(filter.classList.contains("off")){
        filter.style.height = `${filter.scrollHeight + 10}px`
        filter.classList.add("filter_show")
        filter.style.width = `${filterContainer.offsetWidth}px`
        filter.classList.remove("off")
    }
    else {
        filter.style.height = 0;
        filter.classList.remove("filter_show")
        filter.classList.add("off")
    }
}
// SORT BEFORE
function filterBy(trigger, attr, filter){
    let doctorCards = document.querySelectorAll(filtersConfig.filterDoctorsCardItemClass)
    for (let filterItem of trigger){
        filterItem.addEventListener("click", ()=> {
        clearFilterItems(trigger)
        filterItem.classList.add(filtersConfig.filterItemActiveClass)
        filterData = filterItem.getAttribute(`data-${attr}`); 
        filtersShowHide(filter)
            switch (attr){
                case "special": 
                    showDoctorBySpecial(doctorCards, filterData)
                    break
                case "city": 
                    showDoctorByCity(doctorCards, filterData)
                    break
                default:{
                    break
                }
            }
        })
    }
}
// CLEAR FILTER ITEMS
function clearFilterItems(trigger){
    for (let filterItem of trigger){
        filterItem.classList.remove(filtersConfig.filterItemActiveClass)
    }
}




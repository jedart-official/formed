// TABS ON DOCTOR`s PAGE
function tabsClick(triggerSelector, itemsSelector, listSelector, classSelector){
    let list = document.querySelector(listSelector),
        triggers = document.getElementsByClassName(triggerSelector)
        list.addEventListener("click", function (event){
            let trigger = Array.from(triggers).indexOf(event.target);
            if (trigger > -1){
                let display = document.querySelectorAll(itemsSelector)
                clearTabs(triggerSelector, display, classSelector)
                triggers[trigger].classList.add(classSelector)
                display[trigger].classList.add(tabsConfig.tabsWrapperActiveClass)
               
            }
        })
}

// CLEAR TABS
function clearTabs(triggerSelector, display, classSelector){
    let triggers = document.querySelectorAll(`.${triggerSelector}`)
    display.forEach(item => {
        item.classList.remove(tabsConfig.tabsWrapperActiveClass)
    });
    triggers.forEach(trigger => {
        trigger.classList.remove(classSelector)
    })
    
}

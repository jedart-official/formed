const config = {
    special : {
        // Active Classes
        specialBtnActiveClass : "doctor__special-item_active",
        // Items
        specialItemClass : ".doctor__special-item"
    },
    tabs : {
        // Active Classes
        tabsShowActiveClass: "tab_active",
        tabsWrapperActiveClass: "tab-wrapper_active",
        // Item`s Attributes
        tabsDataTabAtr : "data-tab",
        tabsDataDisplayAtr: "data-display",
    },
    search : {
        // Items
        searchLineItemClass : ".search__doctors",
        serachShowDoctorCardItemClass: ".doctors__card-white",
        searchDoctorCardItemClass: ".doctors__card-fio",
    },
    filters : {
        // Active Classes
        filterShowActiveClass: "filter_show",
        filterItemActiveClass: "filter__item_active",
        // Items
        filterListItemClass : ".filters__list",
        filterTriggerItemClass : ".filter__arrow",
        filterItemClass : ".filter__item",
        filterSpecialItemClass: ".special__item",
        filterAddressItemClass: ".doctors__card-address",
        filterDoctorsCardItemClass: ".doctors__card-white",
        // Item`s Attributes
        filterDataCityAtr: "data-city",
        filterDataSpecialAtr: "data-special",
    },
    auth : {
        // Active Classes
        authSelectItemActiveClass: "select_active",
        // Items
        authSelectItemClass: ".auth__select-item",
    }
}


// Gloabal Vars
const specialConfing = config.special,
    tabsConfig = config.tabs,
    searchConfig = config.search,
    filtersConfig = config.filters,
    authConfig = config.auth
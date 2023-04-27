// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import collapse from "bootstrap/js/src/collapse";
console.log("js working") ;


let backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', () => {
    topFunction();
});
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


const cityDropButton = document.getElementById("select-city-button");
const dropDownMenuCity = document.getElementById("select-city-dropdown");


const toggleDropDown = function (){
    dropDownMenuCity.classList.toggle("show");
}

cityDropButton.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropDown();
});


const linkDropDownTrigger = document.getElementById("market-links-dropdown-trigger");

linkDropDownTrigger.addEventListener("click", (e) =>{
    linkDropDownTrigger.classList.toggle("collapsed");
    e.stopPropagation();
    toggleDropDownMarketLinks();
})

const searchTrigger = document.getElementById("search-trigger");

searchTrigger.addEventListener("click", (e) =>{
    searchTrigger.classList.toggle("market-search-collapsed");
})


const dropDownMenuMarketLinks = document.getElementById("market-links-dropdown-menu");


const toggleDropDownMarketLinks = function (){
    dropDownMenuMarketLinks.classList.toggle("showMarketLinksDropdown");
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        for (let j = 0; j < coll.length; j++) {
            if (coll[j] !== this && coll[j].classList.contains("active")) {
                coll[j].classList.remove("active");
                coll[j].nextElementSibling.classList.remove("contentActive");
            }

        }

        this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.classList.toggle("contentActive")


    });
}

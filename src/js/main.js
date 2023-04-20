// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
console.log("js working") ;


let backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', () => {
    topFunction();
});
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

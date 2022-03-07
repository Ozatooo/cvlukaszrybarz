const isMobile = window.matchMedia("only screen and (max-width: 1200px)").matches;
const x_menu = document.getElementById("x_menu");
const mobile_menu = document.getElementsByClassName("mobile_menu");
 
if (isMobile) {
    document.getElementsByClassName("menu")[0].style.display = 'none';
} else {
    document.getElementsByClassName("x_menu")[0].style.display = 'none';
}

x_menu.addEventListener("click", function (e) {

    mobile_menu[0].style.display = 'flex';

});

document.addEventListener('click', function(e) {
    var isClickInsideElement = x_menu.contains(event.target);
    if (!isClickInsideElement) {
        mobile_menu[0].style.display = 'none';
    }
});
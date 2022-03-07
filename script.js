const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
const x_menu = document.getElementById("x_menu");
const menu_moblie = document.getElementsByClassName("moblie_menu");
 
//var ignoreClickOnMeElement = document.getElementById('someElementID');

if (isMobile) {
    document.getElementsByClassName("menu")[0].style.display = 'none';
} else {
    document.getElementsByClassName("x_menu")[0].style.display = 'none';
}

x_menu.addEventListener("click", function (e) {

     menu_moblie[0].style.display = 'inline';
})


document.addEventListener('click', function(e) {
    var isClickInsideElement = x_menu.contains(event.target);
    if (!isClickInsideElement) {
        menu_moblie[0].style.display = 'none';
    }
});
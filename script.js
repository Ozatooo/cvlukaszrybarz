const hamburger = document.getElementById("hamburger");
const mobile_menu = document.getElementsByClassName("mobile_menu");

hamburger.addEventListener("click", function (e) {

    mobile_menu[0].style.right = '0%';
    mobile_menu[0].style.animation="shift 0.7s 1";

});

document.addEventListener('click', function(e) {
    const isClickInsideElement = hamburger.contains(event.target);
    if (!isClickInsideElement && mobile_menu[0].style.right == '0%') {

        mobile_menu[0].style.animation="shift_b 0.5s 1";
        mobile_menu[0].style.right = '-110%';
    }
});

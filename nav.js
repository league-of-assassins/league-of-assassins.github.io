
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("topnav").style.top = "0";
    } else {
        document.getElementById("topnav").style.top = "0";
    }
}
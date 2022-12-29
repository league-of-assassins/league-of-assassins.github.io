	//								TOPNAV SCROLL ON CLICK

function scrollWin1() {window.scrollTo({top: 0, behavior: "smooth"});}
function scrollWin2() {window.scrollTo({top: 820, behavior: "smooth"});}
function scrollWin3() {window.scrollTo({top: 1190, behavior: "smooth"});}
function scrollWin4() {window.scrollTo({top: 1750, behavior: "smooth"});}


	//								OPEN/CLOSE IMAGE ON CLICK

var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('galleryimages');
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {modal.style.display = "none";}

	//								TOPNAV SCROLL ON CLICK START

function scrollWin1() {window.scrollTo({top: 0, behavior: "smooth"});}
function scrollWin2() {window.scrollTo({top: 820, behavior: "smooth"});}
function scrollWin3() {window.scrollTo({top: 1190, behavior: "smooth"});}
function scrollWin4() {window.scrollTo({top: 1690, behavior: "smooth"});}

	//								TOPNAV SCROLL ON CLICK END

	//								OPEN/CLOSE IMAGE ON CLICK START

var modal = document.getElementById('myModal'); var img = document.getElementById("img1");
var modalImg = document.getElementById("modal-img"); var captionText = document.getElementById("caption");
img.onclick = function(){modal.style.display = "block"; modalImg.src = this.src; captionText.innerHTML = this.alt;}
var span = document.getElementsByClassName("close")[0]; span.onclick = function() { modal.style.display = "none";}

var img = document.getElementById("img2");
img.onclick = function(){modal.style.display = "block"; modalImg.src = this.src; captionText.innerHTML = this.alt;}
span.onclick = function() { modal.style.display = "none";}

var img = document.getElementById("img3");
img.onclick = function(){modal.style.display = "block"; modalImg.src = this.src; captionText.innerHTML = this.alt;}
span.onclick = function() { modal.style.display = "none";}

var img = document.getElementById("img4");
img.onclick = function(){modal.style.display = "block"; modalImg.src = this.src; captionText.innerHTML = this.alt;}
span.onclick = function() { modal.style.display = "none";}

var img = document.getElementById("img5");
img.onclick = function(){modal.style.display = "block"; modalImg.src = this.src; captionText.innerHTML = this.alt;}
span.onclick = function() { modal.style.display = "none";}

var img = document.getElementById("img6");
img.onclick = function(){modal.style.display = "block"; modalImg.src = this.src; captionText.innerHTML = this.alt;}
span.onclick = function() { modal.style.display = "none";}

var img = document.getElementById("img7");
img.onclick = function(){modal.style.display = "block"; modalImg.src = this.src; captionText.innerHTML = this.alt;}
span.onclick = function() { modal.style.display = "none";}

var img = document.getElementById("img8");
img.onclick = function(){modal.style.display = "block"; modalImg.src = this.src; captionText.innerHTML = this.alt;}
span.onclick = function() { modal.style.display = "none";}

	//									OPEN/CLOSE IMAGE ON CLICK END
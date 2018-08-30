$(document).ready(function(){
     var $preview = $("<p id='preview'><img src='' alt='Image preview' /><span></span></p>");
     $("body").append($preview);
     $preview.hide();
});

$("body").click(function(e){
   var isImgClicked = $(e.target).is("img")

   // if there is click event outside IMG then close the #preview box
   if(!isImgClicked)
      $("#preview").fadeOut();
   });

$("a.preview").click(function(e){
   // prevent default click behaviour
   e.preventDefault();

   // get variables
   var title = $(this).attr("title");
   var href = $(this).attr('href')
   var c = (title != "") ? "<br/>" + title : "";
   var status = $("#preview").data("visible");

   // set its location and do show
   $("#preview").css("top",(e.pageY) + "px").css("left",(e.pageX) + "px")
   $("#preview").fadeIn();

   // set #preview content
   $("#preview span").text(title);
   $("#preview img").attr('src', href);

});
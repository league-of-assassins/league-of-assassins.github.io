if (!sessionStorage.isVisited) {
  sessionStorage.isVisited = 'true'
  $("#status").delay(1500).fadeOut("slow")
  $("#preloader").delay(2000).fadeOut("slow")
} else {
  $("#status").hide()
  $("#preloader").hide()
}
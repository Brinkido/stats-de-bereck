$(document).ready(function(){
$(".chiffre").hide()
$(".obamo").hide()
$(".stat").click(showStat)


});


function showStat(){
  $(".chiffre",this).show()
  $(".obamo",this).show()
  $(".button",this).hide()
}

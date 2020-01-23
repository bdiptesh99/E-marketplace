$(document).ready(function(){
  $("#banner-name").addClass("animated zoomIn");
  $("#about_img").hover(function(){
    $(this).addClass("animated pulse");
    }, function(){
    $(this).removeClass("animated pulse");
  });

  $(function(){
    $("#navbar a").click(function(e){
      e.preventDefault();
      $('html,body').scrollTo(this.hash,this.hash);
    });
  });
});

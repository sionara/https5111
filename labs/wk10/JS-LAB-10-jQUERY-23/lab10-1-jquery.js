//LAB 10 - 1 FAQ PAGE

$(window).on("load", function(){

  $("p").hide();
  $(".panelContainer").on("click", function(){
    $("p").slideUp(3000);
    $(this).find("p").slideToggle(3000);
  });
  $("p").hover(function(){
    $(this).addClass('textHovered')}, function(){
      $(this).removeClass('textHovered');
    }
  );
});
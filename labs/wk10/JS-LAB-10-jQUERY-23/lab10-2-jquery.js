//LAB 10 - 2 INVENTORY PAGE

$(window).on("load", function(){
  $(".desc").addClass("displayNone");
  $("tr").hover(function () {
      // over
      $(this).addClass("selected");
    }, function () {
      // out
      $(this).removeClass("selected");
    }
  );
  $("tr").on("click", function () { 
    $(".desc").addClass("displayNone");
    $(this).find(".desc").removeClass("displayNone");
  });
})

$(function(){
  var start = false;

  function anterior(){
    var slide = $(".slide").length;

    if (slide > 1) {
      var currentSlide = $(".current-slide").attr("id").match(/slide(.*)/)[1];

      $(".slide").removeClass("current-slide-right current-slide-left go-to-left go-to-right");
      $(".current-slide").addClass("go-to-right");
      $(".slide").removeClass("current-slide");

      if ($("#slide"+(parseInt(currentSlide)-1)).length > 0) {
        $("#slide"+(parseInt(currentSlide)-1)).addClass("current-slide current-slide-right");
      }
      else {
        $(".slide").last().addClass("current-slide current-slide-right");
      }
    };

    setTimeout(function(){
      start = false;
    }, 500);
  }

  function proximo(){
    var slide = $(".slide").length;

    if (slide > 1) {
      var currentSlide = $(".current-slide").attr("id").match(/slide(.*)/)[1];

      $(".slide").removeClass("current-slide-right current-slide-left go-to-left go-to-right");
      $(".current-slide").addClass("go-to-left");
      $(".slide").removeClass("current-slide");

      if ($("#slide"+(parseInt(currentSlide)+1)).length > 0) {
        $("#slide"+(parseInt(currentSlide)+1)).addClass("current-slide current-slide-left");
      }
      else {
        $(".slide").first().addClass("current-slide current-slide-left");
      }
    }

    setTimeout(function(){
      start = false;
    }, 500);
  }

  if ($(".current-slide").length < 1) {
    $(".slide:first").addClass("current-slide");
  };

  $(".previous").on("click", function(e){
    e.preventDefault();
    anterior();
  });

  $(".next").on("click", function(e){
    e.preventDefault();
    proximo();
  });

  var time = $(".slider").attr("interval");
  setInterval(proximo, time*1000);

  $(document).on("keydown", function(e){
    if (e.keyCode === 37) {
      if (!start) {
        start = true;
        anterior();
      };
    }
    else if (e.keyCode === 39) {
      if (!start) {
        start = true;
        proximo();
      }
    };
  });
})

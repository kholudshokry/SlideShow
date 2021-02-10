
$(document).ready(function() {


  // Lightbox
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
  var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
  var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');
  
  // Add overlay
  $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
  $("#gallery").append($overlay);
  
 
  $overlay.hide();
  

  $(".img-overlay").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).prev().attr("href");
    $image.attr("src", imageLocation);
    $overlay.fadeIn("slow");
  });
  

  $overlay.click(function() {
    // Fade out the overlay
    $(this).fadeOut("slow");
  });
  
  $nextButton.click(function(event) {
    $("#overlay img").hide();
    var $currentImgSrc = $("#overlay img").attr("src");

    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").next().find("img"));
    var $images = $("#image-gallery img");
    if ($nextImg.length > 0) { 
      $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
      $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    event.stopPropagation();
  });
  
  // When previous button is clicked
  $prevButton.click(function(event) {
    $("#overlay img").hide();
    var $currentImgSrc = $("#overlay img").attr("src");
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    var $nextImg = $($currentImg.closest(".image").prev().find("img"));
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    event.stopPropagation();
  });
  
  // Fade out the overlay
  $exitButton.click(function() {
    $("#overlay").fadeOut("slow");
  });


});







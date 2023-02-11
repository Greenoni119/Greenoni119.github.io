
$(document).ready(function(){
    $("#animate-button").click(function(){
      $("#heading").animate({
        fontSize: "25px",
        color: "red"  // this is the code that is suppose to change the color but it wont, plese show me how to in the comments below, thank you
      }, 1000, function(){
        $("#heading").animate({
          fontSize: "50px",
          color: "gold"
        }, 1000);
      });
    });
  });

  $(function () {
    $("#animate-button").click(function() {
      var $myFace = $("#myFace");
      if ($myFace.css("border-style") === "none") {
        $myFace.css("border", "solid 10px gold");  
      } else {
        $myFace.css("border", "none");
      }
    });
  });
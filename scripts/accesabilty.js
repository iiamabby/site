/* Enlarge text in the cloud pathways section */
  $(document).ready(function () {
    $("#zoomTextBtn").click(function () {
      var currentFontSize = parseInt($("#information").css("font-size"));
      var newFontSize = currentFontSize + 2;
      $("#information").css("font-size", newFontSize + "px");

      // Adjust font size for all child elements within the information div
      $("#information").find("*").css("font-size", newFontSize + "px");
    });
  });


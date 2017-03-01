$("#contactAlt").hide();

$(document).on("click", "#adduser", function() {

    var FirstName = $("#FirstName").val();
    var LastName = $("#LastName").val();
    $(".contactCard").html("<p>"+FirstName+" "+LastName+"</p><p id =description>Click for Description</p>");
    $("#description").click(function functionName() {
        var descript = $("#textbox").val();
        $("#contactCard").hide();
        $("#contactAlt").show();
        $("#contactAlt").html("<p>"+descript+"</p>");
    });
});
// console.log("hello");
// $("#contactCard").click(function () {
//     console.log("testing");
//      $(".contactCard").html("<p>Test</p>");
// });

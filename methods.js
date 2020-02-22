//Similar to .textcontent in JS
$("h1").text();

//Works like InnerHTML in JS, Gets first HTML Element
$("ul").html();

//Change the attributes, can also add attributes
$("img").attr("src");

//gets value of an input
$("input").val();

//add class to elements
$("h1").addClass("correct");

//alert when button is clicked
$("#submit").click(function() {
    var text = $(this).text();
    alert("You clicked the " + text + " button");
    $(this).css("background", "pink")
});

//Alert when keypress
$("input").keypress(function(event) {
    if (event.which === 13) {
        alert("You pressed the Enter key");
    }
});

//Same as EventListener but supports all types of events
$("h1").on("click", function() {
    $(this).css("color", "red");
});

//Bold font when hover over button
$("button").on("mouseenter", function() {
    $(this).css("font-weight", "bold");
});

//Normal font when mouse hovers off button
$("button").on("mouseleave", function() {
    $(this).css("font-weight", "normal");
});

//fade out image, show completion text, then deletes image
$("img").on("mouseenter", function() {
    $(this).fadeOut(1000, function() {
        $("div").text("Fade Out Complete");
        $(this).remove();
    });
});

$("img").slideDown();

/*$("img").on("mouseleave", function() {
    $(this).fadeIn(1000, function() {
        $("div").text("Fade In Complete");
    });
}); */
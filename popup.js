$(function() {
    $("#name").keyup(function() {
        $("#greet").text('Hello ' + $("#name").val()); // Correct the selector to use #
    });
});
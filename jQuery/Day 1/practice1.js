$(document).ready(() => {
    $("p").css("background-color", "blue")
    $("#toggle").click(() => {
        $("p").toggle();
    });
});
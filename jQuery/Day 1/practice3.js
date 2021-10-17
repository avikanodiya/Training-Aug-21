// $(document).ready(() => {
//     $("#php").click(() => {
//         $("#selected").text("You have selected : " + $("#php").val());
//     })

//     $("#aspnet").click(() => {
//         $("#selected").text("You have selected : " + $("#aspnet").val());
//     })

//     $("#asp").click(() => {
//         $("#selected").text("You have selected : " + $("#asp").val());
//     })

//     $("#jsp").click(() => {
//         $("#selected").text("You have selected : " + $("#jsp").val());
//     })

//     $("#perl").click(() => {
//         $("#selected").text("You have selected : " + $("#perl").val());
//     })

//     $("#coldfusion").click(() => {
//         $("#selected").text("You have selected : " + $("#coldfusion").val());
//     })

//     $("#other").click(() => {
//         $("#selected").text("You have selected : " + $("#other").val());
//     })

// })
$(document).ready(() => {
    $("input").click(() => {
        $("#tech").text("You have selected : " + $("input:checked").val());
    })
})


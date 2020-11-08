$(document).ready(function () {
    $(".submit").click(function (e) {
        e.preventDefault();
        const form = $("form").serializeArray();
        console.log(form);
    });
});

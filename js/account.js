$(document).ready(function () {
    var data = JSON.parse(window.localStorage.getItem("accounts"));
    console.log(data);
    data.forEach(function (item) {
        var $ul = $("ul");
        console.log(item.name);
        $ul.append("<li><h3>" + item.name + " - " + item.email + "</h3></li>");
    });
});

$(document).ready(function () {
    var data = JSON.parse(window.localStorage.getItem("bookings"));
    console.log(data);
    data.forEach(function (item) {
        var $ul = $("ul");
        console.log(item.name);
        $ul.append(
            "<li><h3>" +
                item.name +
                " booked a " +
                item.package +
                " package for a group of " +
                item.number +
                " people</h3></li>"
        );
    });
});

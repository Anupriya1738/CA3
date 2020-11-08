$(document).ready(function () {
    $(".selectNumberOfPeople").mouseup(function (e) {
        e.preventDefault();
        const form = $("form").serializeArray();
        var number = form[1].value;
        for (var i = 1; i <= number; i++) {
            var $form = $(".form-add");
            console.log(i);
            // $form.append(
            //     `<div class='form-group col-4'> <label for='name${i}'>Name:</label> <input type='text' class='form-control' id='name${i}' name='name${i}' placeholder='Enter Name' required> </div><div class='form-group col-4'> <label for='name${i}'>Name:</label> <input type='text' class='form-control' id='name${i}' name='name${i}' placeholder='Enter Name' required> </div>`
            // );
            $form.append(
                `<div class="row">
                <div class="col">
                <label for='name${i}'>Name:</label>
                  <input type="text" name="name${i}" class="form-control" placeholder="Name">
                </div>
                <div class="col">
                <label for='age${i}'>Age:</label>
                  <input type="text" name="'age${i}'" class="form-control" placeholder="Age">
                </div>
              </div>`
            );
        }
    });

    $(".submit").click(function (e) {
        e.preventDefault();
        const form = $("form").serializeArray();
        var data = JSON.parse(window.localStorage.getItem("bookings"));
        if (data === null) {
            data = [];
        }
        let tempData = {};
        form.map(function (item) {
            if (item.name === "name") {
                tempData["name"] = item.value;
            }
            if (item.name === "numberOfPeople") {
                tempData["number"] = item.value;
            }
            if (item.name === "package") {
                tempData["package"] = item.value;
            }
        });
        data.push(tempData);

        localStorage.setItem("bookings", JSON.stringify(data));
        alert("Booking Sucessful. Visit all booking page to view all accounts");
        window.location.href = "allBooking.html";
    });
});

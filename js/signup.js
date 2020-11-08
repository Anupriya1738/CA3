$(document).ready(function () {
    $(".submit").click(function (e) {
        e.preventDefault();
        let email = $("#email").val();
        let pass = $("#pass").val();
        console.log(email.length);
        if( email.length === 0) {
            console.log("returned")
            return;
        }
        if(pass.length === 0) {
            return;
        }
        var data = JSON.parse(window.localStorage.getItem("accounts"));
        if (data === null) {
            data = [];
        }

        const form = $("form").serializeArray();
        const data2 = {};
        form.map(function (item) {
            data2[item.name] = item.value;
        }); 
        data.push(data2);
        localStorage.setItem("accounts", JSON.stringify(data));
        alert("Account created. Visit account page to view all accounts");
        window.location.href = "accounts.html";
    });
});

$("#login-btn").click(function () {
    $("#log-in").show();
    $("#log-in .wrapper").css('display', 'block');
})

$("#signup-btn").click(function () {
    $("#sign-up").show();
    $("#sign-up .wrapper").css('display', 'block');
})

var login = $("#log-in .wrapper");
var signup = $("#sign-up .wrapper");

$(document).mouseup(function (e) {

    console.log(e)

    if (!login.is(e.target) && login.has(e.target).length === 0 && !signup.is(e.target) && signup.has(e.target).length === 0) {

        login.hide();
        signup.hide();

        $("#log-in").hide();
        $("#sign-up").hide();

    }
});

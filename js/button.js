$(".button").on('click', function () {

    $(this).addClass("clicked");

    setTimeout(function () {
        $(".button").addClass("complete")
    }, 5000);

    setTimeout(function () {
        $(".button").removeClass("clicked")
    }, 8000);

    setTimeout(function () {
        $(".button").removeClass("complete")
    }, 8000);
});
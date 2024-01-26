document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");

    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY === 0) {
                header.classList.remove("full-opacity");
            } else {
                header.classList.add("full-opacity");
            }
        });
    }
});

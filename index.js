$(document).ready(function () {
    let progressBarEl = $("#progress-bar");

    $(window).on("scroll", () => {
        let height = $(document).height() - $(window).innerHeight();
        let scrollPosition = $(document).scrollTop();
        let width = (scrollPosition / height) * 100;
        width = Math.min(width, 100);
        progressBarEl.css("width", width + "%");

    });
});

var state = true;
$(".change-theme").on("click", () => {

    const sole = "images/sun-1.png";
    const luna = "images/moon.png";
    const frecciaBianca = "images/right-arrow-white.png"
    const frecciaNera = "images/right-arrow.png"

    if (state === true) {

        state = false;
        $(".change-theme img").attr("src", sole)

        $("body").addClass("dark")

        $(".top-header").addClass("dark-header")

        $(".links").addClass("dark-links")
        
        $(".arrow img").attr("src",frecciaBianca)
        // const root = document.documentElement;

        // Cambia il valore della variabile --colore-di-sfondo
        // $(":root").css('--action-color', '#61677A');
    }
    else if (state === false) {

        state = true;

        $(".change-theme img").attr("src", luna)

        $("body").removeClass("dark")

        $(".top-header").removeClass("dark-header")

        $(".links").removeClass("dark-links")

        $(".arrow img").attr("src",frecciaNera)
        
    }
})
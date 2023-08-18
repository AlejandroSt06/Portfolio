$(document).ready(function () {
    let progressBarEl = $("#progress-bar");

    $(window).on("scroll", () => {
        let height = $(document).height() - $(window).innerHeight();
        let scrollPosition = $(document).scrollTop();
        let width = (scrollPosition / height) * 100;
        width = Math.min(width, 100);
        progressBarEl.css("width", width + "%");

        //Freccia go-up 
        if(width != 0) {
            $(".go-up").removeClass("d-none")
        }
        else{
            $(".go-up").addClass("d-none")
        }
    });
});

var state = true;
$(".change-theme").on("click", () => {

    const sole = "images/sun-1.png";
    const luna = "images/moon.png";
    const frecciaBianca = "SVGs/arrow-up-svgrepo-com-white.svg"
    const frecciaNera = "SVGs/arrow-up-svgrepo-com.svg"

    const hamburgherButton = "images/hamburger (1).png"
    if (state === true) {

        state = false;
        $(".change-theme img").attr("src", sole)

        $("body").addClass("dark")

        $(".top-header").addClass("dark-header")

        $(".links").addClass("dark-links")

        $(".skill-container").css("backgroundColor","#61677A")
        $(".skill-container .skill-text").addClass("white-text")
        
        $(".arrow img").attr("src",frecciaBianca)

        $(".mobile-nav-bar").css("backgroundColor","#272829")

        $(".nav-button").css("backgroundColor","#272829")
        $(".nav-button img").attr("src",hamburgherButton)
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

        $(".skill-container").css("backgroundColor","#e7e7e7")
        $(".skill-container .skill-text").removeClass("white-text")

        $(".mobile-nav-bar").css("backgroundColor","white")
        $(".nav-button").css("backgroundColor","white")
        $(".nav-button img").attr("src","images/hamburgher-icon.png")
        
        
    }
})

var statoMenu = false;
function navBlock(){
$(".nav-button").on("click",()=>{
if(statoMenu === false){

    

    $(".header-nav ul:nth-child(2)").css("display","block")
    $(".header-nav").addClass("mobile-nav-bar")
    $(".change-theme").css("display", "block")
    statoMenu = true;
}
else if(statoMenu === true){
    $(".header-nav ul:nth-child(2)").css("display","none")
    $(".header-nav").removeClass("mobile-nav-bar")
    $(".change-theme").css("display", "none")
    statoMenu = false;}
})


}
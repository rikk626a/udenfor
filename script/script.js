//background slides

let slideIndex = 0;

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// video slider

function currentDiv(n) {
    showDivs(slideIndex = n);
}


function showDivs(n) {
    let i;
    let slides = document.getElementsByClassName("videoSlides");
    let slidesBtns = document.getElementsByClassName("video-btn");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (i = 0; i < slidesBtns.length; i++) {
        slidesBtns[i].classList.remove("btnActive");
    }
    slides[slideIndex - 1].classList.add("active");
    slidesBtns[slideIndex - 1].classList.add("btnActive");
}

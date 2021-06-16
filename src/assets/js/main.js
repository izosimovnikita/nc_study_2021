const cardsBox = document.querySelector(".cards__box");
const cardsCovid = cardsBox.querySelector(".cards-box__covid");
const close = document.querySelector(".cards__cross");

function mouseover() {
    cardsCovid.classList.add("_fixed");
    close.classList.add("_shown");
}

function mouseout() {
    cardsCovid.classList.remove("_fixed");
    close.classList.remove("_shown");
}

cardsBox.addEventListener("mouseover", mouseover)
cardsBox.addEventListener("mouseout", mouseout)

cardsCovid.addEventListener("click", function() {
    cardsBox.removeEventListener("mouseover", mouseover);
    cardsBox.removeEventListener("mouseout", mouseout);

    cardsCovid.classList.add("_fixed");
    close.classList.add("_shown");
})

close.addEventListener("click", function() {
    cardsCovid.classList.remove("_fixed");
    close.classList.remove("_shown");

    cardsBox.addEventListener("mouseover", mouseover);
    cardsBox.addEventListener("mouseout", mouseout);
})
// Notification
const cardsBox = document.querySelector(".ya-cards__box");
const cardsCovid = cardsBox.querySelector(".ya-cards-box__covid");
const close = document.querySelector(".ya-cards__cross");

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


// Input
const input = document.querySelector(".input-container__input");
const actions = document.querySelector("input ~ div");

input.addEventListener("focus", function () {
    actions.style.opacity = "0";
})

input.addEventListener("blur", function () {
    if (input.value.length > 0) {
        actions.style.opacity = "0";
    } else actions.style.opacity = "1";
})


// CSS-Tricks
// Burger
let cross = document.getElementById('tr-burger-cross');
let menu = document.getElementById('tr-burger-list');

cross.addEventListener('click', function () {
    menu.classList.add('active');
    console.log('click')
})


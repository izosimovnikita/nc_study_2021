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















// Infinity scrolling
const url = 'https://zen.yandex.ru/api/v3/launcher/export?clid=300&country_code=ru';
let articles;
let articlesNumber = 0;
const loading = document.getElementById('loading');
loader(true);

(async function mainFunc() {
    articles = await getJson(url);

    showArticles();

    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (clientHeight + scrollTop >= scrollHeight - 5) {
            showArticles();
        }
    })
})()

function loader(on) {
    if (on) {
        loading.classList.add('show');
    } else {
        loading.classList.remove('show');
    }
}

async function showArticles(count = 10) {
    loader(true);
    let articlesCount = 0;

    do {
        if (articlesNumber === articles.length) {
            articlesNumber = 0;
            articles = await getJson(url);
        }

        if (articles[articlesNumber].type === 'card') {
            createArticle(articles[articlesNumber]);
            articlesCount++;
        }

        articlesNumber++;
    } while (articlesCount !== count);
}

function debounce (fn, ms) {
    let during = false;

    return function (...args) {
        if (during) return;

        fn.apply(this, args);

        during = true;

        setTimeout(() => during = false, ms);
    };
}

showArticles = debounce(showArticles,  300);

async function getJson(url) {
    const response = await fetch('https://obscure-scrubland-30498.herokuapp.com/' + url);
    if (response.ok) {
        let json = await response.json();
        return json.items;
    } else throw new Error(`${response.status}: ${response.statusText}`);
}

const container = document.getElementById('dzen-container');
const $root = document.getElementById('dzen');
$root.append(container);

const createArticle = (item) => {
    const article = document.createElement('div');
    article.classList.add('ya-container__article', 'ya-article');

    article.append(createHeaderArticle(item));
    article.append(createContent(item));
    article.append(createFooter(item));

    loader(false);
    container.append(article);
}

const createHeaderArticle = (item) => {
    const header = document.createElement('div');
    header.classList.add('ya-article__header-article', 'ya-header-article');

    const icon = document.createElement('img');
    icon.classList.add('ya-header-article__icon');
    icon.setAttribute('src', item.source.logo);

    const domain = document.createElement('div');
    domain.classList.add('ya-header-article__domain');
    domain.textContent = item.domain;

    const subscribers = document.createElement('span');
    subscribers.textContent = item.promo_label.text;

    domain.append(subscribers);
    header.append(icon);
    header.append(domain);

    return header;
}

const createContent = (item) => {
    const content = document.createElement('a');
    content.classList.add('ya-article__content-article', 'ya-content-article');

    content.append(createImg(item));
    content.append(createTitle(item));
    content.append(createText(item));

    return content;
}

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('ya-article__footer-article', 'ya-footer-article');

    footer.append(createIcon('share'));
    footer.append(createIcon('like'));
    footer.append(createIcon('dislike'));

    return footer;
}

const createImg = (item) => {
    const image = document.createElement('img');
    image.setAttribute('src', item.image);
    image.classList.add('ya-content-article__image');

    return image;
}

const createTitle = (item) => {
    const title = document.createElement('h2');
    title.classList.add('ya-content-article__title');
    title.textContent = item.title;

    return title;
}

const createText = (item) => {
    const text = document.createElement('h2');
    text.classList.add('ya-content-article__text');
    text.textContent = item.text.slice(0, 250) + '...';

    return text;
}

const createIcon = (name) => {
    const item = document.createElement('a');
    item.setAttribute('href', '#');
    item.classList.add('ya-footer-article__actions', 'ya-article-actions');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('ya-article-actions__icon', 'action-icon');

    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', `#icon-${name}`);

    svg.append(use);
    item.append(svg);

    return item;
}



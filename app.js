const api_trending = 'https://api.themoviedb.org/3/trending/all/week?api_key=738defde66b62f4dedb8594728fb4076&page=1';
const api_topRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=738defde66b62f4dedb8594728fb4076&language=en-US&page=1';
const api_popular = 'https://api.themoviedb.org/3/movie/popular?api_key=738defde66b62f4dedb8594728fb4076&language=en-US&page=1';
const api_search = 'https://api.themoviedb.org/3/search/movie?api_key=738defde66b62f4dedb8594728fb4076&query='
const poster = 'https://image.tmdb.org/t/p/w500';

const containerTrending = document.getElementById('trending');
const containerTopRated = document.getElementById('top-rated');
const containerPopular = document.getElementById('popular');
const containerSearch = document.getElementById('search-results');

const homeBtn = document.getElementById('home');
const searchBtn = document.getElementById('search');
const searchBar = document.getElementById('search-bar');
const form = document.getElementById('form');
const titles = document.querySelectorAll('h1');

// Run Functions
getTrending(api_trending);
getTopRated(api_topRated);
getPopular(api_popular);

// Get Movies
async function getTrending(url) {
    const res = await fetch(url);
    const data = await res.json();

    displayTrending(data.results);
}

async function getTopRated(url) {
    const res = await fetch(url);
    const data = await res.json();

    displayTopRated(data.results);
}

async function getPopular(url) {
    const res = await fetch(url);
    const data = await res.json();

    displayPopular(data.results);
}

async function getSearchResults(url) {
    const res = await fetch(url);
    const data = await res.json();

    displaySearch(data.results);
}

// Display Movie Cards
function displayTrending(movies) {

    movies.forEach((movie) => {
        const { title, poster_path, overview } = movie;

        const movieCard = document.createElement('div');
        movieCard.classList.add('movie');
        movieCard.innerHTML = `
        <img src="${poster}${poster_path}" alt="${title}">
        <div class = "movie-info">
        <h3 class="title">${title}</h3>
        <p class="overview">${overview}</p>
        </div>
        `

        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card');
        infoCard.innerHTML = `
            <h3 class="title">${title}</h3>
            <p class="overview">${overview}</p>
            `

        movieCard.appendChild(infoCard);
        containerTrending.appendChild(movieCard);
    })


}

function displayTopRated(movies) {

    movies.forEach((movie) => {
        const { title, poster_path, overview } = movie;

        const movieCard = document.createElement('div');

        movieCard.classList.add('movie');
        movieCard.innerHTML = `
            <img src="${poster}${poster_path}" alt="${title}">
            <div class = "movie-info">
                <h3 class="title">${title}</h3>
                <p class="overview">${overview}</p>
            </div>
            `
        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card');
        infoCard.innerHTML = `
            <h3 class="title">${title}</h3>
            <p class="overview">${overview}</p>
            `

        movieCard.appendChild(infoCard);
        containerTopRated.appendChild(movieCard);
    })
}

function displayPopular(movies) {

    movies.forEach((movie) => {
        const { title, poster_path, overview } = movie;

        const movieCard = document.createElement('div');

        movieCard.classList.add('movie');
        movieCard.innerHTML = `
            <img src="${poster}${poster_path}" alt="${title}">
            <div class = "movie-info">
                <h3 class="title">${title}</h3>
                <p class="overview">${overview}</p>
            </div>
            `
        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card');
        infoCard.innerHTML = `
            <h3 class="title">${title}</h3>
            <p class="overview">${overview}</p>
            `

        movieCard.appendChild(infoCard);
        containerPopular.appendChild(movieCard);
    })
}

function displaySearch(movies) {

    containerSearch.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, overview } = movie;

        const movieCard = document.createElement('div');

        movieCard.classList.add('movie');
        movieCard.innerHTML = `
            <img src="${poster}${poster_path}" alt="${title}">
            <div class = "movie-info">
                <h3 class="title">${title}</h3>
                <p class="overview">${overview}</p>
            </div>
            `
        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card');
        infoCard.innerHTML = `
             <h3 class="title">${title}</h3>
            <p class="overview">${overview}</p>
            `

        movieCard.appendChild(infoCard);

        containerSearch.appendChild(movieCard);
        containerSearch.classList.add('search-view');
        containerTrending.style.display = 'none';
        containerTopRated.style.display = 'none';
        containerPopular.style.display = 'none';

        hideTitles();
    })
}

// Hide Section Titles
function hideTitles() {
    titles[0].style.display = 'none';
    titles[1].style.display = 'none';
    titles[2].style.display = 'none';
}



// Search
searchBtn.addEventListener('click', () => {
    searchBar.style.display = 'block';
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = api_search + searchBar.value;

    if (searchTerm && searchTerm !== '') {
        getSearchResults(searchTerm);
        searchBar.value = '';

    } else {
        window.location.reload();
    }
})

homeBtn.addEventListener('click', () => {
    window.location.reload();
})
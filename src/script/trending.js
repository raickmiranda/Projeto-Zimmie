// Definição da API OMDB
const IMAGEPATH = `https://image.tmdb.org/t/p/w1280`;

// Definição de Elementos para inserção de informações
const emAlta = document.querySelector('.movies-container .trending-grid');

const input = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const searchGrid = document.querySelector('.search-grid');

const popup = document.querySelector('.popup-container');

// Manutenção de Popups
function clicaCard(cards) {
    cards.forEach(card => {
        card.addEventListener('click', () => exibePopup(card))
    })
}

async function obterId(id) {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3b2b06f233f5e223084b7c2fe71290df&language=pt-BR` || `https://api.themoviedb.org/3/tv/${id}?api_key=3b2b06f233f5e223084b7c2fe71290df&language=pt-BR`)
    const respData = await resp.json()
    return respData
}
async function obterTrailer(id) {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=3b2b06f233f5e223084b7c2fe71290df&language=pt-BR` || `https://api.themoviedb.org/3/tv/${id}/videos??api_key=3b2b06f233f5e223084b7c2fe71290df&language=pt-BR`)
    const respData = await resp.json()
    return respData.results[0].key
}

async function exibePopup(card) {
    popup.classList.add('show-popup')

    const contentId = card.getAttribute('data-id')
    const content = await obterId(contentId)
    const contentTrailer = await obterTrailer(contentId)

    popup.innerHTML = `
            <span class="sair">&#10006;</span>
            <div class="content">
                <div class="left">
                    <div class="poster-img">
                        <img src="${IMAGEPATH + content.poster_path}" alt="">
                    </div>
                    
                    <div class="popup-info-container">
                        <div class="infos">
                            <span>Idioma original:</span> <h5> ${content.original_language}</h5>
                        </div>
                        <div class="infos"> 
                            <span>Duração:</span> <h5>${content.runtime} minutes</h5>
                        </div>
                        <div class="infos">
                            <span>Lançamento:</span> <h5>${content.release_date}</h5>
                        </div>
                    </div>
                </div>

                <div class="right">
                    <h1>${content.title}</h1>
                    <div class="overview">
                        <h2>Sinopse</h2>
                        <h5>${content.overview}</h5>
                    </div>

                    <div class="trailer">
                        <h2>Trailer</h2>
                        <iframe width="40%" height="40%" src="https://www.youtube.com/embed/${contentTrailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div>
                        <text class="avaliar-btn onclick="return exibemedia()""><a href="../html/filme.html?${contentId}">Avaliar</text>
                    </div>

    `
    const sair = document.querySelector('.sair')
    sair.addEventListener('click', () => popup.classList.remove('show-popup'))
}

// Conteúdo em Alta
obterTrendingFilmes()
async function obterTrendingFilmes() {
    const resp = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3b2b06f233f5e223084b7c2fe71290df&language=pt-BR`)
    const respData = await resp.json()
    return respData.results
}

adicionaTrendingFilmes()
async function adicionaTrendingFilmes() {

    const data = await obterTrendingFilmes()
    console.log(data);

    emAlta.innerHTML = data.slice(0, 10).map(info => {
        return `
            <div class="card" data-id="${info.id}">
                <div class="img">
                    <img src="${IMAGEPATH + info.poster_path}">
                </div>
                <div class="info">
                    <h2>${info.title}</h2>
                </div>
            </div>
        `
    }).join('')

    const cards = document.querySelectorAll('.card')
    clicaCard(cards)
}

// Pesquisar Conteúdos
async function recebeResultados(pesquisa) {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3b2b06f233f5e223084b7c2fe71290df&language=pt-BR&page=1&include_adult=false&query=${pesquisa}`)
    const respData = await resp.json()
    return respData.results
}

btn.addEventListener('click', adicionaResultados)

async function adicionaResultados() {
    const data = await recebeResultados(input.value)

    searchGrid.innerHTML = data.map(info => {
        return `
            <div class="card" data-id="${info.id}">
                <div class="img">
                    <img src="${IMAGEPATH + info.poster_path}">
                </div>
                <div class="info">
                    <h2>${info.title}</h2>
                </div>
            </div>
        `
    }).join('')

    const cards = document.querySelectorAll('.card')
    clicaCard(cards)
}
///////////////
// Global 
//////////////
const movieURL = "http://localhost:3000/movies"
let selectedMovie;

/////////////
// DOM Selectors
//////////////
const movieList = document.querySelector("#movie-list")
const detailImage = document.querySelector("#detail-image")
const title = document.querySelector("#title")
const yearReleased = document.querySelector("#year-released")
const description = document.querySelector("#description")
const watched = document.querySelector("#watched")
const amount = document.querySelector("#amount")
const bloodForm = document.querySelector("#blood-form")
// console.log("🚀 ~ movieList:", movieList)

////////////
// Fetches (fns)
/////////////
function getAllMovies(url){
    return fetch(url).then(res => res.json());
}

/////////////
// Render Functions
/////////////
function renderAllMovies(moviesArr){
    // console.log("🚀 ~ renderAllMovies ~ moviesArr:", moviesArr)
    moviesArr.forEach(renderInNav)
}

function renderInNav(movieObj){
    // console.log("🚀 ~ renderInNav ~ movieObj:", movieObj)
    const img = document.createElement("img")
    // console.log("🚀 ~ renderInNav ~ img:", img)
    img.src = movieObj.image
    img.addEventListener('click', () => renderDetail(movieObj))
    movieList.append(img)
}

function renderDetail(movieObj){
    selectedMovie = movieObj
    detailImage.src = movieObj.image
    title.innerText = movieObj.title
    yearReleased.innerText = movieObj.release_year
    description.innerText = movieObj.description
    let watchVal = movieObj.watched ? "Watched" : "Unwatched"
    watched.innerText = watchVal
    amount.innerText = movieObj.blood_amount
}

////////////
// Event Listeners/Handlers
////////////

function handleBloodSubmit(e){
    e.preventDefault()
    console.dir(e.target["blood-amount"].value)
    // amount.innerText = e.target["blood-amount"].value
    selectedMovie.blood_amount += Number(e.target["blood-amount"].value) // typecast from string to integer
    renderDetail(selectedMovie)
    e.target.reset()
}
bloodForm.addEventListener('submit', handleBloodSubmit)

function toggleWatched(){
    selectedMovie.watched = !selectedMovie.watched
    renderDetail(selectedMovie)
}

watched.addEventListener('click', toggleWatched)

///////////////
// Initializers
//////////////
// getAllMovies(movieURL).then(renderAllMovies) //
getAllMovies(movieURL).then(movieArr => {
    renderDetail(movieArr[0])
    renderAllMovies(movieArr)
})
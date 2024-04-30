///////////////
// Global 
//////////////
const movieURL = "http://localhost:3000/movies"

/////////////
// DOM Selectors
//////////////
const movieList = document.querySelector("#movie-list")
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
    console.log("🚀 ~ renderAllMovies ~ moviesArr:", moviesArr)
    moviesArr.forEach(renderInNav)
}

function renderInNav(movieObj){
    console.log("🚀 ~ renderInNav ~ movieObj:", movieObj)
    const img = document.createElement("img")
    console.log("🚀 ~ renderInNav ~ img:", img)
    img.src = movieObj.image
    movieList.append(img)
}

////////////
// Event Listeners/Handlers
////////////



///////////////
// Initializers
//////////////
// getAllMovies(movieURL).then(renderAllMovies) //
getAllMovies(movieURL).then(movieArr => renderAllMovies(movieArr))
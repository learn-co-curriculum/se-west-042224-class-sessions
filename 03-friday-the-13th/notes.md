MANTRA
1. FETCH the data
2. SELECT `DOM` elements
3. CREATE new elements (as needed)
4. ATTACH event listeners (as needed)
5. ASSIGN data to element attributes
6. APPEND new elements to the DOM

# Deliverables
As a user, I can:
1. View all movie in nav element on page load
- [x] Fetch data from `http://localhost:3000/movies`
- [x] Select the "movie-list" nav element
- [x] Iterate over the array of movies, passing data to a renderInNav function
- [x] Create a new `img` element for each movie
- [x] Assign urls as img.src to new <img>s
- [x] Append each new `img` to the `movie-list` nav element
2. View the 1st movie details in movie-info section
- [x] Select the child elements of  `movie-info` section
- [x] Make renderDetail function that accepts a movie object as an argument
- [x] Assign data from movie to the child elements
- [x] call renderDetail with the first movie in the array
3. Click on a movie in nav element to view its details in movie-info section
- [x] Add event listener to each <img> in <nav>
- [x] invoke renderDetail with the movie object that corresponds to the clicked <img>
4. [Bonus] Click a 'watched' button which toggles the movie's watched status; no backend persistence is required
- [] Add event listener to watched button
- [] Toggle the watched status of the selectedMovie object
- [] re-render the movie-info section
5. Enter a number of drops for each movie in the form and have it persist in the DOM (no back-end persistence is required)
- [x] select the form element
- [x] attach listener to form element
- [x] prevent default
- [x] get the value of the input field
- [x] assign the value to the movie object

## Data shape
```json
{
    "id": 1,
    "title": "Friday the 13th",
    "release_year": 1980,
    "description": "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
    "image": "./assets/f13-1.jpeg",
    "watched": false,
    "blood_amount": 0
}
```

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
- [] Append each new `img` to the `movie-list` nav element
2. View the 1st movie details in movie-info section
3. Click on a movie in nav element to view its details in movie-info section
4. [Bonus] Click a 'watched' button which toggles the movie's watched status; no backend persistence is required
5. Enter a number of drops for each movie in the form and have it persist in the DOM (no back-end persistence is required)

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

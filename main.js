// ===== Import from database.js =====
import { movies } from './database.js';
// ===== End import from database.js =====

// ===================================================================
let movieBox = document.querySelector('#movie-box');

// ===== Bring all the movies in the Movie Box =====
const addMoviesInBox = (movies) => {   
    let output = '';
    movies.map(movie => {
        output += `  
                <li><a href="https://www.imdb.com/title/${movie.imdbID}/"><img src="${movie.Poster}" alt="Poster"></a></li> 
      `;
    });
    movieBox.innerHTML = output;
};
addMoviesInBox(movies);
// ===== End bring all the movies in the Movie Box =====

// ===== Delete movies from the Movie Box =====
const deleteMovies = () => {
    while (movieBox.firstChild) {
        movieBox.removeChild(movieBox.firstChild);
    }  
};
//deleteMovies();
// ===== End delete movies from the Movie Box =====


// ===== Functies: Filter, Map, Include =====
const filterTeamWord = wordToFind => movies.filter(movie => movie.Title.includes(wordToFind));
//log(filterTeamWord('Batman'));

const filterLatestMovie = movies => movies.filter(movie => movie.Year >= 2017);
//log(filterLatestMovie(movies));
// ===== End functies: Filter, Map, Include =====


//====================== User Interface Part ==================================================
// ===== Submit Button addEventListener =====
let submitBtn = document.querySelector('#submit-button');    
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let userInput = document.querySelector('#user-input').value;
    addMoviesInBox(filterTeamWord(userInput));
});
// ===== End submit Button addEventListener =====

// ===== Radio Buttons =====
const radioButtons = document.querySelector('#radioBtn-form');

radioButtons.addEventListener('change', (e) =>{
    let choice = e.target.value;
    switch (choice) {
        case 'latestmovie':
            deleteMovies();
            addMoviesInBox(filterLatestMovie(movies));
            break;
        case 'avengers':
            deleteMovies();
            addMoviesInBox(filterTeamWord('Avengers'));
            break;
        case 'xmen':
            deleteMovies();
            addMoviesInBox(filterTeamWord('X-Men'));
            break;    
        case 'princess':
            deleteMovies();
            addMoviesInBox(filterTeamWord('Princess'));
            break;
        case 'batman':
            deleteMovies();
            addMoviesInBox(filterTeamWord('Batman'));
            break;
        default:
            log('Parbleu?');
    };
});
// ===== End Radio Buttons =====
//====================== End User Interface Part ==================================================
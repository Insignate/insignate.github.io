const lblGoodMovies = document.getElementById('lb-good-movies')
const lblOkMovies = document.getElementById('lb-ok-movies')
const lblBadMovies = document.getElementById('lb-bad-movies')
const lblAverageRating = document.getElementById('lb-average-rate')
// Array of Movie Ratings
var movieScores = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

// Start a total rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

// Use a for loop to iterate through the movie scores
for (let score of movieScores){
  if(score > 7) goodMovieScores.push(score)
  else if(score >= 5 && score <= 7) okMovieScores.push(score)
  else badMovieScores.push(score)
}

// Find the average score
for (let score of movieScores){
  sum += score
}
sum = sum/movieScores.length
// To find the counts of each type of movie score, store the length of 
// each of the movie ratings arrays

// Print the results
lblGoodMovies.innerText = 'There are ' + goodMovieScores.length + ' good movies'
lblOkMovies.innerText = 'There are ' + okMovieScores.length + ' ok movies'
lblBadMovies.innerText = 'There are ' + badMovieScores.length + ' bad movies'
lblAverageRating.innerText = 'The average move rating is ' + sum.toFixed(2)+ '.'
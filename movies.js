let movieId = 0
let moviesList = [];

$(function() {
    $("#movie-form").on("submit", function(event) {
        event.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
        let movieData = {title, rating, movieId};
        let HTMLtoAppend = createHTML(movieData);
        movieId++;
        moviesList.push(movieData);
        $("#movie-table").append(HTMLtoAppend);
        $("#movie-form").trigger("reset");
    });

    // Handle delete button click
    $("tbody").on("click", ".delete-button", function(event) {
        //find Index of movie to remove
        let index = moviesList.findIndex(movie => movie.movieId === +$(event.target).data("deleteId"));
        //remove it from array and DOM
        moviesList.splice(index, 1);
        $(event.target).closest("tr").remove();
    });
});

function createHTML(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td><button class="delete-button" data-delete-id=${data.movieId}>Delete</button></td>
      </tr>
    `;
}
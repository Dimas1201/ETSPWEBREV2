$(document).ready(function () {
    // Fetching data from the API using AJAX
    fetchMovies();
});

function fetchMovies() {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon',
        method: 'GET',
        success: function (data) {
            displayPokemon(data.results);
        },
        error: function (error) {
            handleError(error);
        }
    });
}

function displayPokemon(results) {
    let output = '';
    $.each(results, function (key, pokemon ) {
        output += `
        <div class="col-xl-3 col-md-6 mb-5">
            <div class="card shadow border border-primary p-3 bg-white rounded">
                <div class="card-body ">
                    <h5 class="card-title text-center">${pokemon.name}</h5>
                <div class="text-center">
                    <a href="${pokemon.url}" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    $('#PokemonList').html(output);
}

function handleError(error) {
    console.error("Error fetching data: ", error);
    // Handle the error gracefully, e.g., display an error message to the user
}

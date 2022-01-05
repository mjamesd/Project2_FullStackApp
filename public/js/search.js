

const searchBar = document.getElementById(`searchBar`);
const searchForm = document.getElementById(`searchForm`);
const searchOutput = document.getElementById(`searchOutput`);
const happiApi = `https://api.happi.dev/v1/music?limit=5&apikey=${process.env.HAPPIDEV_KEY}&type=artist&lyrics=0&q=`;

const handleSearch = (event) => {
    event.preventDefault();
    const term = searchBar.value.trim();
    // first look in our db for the artist
    let thisSearch = `/api/artists/search/${term}`;
    $.ajax(thisSearch).then((response) => {
        if (response.length == 1) {
            searchOutput.innerHTML = `<h3>Results:</h3>
            <p>Artist: ${response[0].name}</p>
            <img src="${response[0].imgur_url}" />`;
        } else if (response.length > 1) {
            searchOutput.innerHTML = `<h3>Results:</h3>`;
            response.forEach(artist => {
                searchOutput.innerHTML += `<p>Artist: ${artist.name}</p>
                <p><img src="${artist.imgur_url}" /></p>
                <p>&nbsp;</p>`;
            });
        } else {
            // if not found, then search Happi.dev's music API
            thisSearch = happiApi + encodeURIComponent(term);
            $.ajax(thisSearch).then((response) => {
                const artists = response.result;
                console.log(artists);
                if (artists.length == 0) {
                    searchOutput.innerHTML = `<h3>Results:</h3>
                    <p><em>No search results. Please try a different search term.</em></p>`;
                } else {
                    searchOutput.innerHTML = `<h3>Results:</h3>`;
                    artists.forEach(artist => {
                        searchOutput.innerHTML += `<p>Artist: ${artist.artist}</p>
                        <p><img src="${artist.cover}" /></p>
                        <p>&nbsp;</p>`;
                        // add this artist to our database if similar enough to user's search term
                        if (stringSimilarity.compareTwoStrings(term, artist.artist) > 0.8) {
                            const createArtist = `/api/artists/add`;
                            const body = {
                                'name': artist.artist,
                                'imgur_url': artist.cover
                            };
                            $.ajax({
                                url: createArtist,
                                type: `POST`,
                                contentType: 'application/json',
                                dataType: 'json',
                                data: JSON.stringify(body)
                            });
                        }
                    });
                    

                    
                }
            });
        }
    });
};

searchForm.addEventListener("submit", handleSearch);
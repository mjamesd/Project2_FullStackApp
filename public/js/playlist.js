// handles adding a song to a playlist from a button on the front end
const addSongToPlaylist = async (e) => {
    e.preventDefault();
    const playlist_id = document.getElementById(`playlist_id`).value;
    const song_id = document.getElementById(`song_id`).value;
    const body = {
        playlist_id: playlist_id,
        song_id: song_id,
    };
    const addSongUrl = `/api/playlists/addSong`;
    const response = await fetch(addSongUrl, {
        method: `POST`,
        headers: { 'Content-Type': `application/json` },
        body: JSON.stringify(body)
    });
    console.log(response);
    if (response.ok) {
        document.location.replace(`/playlists/${playlist_id}`);
    } else {
        alert(`Failed to add new record. Cannot have the same song twice.`);
    }
};
document.getElementById(`addSongToPlaylist`).addEventListener(`submit`, addSongToPlaylist);
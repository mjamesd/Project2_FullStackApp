// handles creating a new playlist
const handleAddPlaylist = async (e) => {
    e.preventDefault();
    const body = {
        name: document.getElementById(`playlist-name`).value,
        description: document.getElementById(`playlist-description`).value,
        user_id: document.getElementById(`playlist-user_id`).value,
        isPublic: document.getElementById(`playlist-isPublic`).checked,
    };
    const url = `/api/playlists/add`;
    const response = await fetch(url, {
        method: `POST`,
        headers: { 'Content-Type': `application/json` },
        body: JSON.stringify(body)
    });
    if (response.ok) {
        document.location.replace(`/`);
    } else {
        alert(`Failed to add new record. Try again!`);
    }
};

document.getElementById(`addPlaylist`).addEventListener(`submit`, handleAddPlaylist);
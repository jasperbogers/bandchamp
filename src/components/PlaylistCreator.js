import React, {useState} from "react";
import {v4 as uuid} from "uuid";

/**
 * A playlist creator offers an UI to create a playlist containing songs
 */
function PlaylistCreator({addPlaylist}) {

    /**
     * State variable of the playlist being created
     */
    const [playlist, setPlaylist] = useState({
        id: "",
        description: ""
    });

    /**
     * Set a new playlist state whenever description changes
     */
    function handleDescriptionInputChange(e) {
        setPlaylist({...playlist, description: e.target.value});
    }

    /**
     * Add the created playlist by providing it to the callback method
     */
    function handleCreate(e) {
        e.preventDefault();
        if (playlist.description.trim()) {
            addPlaylist({...playlist, id: uuid()});
            // reset description input
            setPlaylist({...playlist, description: ""});
        }
    }

    return (
        <>
            <h2>Playlist creator</h2>
            <p>
                Playlist creator offers a way to create a playlist consisting of tracks.
            </p>
            <form onSubmit={handleCreate}>
                <input name="description"
                       type="text"
                       value={playlist.description}
                       onChange={handleDescriptionInputChange}/>
                <button type="submit">Create</button>
            </form>
        </>
    );
}

export default PlaylistCreator;
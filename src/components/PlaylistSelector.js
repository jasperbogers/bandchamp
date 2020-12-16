import React from "react";

/**
 * A playlist selector offers a UI to see available playlists and select one
 */
function PlaylistSelector({playlists, selectPlaylist}) {

    return (
        <>
            <h2>Playlist selector</h2>
            <p>
                Select one of the available playlists to see, add or play tracks on it
            </p>
            <ul>
                {playlists.map((playlist) =>
                    <li onClick={() => selectPlaylist(playlist)}
                        key={playlist.id}><a href={"#"+playlist.id}>{playlist.description}</a></li>
                )}
            </ul>
        </>
    )
}

export default PlaylistSelector;
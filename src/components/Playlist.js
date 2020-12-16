import React, {useState} from "react";
import TrackCreator from "./TrackCreator.js"

/**
 * A playlist is a collection of tracks
 */
function Playlist({playlist}) {

    /**
     * State variable of the tracklist
      */
    const [tracks, setTracks] = useState([]);
    const [activeTrack, setActiveTrack] = useState();

    /**
     * Add the provided track to the collection
     */
    function addTrack(track) {
        setTracks([track, ...tracks]);
    }

    function selectActiveTrack(track) {
        setActiveTrack(track);
    }

    return playlist !== undefined && (
        <>
            <h2>Active playlist</h2>
            <p>{playlist.description}</p>
            <TrackCreator addTrack={addTrack} />
            <h3>Tracks</h3>
            <ul>
                {tracks.map((track) =>
                    <li onClick={() => selectActiveTrack(track)}
                        key={track.id} dangerouslySetInnerHTML={{__html: track.embeddedHtml}} />
                )}
            </ul>
        </>
    )
}

export default Playlist;
import React, {useState} from "react";
import {v4 as uuid} from "uuid";

/**
 * A track creator is used to add tracks to a containing playlist
 */
function TrackCreator({addTrack}) {

    /**
     * State variable of the track being created
     */
    const [track, setTrack] = useState({
        id: "",
        embeddedHtml: ""
    });

    /**
     * Set a new track state whenever description changes
     */
    function handleEmbeddedHtmlInputChange(e) {
        setTrack({...track, embeddedHtml: e.target.value});
    }

    /**
     * Add the created track by providing it to the callback method
     */
    function handleCreate(e) {
        e.preventDefault();
        if (track.embeddedHtml.trim()) {
            addTrack({...track, id: uuid()});
            // reset description input
            setTrack({...track, embeddedHtml: ""});
        }
    }

    return (
        <>
            <h3>Add track</h3>
            <p>
                Add the embed URL of the track you want to add.
            </p>
            <form onSubmit={handleCreate}>
                <input name="description"
                       type="text"
                       value={track.embeddedHtml}
                       onChange={handleEmbeddedHtmlInputChange}/>
                <button type="submit">Add track</button>
            </form>
        </>
    );
}

export default TrackCreator;
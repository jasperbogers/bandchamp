import React, {useState} from "react";
import './App.css';
import PlaylistCreator from "./components/PlaylistCreator.js";
import PlaylistSelector from "./components/PlaylistSelector.js";
import Playlist from "./components/Playlist.js";

function App() {

    const [playlists, setPlaylists] = useState([]);
    const [activePlaylist, setActivePlaylist] = useState();

    /**
     * Add the provided playlist to the collection of playlists
     * @param playlist
     */
    function addPlaylist(playlist) {
        setPlaylists([playlist, ...playlists]);
    }

    function selectPlaylist(playlist) {
        setActivePlaylist(playlist);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Bandchamp playlist manager</h1>
            </header>
            <div className="App-body">
                <section className="left">
                    <PlaylistCreator addPlaylist={addPlaylist}/>
                    {playlists.length > 0 && <PlaylistSelector playlists={playlists} selectPlaylist={selectPlaylist} />}
                </section>
                <section className="right">
                    <Playlist playlist={activePlaylist}/>
                </section>
            </div>
        </div>
    );
}

export default App;

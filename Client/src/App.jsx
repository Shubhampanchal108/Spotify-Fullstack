import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      {songsData.lenght !== 0
       ?  <>
          <div className="h-[90%] flex">
            <Sidebar />
            <Display />
          </div>
          <MusicPlayer />
        </>
       : null
      }

      <audio ref={audioRef} src={track ? track.file: ""} preload="auto"></audio>
    </div>

  );
};

export default App;

    // // <Login/>
    // <SignUp/>
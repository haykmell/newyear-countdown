import React, { useEffect, useState } from "react";
import ReactAudioPlayer from 'react-audio-player';
import { AiOutlineSound, AiFillSound } from 'react-icons/ai';
import Music from './songs/song.mp3';

const SoundPlayer = () => {
    const [player, setPlayer] = useState(true);
    return (
        <>
            {player && <ReactAudioPlayer src={Music} autoPlay />}
            <button className="audioBtn" onClick={() => setPlayer(!player)}>{player ? <AiFillSound /> : <AiOutlineSound />} {player ? 'ON' : "OFF"}</button>
        </>
    )
}

export default SoundPlayer

import React, { useEffect, useRef, useState } from 'react';
import BGMusic from './audios/3. Resolve.mp3';
import SoundOnIcon from './images/Icons/s_on.png';
import SoundOffIcon from './images/Icons/s_off.png';
import styles from './AudioPlayer.module.css';


function AudioPlayer({ audioState = 'play' }) {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if(audioState === 'play') {
      setPlaying(true)
    }
    else if(audioState === 'pause') {
      setPlaying(false)
    }

  }, [audioState]);

  useEffect(() => {
      if(playing) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }

    return () => {
        if(playerRef.current && !playerRef.current.paused) {
            playerRef.current.pause()
        }
    };
  }, [playerRef, playing]);

  const togglePlaying = () => setPlaying(!playing)

  return (
    <>
      <audio className={styles.hidden} autoPlay loop ref={playerRef}>
        <source src={BGMusic} />
      </audio>
      <div className={styles.playerIcon}>
        {playing ? <img src={SoundOnIcon} onClick={togglePlaying} alt="Sound On" /> :  <img src={SoundOffIcon} onClick={togglePlaying} alt="Sound Off" /> }
      </div>
    </>
  );
}

export default AudioPlayer;

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import './App.css';
import styles from "./styles/AudioPlayer.module.css";
import Backdrop from './background';
import { ReactComponent as Play } from "./assets/play.svg";
import { ReactComponent as Pause } from "./assets/pause.svg";
import { ReactComponent as Next } from "./assets/next.svg";
import { ReactComponent as Prev } from "./assets/prev.svg";

const AudioPlayer = () => {

  const [songs, setSongs] = useState([])
  const [color, setColor] = useState("null")
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);


  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    getSong()
  }, [])


  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
      setIsPlaying(true)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
      setIsPlaying(false)
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  }


  const getSong = () => {
    axios
      .get('https://glacial-wave-24104.herokuapp.com/api/songs')
      .then(
        (response) => setSongs(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  const handleDelete = (event) => {
    axios
      .delete('https://glacial-wave-24104.herokuapp.com/api/songs/' + event.target.value)
      .then((response) => {
        getSong()
      })
  }

  const handleUpdate = (editSong) => {
    console.log(editSong.id)
    axios
      .put('https://glacial-wave-24104.herokuapp.com/api/songs/' + editSong.id, editSong)
      .then((response) => {
        getSong()
      })
  }

  const handleCreate = (addSong) => {
    axios
      .post('https://glacial-wave-24104.herokuapp.com/api/songs', addSong)
      .then((response) => {
        console.log(response)
        getSong()
      })
  }

  return (
    <>
      <h1>Music App</h1>

      {/* //////////////////DO NOT DELETE THIS CODE WILL NOT WORK WITHOUT IT IDK WHY */}
      <div className="audioPlayer1">
        <audio ref={audioPlayer} src="https://www.computerhope.com/jargon/m/example.mp3" preload="metadata"></audio>
        <button className={styles.forwardBackward} onClick={backThirty}>30</button>
        <button onClick={togglePlayPause} className={styles.playPause}>
          play
        </button>
        <button className={styles.forwardBackward} onClick={forwardThirty}>30></button>

        {/* current time */}
        <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

        {/* progress bar */}
        <div>
          <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
        </div>

        {/* duration */}
        <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
      </div>
      {/* ///////////////// I SET IT TO DISPLAY NONE  /////////////////////// */}

      <div className="{styles.audioPlayer}">
        {songs.map((song) => {
          return (
            <div className={isPlaying ? "songCard-playing" : "songCard"} key={song.id}>
              <h4 className='name'>{song.name}</h4>
              <h5>Artist: {song.artist}</h5>
              <h5>Genre: {song.genre}</h5>
              <img className='songImage' src={song.image}></img>

              <div className='audioPlayer'>

                <audio ref={audioPlayer} src={song.audio} preload="metadata"></audio>
                {console.log(song.audio)}
                <button className={styles.forwardBackward} onClick={backThirty}><Prev /></button>

                <button className={styles.playPause} onClick={togglePlayPause}>{isPlaying ? <Pause /> : <Play />}</button>

                <button className={styles.forwardBackward} onClick={forwardThirty}><Next /></button>

                {/* current time */}
                <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

                {/* progress bar */}
                <div>
                  <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
                </div>

                {/* duration */}
                <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
              </div >

              <Edit handleUpdate={handleUpdate} id={song.id} /><br />

              <button className='deleteButton' onClick={handleDelete} value={song.id}>
                Delete
              </button>

              <Backdrop
                activeColor={color}
                isPlaying={isPlaying}
              />
            </div >
          )
        })}
      </div >
      <Add className=' addForm' handleCreate={handleCreate} />
    </>
  )
}


export default AudioPlayer;
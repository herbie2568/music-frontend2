import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import axios from 'axios'
import Add from './components/Add'
import Euphoria from './assets/euphoria.mp3'
import './App.css';
import ReactPlayer from 'react-player'



const AudioPlayer = () => {

  const [songs, setSongs] = useState([])
  const [isPlaying, setIsPlaying] = useState(false);
  const [url, setUrl] = useState(null)
  const [controls, setControls] = useState(true)
  const [volume, setVolume] = useState(0.7)
  const [muted, setMuted] = useState(false)
  const [played, setPlayed] = useState(0)
  const [play, setPlay] = useState(null)
  const [pause, setPause] = useState(null)
  const [duration, setDuration] = useState(0)
  const [loop, setLoop] = useState(false)

  useEffect(() => {
    getSong()
  }, [])

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

      <div className="{styles.audioPlayer}">
        {songs.map((song) => {
          return (
            <>
              <img className='songImage' src={song.image}></img>
              <div key={song.id}>
                <h4 className='name'>{song.name}</h4>
                <h5>Artist: {song.artist}</h5>
                <h5>Genre: {song.genre}</h5>


                <div id='player-wrapper'>
                  <ReactPlayer
                    id='react-player'
                    url={Euphoria}
                    width='30%'
                    height='30%'
                    playing={isPlaying}
                    controls={controls}
                    volume={volume}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                </div>
                <Edit handleUpdate={handleUpdate} id={song.id} /><br />

                <button className='deleteButton' onClick={handleDelete} value={song.id}>
                  Delete
                </button>


              </div >
            </>
          )
        })}
      </div >
      <Add className=' addForm' handleCreate={handleCreate} />
    </>
  )
}


export default AudioPlayer;
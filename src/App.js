import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import './App.css';

const App = () => {

let [songs, setSongs] = useState([])

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


useEffect(() => {
 getSong()
}, [])

  return (
    <>
      <h1>Music App</h1>
      <div className="songContainer">
{songs.map((song) => {
return (
<div className="songCard" key={song.id}>
 <h4 className = 'name'>{song.name}</h4>

 <h5>Artist: {song.artist}</h5>
 <h5>Genre: {song.genre}</h5>
 <img className = 'songImage' src = {song.image}></img>
 <Edit handleUpdate={handleUpdate} id={song.id} /><br/>
 <button className = 'deleteButton' onClick={handleDelete} value={song.id}>
   Delete
 </button>
</div>
)
})}

</div>
<Add className = 'addForm' handleCreate={handleCreate}/>

    </>
  )
}


export default App;

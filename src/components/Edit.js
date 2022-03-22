import React, { useState, useEffect } from 'react'
import axios from 'axios'

//only need props as a param if we are passing in props to this component (we are going to here).
const Edit = (props) => {
    console.log(props.id);
    let emptySong = { id: props.id, name: '', artist: '', genre: '', image: '', audio: '', price: ''}
    const [song, setSong] = useState(emptySong)
    // const [songs, setSongs] = useState([])
     const [toggleEdit, setToggleEdit] = useState(false)

    const getSong = () => {
      axios
        .get('https://glacial-wave-24104.herokuapp.com/api/songs')
        .then(
          (response) => setSong(response.data),
          (err) => console.error(err)
        )
        .catch((error) => console.error(error))
    }

    // const handleUpdateSong = (editSong) => {
    //   console.log(editSong.id)
    //   axios
    //     .put('https://glacial-wave-24104.herokuapp.com/api/songs/' + editSong.id, editSong)
    //     .then((response) => {
    //       getSong()
    //     })
    // }


    const handleChange = (event) => {
      setSong({ ...song, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.handleUpdateSong(song)
    }

    const toggleEditForm = (event) => {
      if (toggleEdit) {
        setToggleEdit(false)
      } else {
        setToggleEdit(true)
      }
    }

    if (!song.image) {
        song.image = 'https://i.imgur.com/D3aOVsJ.png'
    }
    if (!song.price) {
        song.price = '1.29'
    }

  return (
    <div className = 'addForm'>
    <button className='editButton' onClick={toggleEditForm}>Edit Song</button>
    {toggleEdit ? (
        <>
    <form className = 'editForm' onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input className = 'editInput' type="text" name="name" value={song.name} onChange={handleChange} placeholder = 'Name...'/>

        <label htmlFor="artist"></label>
        <input className = 'editInput' type="text" name="artist" value={song.artist} onChange={handleChange} placeholder = 'Artist...'/>

        <label htmlFor = 'genre'></label>


        <label htmlFor="image"></label>
        <input className = 'editInput' type="text" name="image" value={song.image} onChange={handleChange} placeholder = 'Image URL...'/>




        <label htmlFor="price"></label>
        <input className = 'editInput' type="text" name="price" value={song.price} onChange={handleChange} placeholder = 'Price...'/><br/>

        <select className = 'genreMenu' name = 'genre' id = 'genre' value = {song.genre} onChange = {handleChange}>
        <option value='pop' id='pop'>Pop</option>
     <option value='rock' id='rock'>Rock</option>
     <option value='techno' id='techno'>Techno</option>
     <option value='hiphop' id='hiphop'>Hip-hop</option>

        </select><br/>

        <label htmlFor="audio"></label>
        <input className = 'editInput' type="file" name="audio" value={song.audio} onChange={handleChange} placeholder = 'Audio file...'/>
        <br />
        <br />

        <input className = 'submitButton' type="submit" />
    </form>

    </>
) : (
    null
)}
    </div>
  )
}

export default Edit

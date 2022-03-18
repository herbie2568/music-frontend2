import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {

  
  const handleChange = (event) => {
    setSong({ ...song, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(song)
  }


  let emptySong = { name: '', artist: '', genre: '', image: '', audio: '' }
  const [song, setSong] = useState(emptySong)
  return (
    <div className = 'addForm'>
    <h3>Add Song</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input className = 'addInput' type="text" name="name" value={song.name} onChange={handleChange} placeholder = 'Name...'/>
        <br />
        <br />
        <label htmlFor="artist"></label>
        <input className = 'addInput' type="text" name="artist" value={song.artist} onChange={handleChange} placeholder = 'Artist...'/>
        <br />
        <br />

        <label htmlFor = 'genre'></label>
        <select name = 'genre' id = 'genre' value = {song.genre} onChange = {handleChange} required>
            <option value = 'pop'>Pop</option>
            <option value = 'rock'>Rock</option>
            <option value = 'techno'>Techno</option>
            <option value = 'hiphop'>Hip-hop</option>

        </select><br/><br/>

        <label htmlFor="image"></label>
        <input className = 'addInput' type="text" name="image" value={song.image} onChange={handleChange} placeholder = 'Image URL...'/>
        <br />
        <br />

        <label htmlFor="audio"></label>
        <input className = 'addInput' type="file" name="audio" value={song.audio} onChange={handleChange} placeholder = 'Audio file...'/>
        <br />
        <br />

        <label htmlFor="price"></label>
        <input className = 'addInput' type="text" name="price" value={song.price} onChange={handleChange} placeholder = 'Price...'/>
        <br />
        <br />

        <input className='submitButton' type="submit" />
      </form>
    </div>
  )
}

export default Add

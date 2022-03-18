import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'

import Register from './components/Register'

import Euphoria from './assets/euphoria.mp3'
import './App.css';
import ReactPlayer from 'react-player'
import User from './components/User'
import Songs from './components/Songs'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Account from './components/Account'
import Cart from './components/Cart'
import Show from './components/Show'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";


// let [songs, setSongs] = useState([])
// let [users, setUsers] = useState([])
// let [accountInfo, setAccountInfo] = useState([])
// const [name, setName] = useState('')
// const [username, setUsername] = useState('')
// const [password, setPassword] = useState('')
// const [toggleLogin, setToggleLogin] = useState(true)
// const [toggleError, setToggleError] = useState(false)
// const [errorMessage, setErrorMessage] = useState('')
// const [toggleLogout, setToggleLogout] = useState(false)
// const [currentUser, setCurrentUser] = useState({})

const App = () => {

  const [songs, setSongs] = useState([])
  let [users, setUsers] = useState([])
  let [accountInfo, setAccountInfo] = useState([])
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [toggleLogin, setToggleLogin] = useState(true)
  const [toggleError, setToggleError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [toggleLogout, setToggleLogout] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [url, setUrl] = useState(null)
  // const [controls, setControls] = useState(true)
  // const [volume, setVolume] = useState(0.7)
  // const [muted, setMuted] = useState(false)
  // const [played, setPlayed] = useState(0)
  // const [play, setPlay] = useState(null)
  // const [pause, setPause] = useState(null)
  // const [duration, setDuration] = useState(0)
  // const [loop, setLoop] = useState(false)

  const getAccountInfo = () => {
    axios
   .get('https://glacial-wave-24104.herokuapp.com/api/accounts')
   .then(
     (response) => setSongs(response.data),
     (err) => console.error(err)
   )
   .catch((error) => console.error(error))  
  }

  const getUser = () => {
  axios
    .get('https://glacial-wave-24104.herokuapp.com/api/users')
    .then(
      (response) => setUsers(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
  }




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
  const handleCreateUser = (addUser) => {
    axios
      .post('https://glacial-wave-24104.herokuapp.com/api/users', addUser)
      .then((response) => {
        console.log(response)
        getUser()
      })
  }

  const handleCreateAccount = (addAccountInfo) => {
      axios.post('https://glacial-wave-24104.herokuapp.com/api/accounts', addAccountInfo)
      .then((response) => {
          getAccountInfo()
      })

  }

// const handleCreateUser = (event) => {
//
//     setUsername('')
//     setPassword('')
//     axios.post('https://glacial-wave-24104.herokuapp.com/api/users',
// {
//     name:name,
//     username: username,
//     password: password
// })
// .then((response) => {
//     if(response.data.username){
//        setToggleError(false)
//        setErrorMessage('')
//        setCurrentUser(response.data)
//        handleToggleLogout()
//      } else {
//        setErrorMessage(response.data)
//        setToggleError(true)
//      }
// })
//
// }
//
// const handleToggleLogout = () => {
//   if(toggleLogout) {
//     setToggleLogout(false)
//   } else {
//     setToggleLogout(true)
//   }
// }



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


      <Login />
      
      {/* <Add className=' addForm' handleCreate={handleCreate} /> */}
      <div className = 'navbarDiv'>
        <h1>insert cool title here</h1>
        <nav className = 'navBar'>
          <Link className = 'link'to="/songs">Home</Link>
          <Link className = 'link' to='/new'>Add Song</Link>
          <Link className = 'link' to='/account'>Account Details</Link>
          <Link className = 'link' to='/cart'>Your Cart</Link>
        </nav>
      </div>

      <div className="wrapper">
        <Routes>
          <Route path="/login" element = {<Login />}/>
          <Route path="/signup" element = {<Signup />}/>
          <Route path="/songs" element={<Songs />}/>
          <Route path="/account" element={<Account handleCreateAccount= {handleCreateAccount}/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path = '/songs/:id' element = {<Show songs = {songs} handleUpdate={handleUpdate} />}/>

          <Route path="/createaccount" element={<User handleCreateUser = {handleCreateUser}/>}/>

          <Route path="/new" element={<Add handleCreate = {handleCreate}/>}/>
        </Routes>
      </div>
    </>
  )
}


export default App;
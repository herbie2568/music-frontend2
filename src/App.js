import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
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



const App = () => {

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

const handleDelete = (event) => {
  axios
    .delete('https://glacial-wave-24104.herokuapp.com/api/songs/' + event.target.value)
    .then((response) => {
      getSong()
    })
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
  useEffect(() => {
    getSong()
  }, [])

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
    <div className = 'navbarDiv'>
    <h1>insert cool title here</h1>
    <nav className = 'navBar'>
    <Link className = 'link'to="/songs">Home</Link>
    <Link className = 'link' to='/new'>Add Song</Link>
    <Link className = 'link' to='/createaccount'>Sign Up</Link>
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


export default AudioPlayer;

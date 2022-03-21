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



const App = (props) => {

  const [songs, setSongs] = useState([])
  const [users, setUsers] = useState([])
  const [accountInfo, setAccountInfo] = useState([])
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [toggleLogin, setToggleLogin] = useState(true)
  const [toggleError, setToggleError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [toggleLogout, setToggleLogout] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [currentAccount, setCurrentAccount] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [toggleSignUp, setToggleSignUp] = useState(false)


  const handleLogin = (user) => {
    axios({
      method: 'put',
      url: 'https://glacial-wave-24104.herokuapp.com/api/useraccount/login',
      data: {
        username: user.username,
        password: user.password
      }
    })
    .then((response) => {
      if (response.data.username) {
        console.log(response.data)
        setToggleError(false)
        setErrorMessage('')
        setCurrentUser(response.data)
        setIsAuthenticated(true)
      } else {
        console.log(response.data)
        setErrorMessage('Sorry, invalid login.')
        setToggleError(true)

      }
    })
}


  const handleToggleSignUp = (event) => {
    if (toggleLogin) {
      setToggleLogin(false)
    } else {
      setToggleLogin(true)
    }
  }


  const handleLogout = (event) => {
    setPassword('')
    setUsername('')
    setCurrentUser({})
    setIsAuthenticated(false)
  }

  const getAccountInfo = () => {
    axios
   .get('https://glacial-wave-24104.herokuapp.com/api/accounts')
   .then(
     (response) => setSongs(response.data),
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

  const handleUpdateSong = (editSong) => {
    console.log(editSong.id)
    axios
      .put('https://glacial-wave-24104.herokuapp.com/api/songs/' + editSong.id, editSong)
      .then((response) => {
        getSong()
      })
  }

  const handleCreateUser = async (addUser) => {
    axios
      .post('https://glacial-wave-24104.herokuapp.com/api/useraccount', addUser)
      .then((response) => {
        console.log(response.data)
        setCurrentUser(response.data)
        setIsAuthenticated(true)
        handleCreateAccount(currentUser)
      })
      .catch((error) => console.log(error))
  }


  const handleCreateAccount = (newAccount) => {
    axios({
      method: 'post',
      url: 'https://glacial-wave-24104.herokuapp.com/api/accounts',
      data: {
        owner: newAccount
      }
    })
      .then((response) => {
        if (response.data.owner) {
          console.log(response.data)
        } else {
          console.log(response.data)
        }
      })
  }

  const handleCreateSong = (addSong) => {
    axios
      .post('https://glacial-wave-24104.herokuapp.com/api/songs', addSong)
      .then((response) => {
        console.log(response)
        getSong()
      })
  }

  return (
    <>
      {isAuthenticated ? (
        <>
      <div className = 'navbarDiv'>
      <div className = 'logoNameApp'>
      <div className = 'logoName'>
      <img className = 'logo' src = 'https://i.imgur.com/bZRUMGT.png'></img>
      <div className = 'appName'>Music App</div>
      </div>
      <button className = 'logoutButton' onClick={handleLogout}>Log out</button>
      </div>
        <nav className = 'navBar'>
          <Link className = 'link'to="/">Home</Link>
          <Link className = 'link' to='/new'>Add Song</Link>
          <Link className = 'link' to='/account'>Account Details</Link>
          <Link className = 'link' to='/cart'>Your Cart</Link>

        </nav>
      </div>

      <div className="wrapper">
        <Routes>

          <Route path="/*" element={<Songs />}/>
          <Route path="/account" element={<Account currentUser = {currentUser} handleCreateAccount= {handleCreateAccount}/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path = '/songs/:id' element = {<Show songs = {songs}  handleDelete = {handleDelete}/>}/>

          <Route path="/createaccount" element={<User handleCreateUser = {handleCreateUser}/>}/>
          <Route path = "/edit" element = {<Edit handleUpdateSong = {handleUpdateSong}/>} />
          <Route path="/new" element={<Add handleCreateSong = {handleCreateSong}/>}/>
        </Routes>

        <footer>
        <ul className = 'footerUL'>

      <li  className = 'footerLI'>About</li>
      <li  className = 'footerLI'>Legal Terms</li>
      <li  className = 'footerLI'>Privacy Statement</li>
      <li  className = 'footerLI'>Careers</li>
      <li className = 'footerLI'>Customer Support</li>
      </ul>
      <div className = 'footerDiv'>
      <img className = 'logoFooter' src = 'https://i.imgur.com/bZRUMGT.png'></img>
      <div className = 'footerName'>Music App</div>
      </div>
      <div className = 'names'>Made by <a href = 'https://www.linkedin.com/in/meredith-bloom/'>Meredith Bloom</a>, <a href = 'https://www.linkedin.com/in/christophermaleakethompson/'> Christopher Thompson</a>, and <a href = 'https://www.linkedin.com/in/lilychen910'> Lily Chen</a></div>


        </footer>
      </div>
    </>
) : (
     <>
     {toggleLogin ? (
   <>
     <Login handleLogin={handleLogin} />
       <div className = 'needAccount'>
         <span>Need an account?</span><br/>
         <div className = 'signupDiv' onClick={handleToggleSignUp}>Sign up</div>
       </div>
   </>
 ) : (
   <>
     <Register handleCreateUser={handleCreateUser} handleCreateAccount = {handleCreateAccount}/>

     <div className = 'needAccount'>
       <span>Have an account already?</span><br/>
       <div className = 'signupDiv' onClick={handleToggleSignUp}>Login</div>
     </div>
   </>
 )}
</>
)
}
</>
)
}



export default App;

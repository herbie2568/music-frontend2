import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CreateAccountDetails from './CreateAccountDetails'
import UpdateAccount from './UpdateAccount'

const Account = (props) => {

  const [account, setAccount] = useState(props.currentAccount)
  const [toggleUpdate, setToggleUpdate] = useState(false)
  const [accountExists, setAccountExists] = useState(props.accountExists)
  const [toggleAccount, setToggleAccount] = useState(false)
  const [currentAccount, setCurrentAccount] = useState(props.currentAccount)
  const [currentUser, setCurrentUser] = useState(props.currentUser)

  const handleChange = (event) => {
    setAccount({ ...account, [event.target.name]: event.target.value })
  }


  const handleSubmit = (event, account) => {
    console.log(account)
    event.preventDefault()
    props.handleUpdateAccount(account)
  }


  const toggleUpdateForm = (event) => {
    if (toggleUpdate) {
      setToggleUpdate(false)
    } else {
      setToggleUpdate(true)
    }
  }
  

  const toggleAccountExists = () => {
    if (accountExists) {
      setToggleAccount(true)
    } else {
      setToggleAccount(false)
    }
  }


  useEffect(() => {
    toggleAccountExists()
    props.getAccountInfo()
  }, [])

  return (
  <>
    {props.accountExists ? (
        <>
          <div className = 'accountContainer'>
            <div className = 'accountDetails'>
              <h2>Welcome back, {currentUser.username}</h2>
              <img src = {props.currentAccount.image}></img>
              <h4>Name: </h4><div className = 'showStuff'>{props.currentUser.name}</div>
              <h4>Location: </h4><div className = 'showStuff'>{props.currentAccount.location}</div>
              <h4>Favorite genres: </h4>
              <ul className='genre-list'>
                {props.currentAccount.favorite_genres.map((genre, index) => {
                  return (
                    <li key={genre}>
                      {genre}
                    </li>
                  ) 
                })}
              </ul>
            </div>

            <button className='updateAccountButton' onClick={toggleUpdateForm}>
              Update Account Info
            </button><br/>
            <button className='deleteButton' onClick={props.handleDeleteUser} value={currentUser.id}>
              Delete Account
            </button>
            
          {toggleUpdate ? (
          <>
                <h1>Welcome, {currentUser.name} </h1>
          </>
      ) : (
          null
      )}
            </div>
    
        </>
      ) : (
          <>
            <div className = "accountContainer">
              <CreateAccountDetails
                currentUser={props.currentUser}
                handleCreateAccount={props.handleCreateAccount}
                accountExists={props.accountExists}
              />
            </div>
         </>   
      )
    }
        
    </>
    )

}
export default Account

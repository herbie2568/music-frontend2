import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Account = (props) => {

  let emptyAccount = { id: props.id, owner: props.currentUser, location: '', favoritegenre: '', image: '', }
  const [account, setAccount] = useState(emptyAccount)
  const [toggleUpdate, setToggleUpdate] = useState(false)
  const [accountInfo, setAccountInfo] = useState([])
  // const [user, setUser] = useState({ props.currentUser })

  const handleChange = (event) => {
    setAccount({ ...account, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdateAccount(account)
  }

  const handleUpdateAccount = (editAccount) => {
    console.log(editAccount.id)
    axios
      .put('https://glacial-wave-24104.herokuapp.com/api/accounts/' + editAccount.id, editAccount)
      .then((response) => {
        getAccountInfo()
      })
  }


  const toggleUpdateForm = (event) => {
    if (toggleUpdate) {
      setToggleUpdate(false)
    } else {
      setToggleUpdate(true)
    }
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



  const getAccountInfo = () => {

    axios
   .get('https://glacial-wave-24104.herokuapp.com/api/accounts')
   .then(
     (response) => setAccountInfo(response.data),
     (err) => console.error(err)
   )
   .catch((error) => console.error(error))
  }


      useEffect(() => {
        getAccountInfo()
    }, [])

    if (!account.image) {
        account.image = 'https://i.imgur.com/V4RclNb.png'
    }


    return (
        <div className = 'accountContainer'>
        <div className = 'accountDetails'>
        <h2>Account Details</h2>

        <div className = 'accountDetailsDiv'>
        <div className = 'accountImage'>
        <div className = 'profilePicDiv'><img className = 'profilePic' src = {account.image}></img></div>
        </div>

        <div>
        <div className = 'showDiv'>
        <h4 className = 'showTitle'>Name: </h4><div className = 'showStuff'> {props.currentUser.name} </div>
        </div>
        <div className = 'showDiv'>
        <h4 className = 'showTitle'>Location: </h4><div className = 'showStuff'>{account.location}</div>
        </div>
        <div className = 'showDiv'>
        <h4 className = 'showTitle'>Favorite genre: </h4><div className = 'showStuff'>{account.favoritegenre}</div>
        </div>
        </div>

        </div>
        </div>

        <button className='updateAccountButton' onClick={toggleUpdateForm}>Update Account Info</button>
        {toggleUpdate ? (
        <>
        <form className = 'accountForm' onSubmit={handleSubmit}>

            <div>
            <label htmlFor="location">Location:</label>
            <input className = 'loginInput' type="text" name="location" value={account.location} onChange={handleChange} placeholder = 'Enter your city...'/>
            </div>
            <br />
            <div>
            <label className = 'genreLabel' htmlFor = 'favoritegenre'>Favorite genre:</label>
            <select className = 'genreMenu' name = 'favoritegenre' id = 'favoritegenre' value = {account.favoritegenre} onChange = {handleChange} required>
                <option value='pop' id='pop'>Pop</option>
                <option value='rock' id='rock'>Rock</option>
                <option value='techno' id='techno'>Techno</option>
                <option value='hiphop' id='hiphop'>Hip-hop</option>


            </select>
            </div>
            <br/>
            <div>
            <label htmlFor="image">Image URL: </label>
            <input className = 'loginInput' type="text" name="image" value={account.image} onChange={handleChange} placeholder = 'Enter the image URL...'/>
            </div>


            <input className = 'editAccountButton' type="submit" />
            </form>
            </>
      ) : (
          null
      )}
            </div>

    )

}
export default Account

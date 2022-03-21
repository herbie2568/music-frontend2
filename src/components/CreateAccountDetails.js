import React, { useState, useEffect } from 'react'


const CreateAccountDetails = (props) => {

    const genres = ['Pop', 'Rock', 'Techno', 'Hip-hop', 'Jazz', 'Rap', 'Country', 'Metal', 'Alternative', 'Indie']
    let emptyAccountDetails = { owner: props.currentUser, location: '', favorite_genres: '', image: '' }


    const [accountDetails, setAccountDetails] = useState(emptyAccountDetails)
    const [checkedGenreState, setCheckedGenreState] = useState(
        new Array(genres.length).fill(false)
    )

    const handleChange = (event) => {
        setAccountDetails({ ...accountDetails, [event.target.name]: event.target.value })
        console.log(accountDetails)
    }

    const handleCheckboxChange = (position) => {
        const updatedCheckedState = checkedGenreState.map((item, index) => {
            if (index === position) {
                return !item;
            } else {
                return item
            }
        })
        setCheckedGenreState(updatedCheckedState)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreateAccount(accountDetails)
    }



    return (
        <section className="account-detail-box">
                <h1>Set Account Details</h1>
                <form className = 'registerForm' onSubmit={handleSubmit}>
                    <label htmlFor="name">Location:</label>
                    <input
                        placeholder = 'Your location...'
                        type="text"
                        name="location"
                        onChange={handleChange}
                        value={accountDetails.location}
                        className = 'loginInput'
                    />
                    <div className='image'>
                        <label htmlFor="email">Profile Picture:</label><br/>
                        <input
                        placeholder = 'Upload a profile picture...'
                            type="text"
                            name="image"
                            onChange={handleChange}
                            value={accountDetails.image}
                            className = 'loginInput'
                            required
                        />
                    </div>
                <label htmlFor="username">Favorite Genres:</label>
                <ul className="genre-list">
                    {genres.map((genre, index) => {
                        return (
                        <li key={index}>
                                <input
                                    placeholder = 'Favorite genres...'
                                    type="checkbox"
                                    name="favorite_genres"
                                    key={`${index}-${genre}`}
                                    value={genre}
                                    checked={checkedGenreState[index]}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <label htmlFor={`${index}-${genre}`}>{genre}</label>
                        </li>
                    )
                })}
                </ul>
                
                <input className = 'signinButton' type="submit" value='Create Profile' />
                </form>
              </section>
    )

}

export default CreateAccountDetails
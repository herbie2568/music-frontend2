import react, { useState, useEffect } from 'react'



const UpdateAccount = (props) => {
    
    const genres = ['pop', 'rock', 'techno', 'hiphop', 'jazz', 'rap', 'country', 'metal', 'alternative', 'indie']
    
    const [accountDetails, setAccountDetails] = useState(props.currentAccount)
    const [checked, setChecked] = useState([])
    const [locationInput, setLocationInput] = useState("")
    const [imageInput, setImageInput] = useState("") 


    const handleChange = (event) => {
        setAccountDetails({ ...accountDetails, [event.target.name]: event.target.value })
        //console.log(accountDetails)
    }
    
    const handleCheck = (event) => {
        let updatedList = [...checked] 
        if (event.target.checked) {
            updatedList = [...checked, event.target.value]
            setAccountDetails((prevState) => ({
                ...prevState,
                favorite_genres: [...prevState.favorite_genres, event.target.value]
            }))
        } else {
            accountDetails.favorite_genres.splice(checked.indexOf(event.target.value), 1)
            updatedList.splice(checked.indexOf(event.target.value), 1)
        }
        setChecked(updatedList)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(accountDetails)
        props.handleCreateAccount(accountDetails)
    }

    console.log(checked)

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
                                    value={genre}                       
                                    onChange={handleCheck}
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

export default UpdateAccount

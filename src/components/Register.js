import React, { useState, useEffect } from 'react'

const Register = (props) => {
    let emptyUser = { name: '', email: '', username: '', password: '' }
    const [newUser, setNewUser] = useState(emptyUser)


    const handleChange = (event) => {
        setNewUser({...newUser, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreateUser(newUser)
    }

    return (
        <>
        <div className = 'logoName'>
        <img className = 'logo' src = 'https://i.imgur.com/bZRUMGT.png'></img>
        <div className = 'appName'>Music App</div>
        </div>
        <section className="register-box">
                <h1>Create an Account</h1>
                <form className = 'registerForm' onSubmit={handleSubmit}>

                    <label htmlFor="name">Name:</label>
                    <input
                        placeholder = 'Your name...'
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={newUser.name}
                        className = 'loginInput'
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                    placeholder = 'Email address...'
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={newUser.email}
                        className = 'loginInput'
                        required
                    />
                    <label htmlFor="username">Username:</label>
                    <input
                    placeholder = 'Create a username...'
                        type="text"
                        name="username"
                        onChange={handleChange}
                        className = 'loginInput'
                        value={newUser.username}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                    className = 'loginInput'
                    placeholder = 'Create a password...'
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={newUser.password}
                        required
                    />
                <input className = 'signinButton' type="submit" value='Register' />
                </form>
              </section>
        </>
    )

}

export default Register



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
        <section className="register-box">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={newUser.name}
                        required
                    /><br/><br/>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={newUser.email}
                        required
                    /><br/><br/>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={newUser.username}
                        required
                    /><br/><br/>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={newUser.password}
                        required
                    /><br/><br/>
                <input type="submit" value='Register' />
                </form>
              </section>
    )
              
}

export default Register
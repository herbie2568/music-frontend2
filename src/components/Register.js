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
        <section className="login-box">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                  <input
                      type="text"
                      id="name"
                      onChange={handleChange}
                      value={newUser.name}
                      required
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                      type="text"
                      id="email"
                      onChange={handleChange}
                      value={newUser.email}
                      required
                  />
                  <label htmlFor="username">Username:</label>
                  <input
                      type="text"
                      id="username"
                      onChange={handleChange}
                      value={newUser.username}
                      required
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                      type="password"
                      id="password"
                      onChange={handleChange}
                      value={newUser.password}
                      required
                  />
                  <button>Sign Up</button>
                </form>
              </section>
    )
              
}

export default Register
import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const User = (props) => {

    let emptyUser = { name: '', username: '', password: ''}
    const [user, setUser] = useState(emptyUser)


    const handleChange = (event) => {
      setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.handleCreateUser(user)
    }



  return (
    <div className = 'addForm'>
    <h3>Create Account</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input className = 'addInput' type="text" name="name" value={user.name} onChange={handleChange} placeholder = 'Name...'/>
        <br />
        <br />
        <label htmlFor="username"></label>
        <input className = 'addInput' type="text" name="username" value={user.username} onChange={handleChange} placeholder = 'Username...'/>
        <br />
        <br />

        <label htmlFor="image"></label>
        <input className = 'addInput' type="password" name="password" value={user.password} onChange={handleChange} placeholder = 'Password...'/>
        <br />
        <br />

        <input className = 'submitButton' type="submit" />
    </form>
    </div>
  )
}

export default User

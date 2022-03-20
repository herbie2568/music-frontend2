import axios from 'axios';
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../contexts/AuthProvider'



const Login = (props) => {
    const { setAuth } = useContext(AuthContext)
    const usesrRef = useRef();
    const errRef = useRef();
    
    let emptyUser = { username: '', password: ''}
    const [user, setUser] = useState(emptyUser)

    const [errMsg, setErrMsg] = useState('')

    // useEffect(() => {
    //     usesrRef.current.focus()
    // }, [])

    // useEffect(() => {
    //     setErrMsg('')
    // }, [user, password])


    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }
 

    const handleSubmit = async (event) => {
        event.preventDefault()
        //console.log(user)
        props.handleLogin(user)
    }

    // const handleLogin = (event) => {
    //     axios
    //         .put('https://glacial-wave-24104.herokuapp.com/api/useraccount/login')
    //         .then((response) => {
    //             console.log(response)
    //         })
        
    // }

    return (
            <section className="login-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={user.username}
                        required
                />
                <br/><br/>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={user.password}
                        required
                />
                <br/>
                    <button>Sign In</button>
                </form>
            </section>
        )
    
}

export default Login

import axios from 'axios';
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../contexts/AuthProvider'



const Login = () => {
    const { setAuth } = useContext(AuthContext)
    const usesrRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    // useEffect(() => {
    //     usesrRef.current.focus()
    // }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, password])


    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            axios
                .put('https://glacial-wave-24104.herokuapp.com/api/useraccount/login', ({user, password}))
                .then((response) => {

                })
            setUser('')
            setPassword('')
            // successfully submitted form
            setSuccess(true)
        } catch (err) {

        }
        //console.log(user, password)
        
        handleLogin(event)
    }

    const handleLogin = (event) => {
        axios
            .put('https://glacial-wave-24104.herokuapp.com/api/useraccount/login')
            .then((response) => {
                console.log(response)
            })
        
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>you are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go home</a>
                    </p>
                </section>

            ) : (
      
                <section className="login-box">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an account?<br />
                        <span className="line">

                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login

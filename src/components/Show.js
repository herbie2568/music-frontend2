import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Edit from './Edit.js'

const Show = (props) => {
    const params = useParams();
    const [songs, setSongs] = useState([])

    useEffect(() => {
        axios
            .get('https://glacial-wave-24104.herokuapp.com/api/songs/' + params.id)
            .then((response) =>
        setSongs(response.data))
    }, []);
    return (
        <>
        <h1>song details {params.id}</h1>
        <h2>{songs.name}</h2>
        <h2>{songs.artist}</h2>
        <h2>{songs.genre}</h2>
        <img src = {songs.image}></img>
        <h4>hi</h4>
        
        </>
    )
}

export default Show

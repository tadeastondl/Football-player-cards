import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const HomePage = () => {

    const [players, setPlayers] = useState()
    const [responseStatus, setResponseStatus] = useState("loading")

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/player`)
            .then(async res => {
                console.log(res.data)
                setPlayers(res.data.players)
                setResponseStatus("success")
            })
            .catch((error) => {
                const res = error.response
                setResponseStatus("error")
            })
    }, [])


    return (
        <div>
            {responseStatus === "loading" && <p>Loading</p>}
            {responseStatus === "error" && <p>No players found</p>}
            {responseStatus === "success" &&
                <div className='grid'>
                    {players.map((player, index) => {
                        return <Card {...player} key={index} />
                    })}
                </div>
            }
        </div>
    )
}

export default HomePage
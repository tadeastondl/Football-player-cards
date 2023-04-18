import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const HomePage = () => {

    const [players, setPlayers] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/player`)
            .then(async res => {
                setPlayers(await res.data.players)
                setLoading(false)
            })
    }, [])

    
  return (
    <div>
        {loading ? 
        <p>Loading</p> :
  
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
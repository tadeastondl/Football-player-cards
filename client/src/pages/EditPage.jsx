import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CardEdit from '../components/CardEdit';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditPage = () => {

  
  const navigate = useNavigate();

  const [playerData, setPlayerData] = useState();

  const [loading, setLoading] = useState(true)
  
  const params = useParams();

  const HandleChange = (event) => {
      setPlayerData({ ...playerData, [event.target.name]: event.target.value })
  }


  
  const PutPlayer = () => {
    console.log(playerData)
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/player/${params.id}`, playerData).then(() => {
        window.location.reload();

    })
    navigate('/')

}

useEffect(() => {

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/player/${params.id}`)
        .then(async res => {
            console.log(res)
            setPlayerData(res.data)
            setLoading(false)

        })

        
}, [])

  return (
    <>
    {
        loading ?
            <p>
                loading
            </p>
            :
            <CardEdit title={"Edit player"} >
            <Form onSubmit={PutPlayer}>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Player name</Form.Label>
                    <Form.Control type="text" placeholder="title" name='name' value={playerData.name} onChange={HandleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formYear">
                    <Form.Label>nationality</Form.Label>
                    <Form.Control type="text" placeholder="year" name='nationality' value={playerData.nationality} onChange={HandleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formYear">
                    <Form.Label>team</Form.Label>
                    <Form.Control type="text" placeholder="year" name='team' value={playerData.team} onChange={HandleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formYear">
                    <Form.Label>rating</Form.Label>
                    <Form.Control type="number" placeholder="year" name='rating' value={playerData.rating} onChange={HandleChange} />
                </Form.Group>
                <Button variant="primary" type="submit"   >
                    Submit
                </Button>
            </Form>
            </CardEdit>
    }
</>

  )
}

export default EditPage
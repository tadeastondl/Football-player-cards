import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CardEdit from '../components/CardEdit';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreatePage = () => {

    const navigate = useNavigate();

    const [playerData, setPlayerData] = useState();

    const HandleChange = (event) => {
        setPlayerData({ ...playerData, [event.target.name]: event.target.value })
    }

    const PostPlayer = async (event) => {
        event.preventDefault()
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/player`, playerData)
        navigate('/')
    }

    return (
        <div>
            <CardEdit title="Create Player">
                <Form onSubmit={PostPlayer}>
                    <Form.Group className="mb-3"  >
                        <Form.Label>Players name</Form.Label>
                        <Form.Control type="text" placeholder="Karl" name="name" required onChange={HandleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>nationality</Form.Label>
                        <Form.Control type="text" placeholder="Czechia" name="nationality" required onChange={HandleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Team</Form.Label>
                        <Form.Control type="text" placeholder="Branik" name="team" required onChange={HandleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Overall rating</Form.Label>
                        <Form.Control type="number" placeholder="69" name="rating" required onChange={HandleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit"  >
                        Create
                    </Button>
                </Form>
            </CardEdit>
        </div>
    )
}

export default CreatePage
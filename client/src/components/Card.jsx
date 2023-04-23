import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';


const PlayerCard = (props) => {

    const DeletePlayer = (id) => {

        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/player/${id}`).then(() => {
            window.location.reload();
        })
    }

    return (

        <div>
            <Card border= 'primary' style={{ width: '13rem'  }} >
                <Card.Img variant="top" src="example.png" style={{ width: 'auto'}} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.nationality}</Card.Text>
                    <Card.Text>{props.team}</Card.Text>
                    <Card.Text>overall rating: {props.rating}</Card.Text>
                    <Button style={{marginRight: '0.5rem'}}> <Link className='edit-link' to={`/edit/${props._id}`}>Edit</Link></Button>
                    <Button variant="primary" onClick={() => { DeletePlayer(props._id) }}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PlayerCard;
import Card from 'react-bootstrap/Card';

const CardEdit = (props) => {
    return(
        <Card style={{ width: '21rem' }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
            {props.children}
        </Card.Body>
      </Card>
    )
}
export default CardEdit
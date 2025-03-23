import Card from 'react-bootstrap/Card';


const ContactCard = ({contactObj,func}) => {
    
    const {name,
        email,
        phone,
        message, _id} = contactObj;
  return (
    <div onClick={func}>
         <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{phone}</Card.Subtitle>
                <Card.Text>
                {message ? message.slice(0, 60) + (message.length > 60 ? "..." : "") : "No message"}
                </Card.Text>
                <Card.Link href="#">Read More...</Card.Link>
                
            </Card.Body>
        </Card>
    </div>
  )
}

export default ContactCard
import Card from 'react-bootstrap/Card';


const PostCard = ({postObj,func}) => {
    
    const {title, content, category, _id} = postObj;
  return (
    <div onClick={func}>
         <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                <Card.Text>
                    {content.slice(0,60)}
                </Card.Text>
                <Card.Link href="#">Read More...</Card.Link>
                
            </Card.Body>
        </Card>
    </div>
  )
}

export default PostCard
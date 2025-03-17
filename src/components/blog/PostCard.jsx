import Card from 'react-bootstrap/Card';

const PostCard = ({postObj}) => {
    console.log(postObj)
    const {title, content, category, _id} = postObj;
  return (
    <div>
         <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                <Card.Text>
                    {content.slice(0,60)}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    </div>
  )
}

export default PostCard
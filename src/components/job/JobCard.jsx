import Card from 'react-bootstrap/Card';

const JobCard = ({ jobObj, func }) => {

    const styles = {
        card: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "1500px",
            height:"1000px",
            padding: "1rem",
            min: "1rem",
            border: "2px solid blue",
            borderRadius: "16px",
            margin: "18px"
        },
        img: {
            borderRadius: "50%",
            width: "80px",
            height: "80px",
        },
    };

    const { job_title,
        job_description,
        employer_logo,
        employer_name,
        job_id,
        job_apply_link,
        job_posted_at,
        job_employment_type
    } = jobObj;

    return (
        <div onClick={func}>
            <Card style={styles.card}>
                <Card.Img style={styles.img} variant="top" src={employer_logo} />
                <Card.Header>{employer_name}</Card.Header>
                <Card.Body>
                    <Card.Title className="mb-2 text-primary">Position: {job_title}</Card.Title> <br />
                    <Card.Subtitle className="mb-2 text-primary">Job Type: {job_employment_type}</Card.Subtitle> <br />
                    <Card.Text className="mb-2 text-primary">
                        Jod Description:
                    </Card.Text>
                    <Card.Text>
                        {job_description}
                    </Card.Text>
                    <Card.Link href={job_apply_link}>Apply</Card.Link>
                    
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Posted {job_posted_at}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default JobCard
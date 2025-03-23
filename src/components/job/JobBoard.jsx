import { useState } from 'react';
import JobCard from './JobCard';
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const JobBoard = () => {
    const style = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2px"
    };

    const [searching, setSearching] = useState(""); // ✅ Default search term
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();  

    const handleSearch = async () => {
        if (!searching.trim()) {
            alert("Please enter a job title.");
            return;
        }

        setLoading(true);

        const url = `https://jsearch.p.rapidapi.com/search?query=${searching}&page=1&num_pages=1&country=us&date_posted=all`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '146060ec9amshb05cea3e78177e0p1f3d97jsn0d8dad4de5b9',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setJobs(result.data || []);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleViewJob = (postId) => {
        navigate(`/post/${postId}`);
    };

    return (
        <div className='container mt-5'>
            <h1 className='text-primary'>Find Jobs around you</h1>
            <div>
                <input type="text" value={searching} onChange={(e) => setSearching(e.target.value)} />
                <button onClick={handleSearch}>Search</button>

                {loading ? (
                    <Spinner animation="border" variant="primary" />
                ) : (
                    <div style={style}>
                        {jobs.map((item) => (
                            <JobCard key={item.job_id} jobObj={item} func={() => handleViewJob(item.job_id)} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobBoard;

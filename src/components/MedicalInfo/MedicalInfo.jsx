import { useState, useEffect } from 'react';
import './MedicalInfo.css';
import Loader from '../Loader/Loader';

function Card() {
    const [drugs, setDrugs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                let res = await fetch("https://branchlab-exam-backend.onrender.com/api/drug");
                if (res.ok){
                    let data = await res.json();
                    setDrugs(data);
                } else {
                    console.error('Failed to Fetch:', res.statusText)
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) return <Loader />;
    if (error) return <p>Error loading drug info: {error}</p>
    if (!drugs.length) return <p>No drug data found.</p>;

    return (
        <div className='card'>
            <div className='header'>   
                <i className="fa-solid fa-tablets fa-2xl icon"></i>
                <div>
                    <h3>{drugs[0].Name}</h3>
                    <p className='subheader'>{drugs[0].Brand_Name}</p>
                </div>
            </div>
            <div className='card-body'>
                <p><span className='label'>Drug Class</span></p>
                <p className='description'>{drugs[0].Drug_Class}</p>
                <p><span className='label'>NDC</span></p>
                <p className='description'>{drugs[0].NDC}</p>
                <p><span className='label'>Indications</span></p>
                <p className='description'>{drugs[0].Indications}</p>
                <p><span className='label'>Warnings</span></p>
                <p className='description'>{drugs[0].Warnings}</p>
            </div>
        </div>
    )
}
export default Card;
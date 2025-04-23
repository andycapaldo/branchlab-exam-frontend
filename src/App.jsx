import { useState, useEffect } from 'react';
import './App.css'
import MedicalInfo from './components/MedicalInfo/MedicalInfo';
import Error from './components/Error/Error';
import { RotatingLines } from 'react-loader-spinner';

function App() {
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
                    setError('Failed to fetch data: ' + res.status);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            }
        };
        fetchData();
    }, []);


    if (error) {
        return <div className='container'><Error error={error} /></div>;
    }

    if (isLoading && !error) {
        return (
            <div className='container'>
                <RotatingLines strokeColor='#007BFF' />
            </div>
        );
    }

return (
        <div className='container'>
            {drugs.map((drug, index) => (
                    <MedicalInfo key={index} drug={drug} isLoading={isLoading} />
                ))
            }
            {/* For use of obtaining a single drug object via the /api/drug/{drug_name} endpoint */}
            {/* <MedicalInfo drug={drugs} isLoading={isLoading} />  */}
        </div>
    )
}

export default App

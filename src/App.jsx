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
                const response = await fetch("http://127.0.0.1:8000/api/drug");
                if (response.ok){
                    const data = await response.json();
                    setDrugs(data);
                } else {
                    console.error('Failed to Fetch:', response.statusText)
                    setError('Failed to fetch data: ' + response.status);
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


return (
        <div className='container'>
            {error ? (
                <div><Error error={error} /></div>
            ) : isLoading && !error ? (
                <div>
                    <RotatingLines strokeColor='#007BFF' />
                </div>
            ) : (
                drugs.map((drug, index) => (
                    <MedicalInfo key={index} drug={drug} isLoading={isLoading} />
                ))
            )}
            {/* For use of obtaining a single drug object via the /api/drug/{drug_name} endpoint */}
            {/* <MedicalInfo drug={drugs} isLoading={isLoading} />  */}
        </div>
    )
}

export default App

import { useState, useEffect } from 'react';
import './App.css'
import MedicalInfo from './components/MedicalInfo/MedicalInfo';

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
        {drugs && drugs.length > 1 &&
          drugs.map((drug, index) => (
            <MedicalInfo key={index} drug={drug} isLoading={isLoading} error={error} />
          ))
        }
      </div>
  )
}

export default App

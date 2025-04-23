import './MedicalInfo.css';
import Loader from '../Loader/Loader';

function Card(props) {
    const { drug, isLoading } = props;

    if (isLoading) return <Loader />;
    if (!drug) return <p>No drug data found.</p>;

    return (
        <div className='card'>
            <div className='header'>   
                <i className="fa-solid fa-tablets fa-2xl icon"></i>
                <div>
                    <h3>{drug.Name}</h3>
                    <p className='subheader'>{drug.Brand_Name}</p>
                </div>
            </div>
            <div className='card-body'>
                <p><span className='label'>Drug Class</span></p>
                <p className='description'>{drug.Drug_Class}</p>
                <p><span className='label'>NDC</span></p>
                <p className='description'>{drug.NDC}</p>
                <p><span className='label'>Indications</span></p>
                <p className='description'>{drug.Indications}</p>
                <p><span className='label'>Warnings</span></p>
                <p className='description'>{drug.Warnings}</p>
            </div>
        </div>
    )
}
export default Card;
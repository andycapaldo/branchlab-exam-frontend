import './MedicalInfo.css';
import Loader from '../Loader/Loader';

function Card(props) {
    const { drug, isLoading } = props;
    const {name, brand_name, drug_class, ndc, indications, warnings } = drug || {};

    return (
        <>
        {isLoading && <Loader />}
        {!drug && <p>No drug data found.</p>}
        <div className='card'>
            <div className='header'>   
                <i className="fa-solid fa-tablets fa-2xl icon"></i>
                <div>
                    <h3>{name}</h3>
                    <p className='subheader'>{brand_name}</p>
                </div>
            </div>
            <div className='card-body'>
                <p><span className='label'>Drug Class</span></p>
                <p className='description'>{drug_class}</p>
                <p><span className='label'>NDC</span></p>
                <p className='description'>{ndc}</p>
                <p><span className='label'>Indications</span></p>
                <p className='description'>{indications}</p>
                <p><span className='label'>Warnings</span></p>
                <p className='description'>{warnings}</p>
            </div>
        </div>
        </>
    )
}
export default Card;
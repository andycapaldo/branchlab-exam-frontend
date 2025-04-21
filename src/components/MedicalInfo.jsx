

function Card() {
    return (
        <div className='card'>
            <div className='header'>   
                <i className="fa-solid fa-tablets fa-2xl icon"></i>
                <div>
                    <h3>Atorvastatin</h3>
                    <p className='subheader'>Lipitor</p>
                </div>
            </div>
            <div className='card-body'>
                <p><span className='label'>Drug Class</span><br />Statin</p>
                <p><span className='label'>NDC</span><br />0071-0155-23</p>
                <p><span className='label'>Indications</span><br />Hyperlipidemia, prevention of CV events</p>
                <p><span className='label'>Warnings</span><br />May cause liver enzyme abnormalities</p>
            </div>
        </div>
    )
}
export default Card;
import { RotatingLines } from 'react-loader-spinner';
import './Loader.css';

function Loader() {
return (
    <div className='loader-card'>
            <RotatingLines strokeColor='#007BFF' />
    </div>
)
}
export default Loader
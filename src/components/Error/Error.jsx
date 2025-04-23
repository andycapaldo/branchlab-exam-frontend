import './Error.css';

function Error(props) {
    const { error } = props;

    if (!error) return null; // Don't render anything if there's no error

    // Could also add conditional formatting here depending on error
    // status code e.g. if error.status <= 500, color red, else yellow etc.

return (
        <div className='error'>{error}</div>
    )
}
export default Error
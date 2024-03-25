import Spinner from 'react-bootstrap/Spinner';

const Spin = () => {
    return (
        <div style={{ display: "table", margin: "0 auto" }}>
            <Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem" }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Spin;
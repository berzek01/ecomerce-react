import Toast from 'react-bootstrap/Toast';

const Alerta = ({ severity, show, message }) => {
    const dimensions = {
        width: "100%",
        height: "45px",
        fontSize: "16px",
        color: "#fff"
    };
    return (
        <>
            {[
                severity
            ].map((variant, idx) => (
                <Toast
                    className="d-inline-block m-1"
                    style={dimensions}
                    bg={variant.toLowerCase()}
                    key={idx}
                    show={show}
                    delay={3000}
                    animation={true}
                >
                    <Toast.Body className={variant === 'Dark' && 'text-white'}>
                        {message}
                    </Toast.Body>
                </Toast>
            ))}
        </>
    );
}

export default Alerta;
// 'Primary',
// 'Secondary',
// 'Success',
// 'Danger',
// 'Warning',
// 'Info',
// 'Light',
// 'Dark',
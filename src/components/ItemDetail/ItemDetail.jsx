import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Col, Row } from 'react-bootstrap';
import './ItemDetail.css'

const ItemDetail = ({ id, name, description = '', img, price, stock }) => {
    const [showText, setShowText] = useState(false);
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            setIsMobileDevice(isMobile);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const handleShowText = () => {
        setShowText(!showText);
    };

    const newDescription = showText
        ? description
        : description.slice(0, 78) + '...';

    const objItemCount = { id, name, description, price, stock }

    return (
        <Card className='mx-auto card-size' border="dark">
            <Card.Body>
                <Row>
                    {isMobileDevice ?
                        <Col>
                            <Card.Text><span className='stock-custom'>Stock {stock}</span></Card.Text>
                            <Card.Img variant="top" src={img} alt={name} />
                            <Card.Title className='title-custom'>{name}</Card.Title>
                            <Card.Text style={{ color: '#666', fontSize: '16px' }}>
                                {newDescription}
                                <span className='span-item' onClick={handleShowText}> Leer {showText ? 'menos' : 'mas'}</span>
                            </Card.Text>
                            <Card.Text className='price'>S/{price}</Card.Text>
                            <ItemCount {...objItemCount} />
                        </Col> :
                        <>
                            <Col>
                                <Card.Text><span className='stock-custom'>Stock {stock}</span></Card.Text>
                                <Card.Img variant="top" src={img} alt={name} />
                            </Col>
                            <Col>
                                <Card.Title className='title-custom'>{name}</Card.Title>
                                <Card.Text style={{ color: '#666', fontSize: '16px' }}>
                                    {newDescription}
                                    <span className='span-item' onClick={handleShowText}> Leer {showText ? 'menos' : 'mas'}</span>
                                </Card.Text>
                                <Card.Text className='price'>S/{price}</Card.Text>
                                <ItemCount {...objItemCount} />
                            </Col>
                        </>
                    }
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;

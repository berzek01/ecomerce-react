import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ id, name, description, img, price, stock }) => {

    const newDescription = description.slice(0, 78)+'...';

    return (
        <Col>
            <Card className='mx-auto' border="dark" style={{ backgroundColor: '#f0f0f0',width: '18rem', border: '2px solid #ddd'}}>
                <Card.Body>
                    <Card.Text><span className='stock-custom'>Stock {stock}</span></Card.Text>
                    <Card.Img variant="top" src={img} alt={name} />
                    <Card.Title className='title-custom'>{name}</Card.Title>
                    <Card.Text style={{ color: '#666', fontSize: '16px' }}>
                        {newDescription} 
                        <Link to={`/item/${id}`} style={{textDecoration: 'none'}}><span className='span-item'> Leer mas</span></Link>
                    </Card.Text>
                    <Card.Text className='price'>S/{price}</Card.Text>
                    <Card.Text style={{textAlign:'center'}}><Link className='link-custom' to={`/item/${id}`}>ver detalle</Link></Card.Text>
                </Card.Body>
            </Card>
            <br />
        </Col>
    )
}

export default Item;

import { Row } from "react-bootstrap"
import Item from "../Item/Item"

const ItemList = ({products}) => {
    
    return (
        <Row xs={1} md={3} className="g-4">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </Row>
    )
}

export default ItemList
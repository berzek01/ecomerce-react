import { Row } from "react-bootstrap"
import Item from "../Item/Item"
import Titulo from "../General/Titulo"

const ItemList = ({products}) => {
    
    if(products?.length === 0){
        return <p>no hay productos disponibles</p>
    }

    return (
        <>
        <Row xs={1} md={3} className="g-4">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </Row>
        </>
    )
}

export default ItemList
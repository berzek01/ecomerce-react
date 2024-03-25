import { useParams } from "react-router-dom";
import Titulo from "../General/Titulo";
import Spin from "../General/Spin";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../services/firebase/firebase";
import { useAsync } from "../../hooks/useAsync";
import Alerta from "../General/Alerta";
import { useAlert } from "../../contexts/AlertContext";

const ItemListContainer = ({ greeting }) => {
    const { alert, callAlert } = useAlert();
    const { categoryId } = useParams();

    const getProductFromFirestore = () => getProducts(categoryId);
    const { data, error, isLoading } = useAsync(getProductFromFirestore, [categoryId]);

    if(error){
        callAlert();
    }

    return (
        <div>
            <Titulo label={greeting} />
            <Alerta severity={'Danger'} show={alert} message={"Sin data"} />
            { !data ? <Spin/> : <ItemList products={data} />}
        </div>
    )
}

export default ItemListContainer
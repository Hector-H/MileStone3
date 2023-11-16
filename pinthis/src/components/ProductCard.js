import { Link } from "react-router-dom"
import supabase from "../../../backend/config/supabaseClient"

const ProductCard = ({ product, onDelete }) => {

    const handleDelete = async () => {
        const {data, error} = await supabase
        .from('products')
        .delete()
        .eq('id', product.id)
        .select()

        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data)
            onDelete(product.id)
        }
    }

    return ( 
        <div className="product-card">
            <h3>{product.title}</h3>
            <p>{product.dateposted}</p>
            <div className="details">{ product.details}</div>
            <div className="buttons">
                <Link to={'/' + product.id}>
                    <i className="material-icons">edit</i>
                </Link>
                <i className="material-icons" onClick={handleDelete}>delete</i>
            </div>
        </div>
    )
}

export default ProductCard
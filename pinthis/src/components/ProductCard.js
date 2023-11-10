const ProductCard = ({ product }) => {
    return ( 
        <div className="product-card">
            <h3>{product.title}</h3>
            <p>{product.dateposted}</p>
            <div className="details">{ product.details}</div>
        </div>
    )
}

export default ProductCard
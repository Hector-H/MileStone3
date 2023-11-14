import { Component, useEffect, useState } from 'react'
import supabase from '../config/supabaseClient'

// Component
import ProductCard from '../components/ProductCard'


const Home = () => {
    console.log(supabase)
    const [fetchError, setFetchError] = useState(null)
    const [products, setProducts] = useState(null)
    const [orderBy, setOrderBy] = useState('created_at')

    const handleDelete = (id) => {
        setProducts(prevProducts => {
            return prevProducts.filter(pd => pd.id !== id)
        })
    }

    useEffect(() => {
        const fetchProducts = async () => { 
            const { data, error } = await supabase
                .from('products')
                .select()
                .order(orderBy, {ascending: false})  
            if (error) {
                setFetchError('Could not get products')
                setProducts(null)
                console.log(error)
            }
            if (data) {
                setProducts(data)
                setFetchError(null)
            }
        }
    
        fetchProducts()
    }, [orderBy])

    return (
         <div className='products'>
            
                {fetchError && (<p>{fetchError}</p>)}
            {products && (
               <div>
                <div className='order-by'>
                    <p>Order by:</p>
                    <button onClick={() => setOrderBy('created_at')}>Time Created</button>
                    <button onClick={() => setOrderBy('title')}>Title</button>
                    <button onClick={() => setOrderBy('price')}>Price</button>
                    {orderBy}
                </div>
                    <div className='product-grid'>
                        {products.map(product => (
                        <ProductCard key={product.id} product={product} onDelete={handleDelete}/>
                        ))} 
                        </div>
                </div>
            )}
        </div>
    )
}

export default Home
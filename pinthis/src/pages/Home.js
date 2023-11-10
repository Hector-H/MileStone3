import { Component, useEffect, useState } from 'react'
import supabase from '../config/supabaseClient'

// Component
import ProductCard from '../components/ProductCard'


const Home = () => {
    console.log(supabase)
    const [fetchError, setFetchError] = useState(null)
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => { 
            const { data, error } = await supabase
                .from('products')
                .select()  
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
    }, [])

    return (
         <div className='products'>
            
                {fetchError && (<p>{fetchError}</p>)}
            {products && (
               <div>
                    {products.map(product => (
                       <ProductCard key={product.id} product={product}/>
                    ))}
               </div>
            )}
        </div>
    )
}

export default Home
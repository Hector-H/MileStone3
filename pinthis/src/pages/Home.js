import { useEffect, useState } from 'react'
import supabase from '../config/supabaseClient'



const Home = () => {
    const [fetchError, setFetchError] = useState(null)
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => { // Wrap the function with 'async'
            const { data, error } = await supabase
                .from('products')
                .select();
    
            if (error) {
                setFetchError('Could not get Products');
                setProducts(null);
                console.log(error);
            }
            if (data) {
                setProducts(data)
                setFetchError(null)
            }
        }
    
        fetchProducts()
    }, [])

    return (
        <div>
            {fetchError && (<p>{fetchError}</p>)}
            {products && (
                <div className='products'>
                    {products.map(product => (
                        <p>{product.title}</p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home
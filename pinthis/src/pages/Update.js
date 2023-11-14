import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import supabase from "../config/supabaseClient"

const Update = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault() 

        if (!title || !details || !price ) {
            setFormError('Make sure to have all fields completed')
            return
        }
        const { data, error } = await supabase
        .from('products')
        .update({ title, details, price, image})
        .eq('id', id)
        .select()

        if (error) {
            console.log(error)
            setFormError('Make sure to have all fields completed')
        }
        if (data) {
            setFormError(null)
            navigate('/', {replace: true})
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
            .from('products')
            .select()
            .eq('id', id)
            .single()

            if (error) {
                navigate('/', {replace: true })
            }
            if (data) {
                setTitle(data.title)
                setDetails(data.details)
                setPrice(data.price)
                setImage(data.image)
                console.log(data)
            }
        }

        fetchProducts()
    }, [id, navigate])

    return(
        <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="details">Details:</label>
                <textarea 
                    type="text"
                    id="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                />
                
                <label htmlFor="price">Price:</label>
                <input 
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label htmlFor="image">Image:</label>
                <input 
                    type="text"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <button>Update This!</button>

                {formError && <p className="error">{formError}</p>}
            </form>
    )
}
export default Update
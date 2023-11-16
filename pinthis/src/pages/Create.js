import { useState } from "react"
import { useNavigate } from "react-router-dom"
import supabase from "../../../frontend/src/config/supabaseClient"

const Create = () => {
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

        const { data, error} = await supabase
        .from('products')
        .insert([{ title, details, price, image }])
        .select()

        if (error) {
            console.log(error)
            setFormError('Make sure to have all fields completed')
        }
        if (data) {
            console.log(data)
            setFormError(null)
            navigate("/")
        }
    }

    return ( 
        <div className="page create">
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

                <button>pinThis!</button>

                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    )
}

export default Create
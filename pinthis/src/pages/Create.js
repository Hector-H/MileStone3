import { useState } from "react"

const Create = () => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [formError, setFormError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !details || !price || !image ) {
            setFormError('Make sure to have all fields completed')
            return
        }

        console.log(title, details, price, image)
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
import { useParams } from "react-router-dom"


const UpdatePin = () => {
    const { id } = useParams()

    return (
    <div>
        <h2>Update pin - {id}</h2>
    </div>
)} 

export default UpdatePin
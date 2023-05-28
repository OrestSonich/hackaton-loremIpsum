
import "../../stylesheets/modalForm.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import {setAuthToken} from "../../http/setAuthToken";
import {parseJwT} from "../../http/parseJwT";
const ModalForm = (props) => {
    const [name,setName] = useState("")
    const [address, setAddress] = useState("")
    const [category, setCategory] = useState("")
    const [time,setTime] = useState("")
    const [data1, setData] = useState([])

    const user = parseJwT(localStorage.getItem("token"))

    // useEffect(()=> {
    //     axios.get(`https://hackaton-app.herokuapp.com/api/v1/user/${user.sub}`)
    //         .then(async response => {
    //             setAuthToken(localStorage.getItem("token"))
    //             setData(response)
    //         })
    // })
    const handleSubmit = () => {
        const res = {
            category:category,
            projectName:name,
            address:address,
            hours:time
        }
        axios.post(`https://hackaton-app.herokuapp.com/api/v1/projects/create?user_id=${data1.data.id}`,res).then(res => {
            setAuthToken(localStorage.getItem("token"))
        })
        props.onClose()
    }
    if(props.open){
        return(
            <form className="modal__form">
                <label>Назва:</label>
                <input type="text" placeholder="Допомога з автікою" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Місце:</label>
                <input type="text" placeholder="Оперний театр" value={address} onChange={(e) => setAddress(e.target.value)}/>
                <label>Категорія:</label>
                <input type="text" placeholder="Автівка" value={category} onChange={(e) => setCategory(e.target.value)}/>
                <label>Години:</label>
                <input type="number" placeholder="10" value={time} onChange={(e) => setTime(e.target.value)}/>
                <button onClick={() => handleSubmit()}>Створити</button>
            </form>
        )
    }else {
        return null
    }
}
export default ModalForm
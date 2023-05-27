import {useEffect, useState} from "react";
import axios from "axios";
import {parseJwT} from "../http/parseJwT";
import {setAuthToken} from "../http/setAuthToken";

const AuthMain = () => {
    const [data,setData] = useState({});
    const user = parseJwT(localStorage.getItem("token"))
    useEffect(() => {
        // setAuthToken(localStorage.getItem("token"))
        // axios.get(`https://hackaton-app.herokuapp.com/api/v1/user/${user.sub}`)
        //     .then(response => setData(response.data))
        //     .catch(er => console.log(er))
    })
    return(
        <div className="container">

        </div>
    )
}
export default AuthMain;
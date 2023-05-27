import {useState} from "react"
import axios from "axios";

import {setAuthToken} from "../../http/setAuthToken";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e,email,password) => {
        e.preventDefault()
        if(email && password) {
            const loginPayload = {
                email: email,
                password: password
            }
            axios.post("https://hackaton-app.herokuapp.com/api/v1/auth/authenticate",loginPayload)
                .then(response => {
                    const token = response.data.token;

                    localStorage.setItem("token", token);
                    setAuthToken(token)
                    window.location.href = '/'
                }).catch(err => console.log(err))

        }else {
            console.log("Please enter all inputs")
        }
    }
    return(
        <div className="container">
            <h3>Login</h3>
            <form>
                <label>Email:</label>
                <input type="email" placeholder="email@test.ua" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={(e) => handleSubmit(e,email,password)}>Login</button>
            </form>
        </div>
    )
};
export default Login;
import {useState} from "react"
import axios from "axios";
import Logo from '../../img/logo.svg';
import {setAuthToken} from "../../http/setAuthToken";
import "../../stylesheets/auth.scss"
import {Link} from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
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
                    window.location.href = '/menu'
                }).catch(err => console.log(err))

        }else {
            console.log("Please enter all inputs")
        }
    }
    return(
        <div className="container">
            <div className="login">

                <h1> <img src={Logo} alt=""/> UNITED VOLUNTEER FORCE</h1>

                <span>З поверненням!</span>

                <div className="input--field">
                    <input type="email" placeholder="Електронна адреса" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="input--field">
                    <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="choose">
                    <Link to="/login" className="gray">Увійти</Link>
                    <Link to="/register" className="black">Зареєструватися</Link>
                </div>

                <button onClick={(e) => handleSubmit(e)}><span>Увійти</span></button>
            </div>
        </div>
    )
};
export default Login;
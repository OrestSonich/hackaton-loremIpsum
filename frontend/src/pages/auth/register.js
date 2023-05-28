import {useState} from "react"
import axios from "axios";
import {setAuthToken} from "../../http/setAuthToken";
import Logo from "../../img/logo.svg"
import {Link} from "react-router-dom";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email && password1 === password2 && password1 && password2 && firstName && secondName && age) {
            const registerPayload = {
                age: age,
                firstName:firstName,
                lastName:secondName,
                email: email,
                password: password1,
            }
            axios.post("https://hackaton-app.herokuapp.com/api/v1/auth/register",registerPayload)
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
            <div className="login">

                <h1> <img src={Logo} alt=""/> UNITED VOLUNTEER FORCE</h1>

                <span>Реєстрація</span>

                {/*EMAIL*/}
                <div className="input--field">
                    {!email? <input type="text" placeholder="email@gmail.com" style={{borderStyle:"solid",borderWidth:1,borderColor:"#e72641"}} value={email} onChange={(e) => setEmail(e.target.value)}/>:<input type="text" style={{borderStyle:"solid",borderWidth:1,borderColor:"#4ef135"}} placeholder="Ім'я та Прізвище" value={email} onChange={(e) => setEmail(e.target.value)}/>}
                </div>

                {/*NAME*/}
                <div className="input--field">
                    {!firstName? <input type="text" placeholder="Ім'я" style={{borderStyle:"solid",borderWidth:1,borderColor:"#e72641"}} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>:<input type="text" style={{borderStyle:"solid",borderWidth:1,borderColor:"#4ef135"}} placeholder="Ім'я та Прізвище" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>}
                </div>

                <div className="input--field">
                    {!firstName? <input type="text" placeholder="Прізвище" style={{borderStyle:"solid",borderWidth:1,borderColor:"#e72641"}} value={secondName} onChange={(e) => setSecondName(e.target.value)}/>:<input type="text" style={{borderStyle:"solid",borderWidth:1,borderColor:"#4ef135"}} placeholder="Ім'я та Прізвище" value={secondName} onChange={(e) => setSecondName(e.target.value)}/>}
                </div>

                {/*AGE*/}
                <div className="input--field">
                    {!age?<input type="number" style={{borderStyle:"solid",borderWidth:1,borderColor:"#e72641"}} placeholder="Ваш вік" value={age} onChange={(e) => setAge(e.target.value)}/>:<input type="number" style={{borderStyle:"solid",borderWidth:1,borderColor:"#4ef135"}} placeholder="Ваш вік" value={age} onChange={(e) => setAge(e.target.value)}/>}
                </div>

                {/*Password*/}
                <div className="input--field">
                    {!password1 && password1 === password2?<input type="password" style={{borderStyle:"solid",borderWidth:1,borderColor:"#e72641"}} placeholder="*****" value={password1} onChange={(e) => setPassword1(e.target.value)}/>:<input type="password" style={{borderStyle:"solid",borderWidth:1,borderColor:"#4ef135"}} placeholder="******" value={password1} onChange={(e) => setPassword1(e.target.value)}/>}
                </div>

                {/*Password*/}
                <div className="input--field">
                    {!password2 && password2 === password1?<input type="password" style={{borderStyle:"solid",borderWidth:1,borderColor:"#e72641"}} placeholder="*****" value={password2} onChange={(e) => setPassword2(e.target.value)}/>:<input type="password" style={{borderStyle:"solid",borderWidth:1,borderColor:"#4ef135"}} placeholder="******" value={password2} onChange={(e) => setPassword2(e.target.value)}/>}
                </div>

                <div className="choose">
                    <Link to="/login" className="black">Увійти</Link>
                    <Link to="/register" className="gray">Зареєструватися</Link>
                </div>

                <button onClick={(e) => handleSubmit(e)}><span>Зареєструватися</span></button>
            </div>
        </div>
    )
};
export default Register;
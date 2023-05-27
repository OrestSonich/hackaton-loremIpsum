import {useState} from "react"
import axios from "axios";
import {setAuthToken} from "../../http/setAuthToken";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e,email,password1,password2,fistName,secondName,age) => {
        e.preventDefault()
        if(email && password1 === password2 && password1 && password2 && firstName && secondName && age) {
            const registerPayload = {
                age: age,
                firstName:fistName,
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
            <h3>Login</h3>
            <form>
                <label>First Name:</label>
                <input type="text" placeholder="Ivan" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <label>Last Name:</label>
                <input type="text" placeholder="Zlotazec" value={secondName} onChange={(e) => setSecondName(e.target.value)}/>
                <label>Age:</label>
                <input type="text" placeholder="18" value={age} onChange={(e) => setAge(e.target.value)}/>
                <label>Email:</label>
                <input type="email" placeholder="email@test.ua" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type="password" placeholder="******" value={password1} onChange={(e) => setPassword1(e.target.value)}/>
                <label>Confirm Password:</label>
                <input type="password" placeholder="******" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                <button onClick={(e) => handleSubmit(e,email,password1,password2,firstName,secondName,age)}>Login</button>
            </form>
        </div>
    )
};
export default Register;
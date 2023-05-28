import Logo from "../../img/logo.svg"
import * as Avatar from '@radix-ui/react-avatar';
import "../../stylesheets/header.scss"
import {IoMdExit} from "react-icons/io"
import NavigationBar from "./navigationBar";
import {Link} from "react-router-dom"
import axios from "axios";
import {useEffect, useState} from "react";
import {setAuthToken} from "../../http/setAuthToken";
import {parseJwT} from "../../http/parseJwT";
const Header = () => {
    const [data,setData] = useState([])
        const user = parseJwT(localStorage.getItem("token"))
        useEffect(()=> {
            setAuthToken(localStorage.getItem("token"))
            axios.get(`https://hackaton-app.herokuapp.com/api/v1/user/${user.sub}`)
                .then(response => {
                    setData(response.data)
                })
        })
    return(
        <header>
            <div className="containerH">
                <Link to="/">
                    <h2><img src={Logo} alt="Logo"/> U.V.F</h2>
                </Link>
                <NavigationBar/>
                {
                    localStorage.getItem("token")?<div style={{display:"flex", gap:10}}>
                        <Avatar.Root className="AvatarRoot">
                            <Avatar.Image alt="UserName"
                                          className="AvatarImage"
                            />
                            <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                                {/*{data.firstName}{data.data.lastName}*/}
                            </Avatar.Fallback>
                        </Avatar.Root>
                        <button onClick={() => localStorage.removeItem("token")}><IoMdExit/></button>
                    </div>:<div className="auth__form"><Link to="/register">Register</Link>/<Link to="login">Login</Link></div>
                }
            </div>
        </header>
    )
}
export default Header;
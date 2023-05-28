import Logo from "../../img/logo.svg"
import * as Avatar from '@radix-ui/react-avatar';
import "../../stylesheets/header.scss"
import {IoMdExit} from "react-icons/io"
import NavigationBar from "./navigationBar";
import {Link} from "react-router-dom"
import axios from "axios";
const Header = () => {
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
                                          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                            />
                            <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                                CT
                            </Avatar.Fallback>
                        </Avatar.Root>
                        <button onClick={() => delete axios.defaults.headers.common["Authorization"]}><IoMdExit/></button>
                    </div>:<div className="auth__form"><Link to="/register">Register</Link>/<Link to="login">Login</Link></div>
                }
            </div>
        </header>
    )
}
export default Header;
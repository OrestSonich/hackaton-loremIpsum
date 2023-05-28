import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {AiFillHome} from "react-icons/ai"
import "../../stylesheets/navBar.scss"
import {Link} from "react-router-dom"
import {RxDashboard} from "react-icons/rx"
import {AiOutlineUser} from "react-icons/ai"
const NavigationBar = () => {
    return(
        <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.Item style={{marker:"none"}}>
                <Link to="/">
                    <AiFillHome/>
                </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item style={{marker:"none"}}>
                <Link to="/main">
                    <RxDashboard/>
                </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item style={{marker:"none"}}>
                <Link to="/profile">
                    <AiOutlineUser/>
                </Link>
            </NavigationMenu.Item>
        </NavigationMenu.Root>
    )
}
export default NavigationBar
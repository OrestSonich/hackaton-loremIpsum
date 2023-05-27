import {Outlet} from "react-router-dom";
import Header from "./header";
const Layout = () => {
    return(
        <>
            <Header/>
            <Outlet/>
            <footer>Footer</footer>
        </>
    )
}
export default Layout
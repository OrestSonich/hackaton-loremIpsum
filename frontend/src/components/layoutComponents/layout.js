import {Outlet} from "react-router-dom";
import Header from "./header";
const Layout = () => {
    return(
        <>
            <Header/>
            <div style={{width:"100%", display:"flex",justifyContent:"center", minHeight:"100vh"}}>
                <Outlet/>
            </div>
            <footer>Footer</footer>
        </>
    )
}
export default Layout
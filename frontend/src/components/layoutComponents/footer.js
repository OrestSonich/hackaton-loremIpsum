import Logo from "../../img/logo.svg"

const Footer = () => {
    return(
        <footer>
           <div className="container">
               <h1><img src={Logo} alt=""/>UNITED VOLUNTEER FORCE</h1>

               <div className="footer--icons">
                   <img src={facebook} alt=""/>
                   <img src={instagram} alt=""/>
                   <img src={twitter} alt=""/>
               </div>

               <p>Наша електрона пошта: <b>unitedvolunteerforce@gmail.com</b></p>
           </div>
        </footer>
    )
}
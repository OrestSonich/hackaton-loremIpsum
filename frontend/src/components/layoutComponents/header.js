import Logo from "../../img/logo.svg"
import * as Avatar from '@radix-ui/react-avatar';
import "../../stylesheets/header.scss"
const Header = () => {
    return(
        <header>
            <h2><img src={Logo} alt="Logo"/> U.V.F</h2>
            <div>
                <Avatar.Root className="AvatarRoot">
                    <Avatar.Image alt="UserName"
                                  className="AvatarImage"
                                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                    />
                    <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                        CT
                    </Avatar.Fallback>
                </Avatar.Root>
                
            </div>
        </header>
    )
}
export default Header;
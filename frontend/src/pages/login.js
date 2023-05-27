import '../stylesheets/login.css';
import Logo from '../images/logo.svg';
const Login =() => {
	return(
			<div className="container">
				<div className="login">
					<img src="../images/logo.svg" alt=""/>

						<h1> <img src={Logo} alt=""/> UNITED VOLUNTEER FORCE</h1>

						<span>З поверненням!</span>

						<div className="input--field">
							<input type="email" placeholder="Електронна адреса" name="Email"/>
						</div>

						<div className="input--field">
							<input type="password" placeholder="Пароль" name="Password"/>
						</div>

						<div className="choose">
							<a className="gray" href="#">Увійти</a>
							<a className="black" href="register.js">Зареєструватися</a>
						</div>

						<button><span>Увійти</span></button>
				</div>
			</div>
)
}
export default Login
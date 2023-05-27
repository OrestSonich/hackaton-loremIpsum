import '../stylesheets/login.css';
import Logo from '../images/logo.svg';
const Register =() => {
	return(
		<div className="container">
			<div className="login">

				<h1> <img src={Logo} alt=""/> UNITED VOLUNTEER FORCE</h1>

				<span>З поверненням!</span>

				{/*EMAIL*/}
				<div className="input--field">
					<input type="email" placeholder="Електронна адреса" name="Email"/>
				</div>

				{/*NAME*/}
				<div className="input--field">
					<input type="text" placeholder="Ім'я та Прізвище" name="Name"/>
				</div>

				{/*AGE*/}
				<div className="input--field">
					<input type="number" placeholder="Ваш вік" name="Age"/>
				</div>

				{/*Password*/}
				<div className="input--field">
					<input type="password" placeholder="Пароль" name="Password"/>
				</div>

				{/*Password*/}
				<div className="input--field">
					<input type="password" placeholder="Підтвердіть пароль" name="Email"/>
				</div>

				<div className="choose">
					<a className="black" href="/login">Увійти</a>
					<a className="gray" href="#">Зареєструватися</a>
				</div>

				<button><span>Зареєструватися</span></button>
			</div>
		</div>
	)
}
export default Register
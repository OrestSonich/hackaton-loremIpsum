import '../stylesheets/profile.css';
import Logo from "../images/logo.svg";
import home from "../images/home.svg";
import profile from "../images/profile.svg";
import exit from "../images/exit.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
const Profile =() => {
	return(
		<div className="container">
			{/*=====Header=====*/}
			<div className="header">
				<img src={Logo} alt=""/>
				<h1>UNITED VOLUNTEER FORCE</h1>

				<div className="header--icons">
					<img src={home} alt=""/>
					<img src={profile} alt=""/>
					<img src={exit} alt=""/>
				</div>
			</div>

			{/*=====About me=====*/}
			<div className="about--me">
				<div className="box--about"></div>
				<div className="about--info">
					<h2>Петро Валянок</h2>
					<p>Ранг: <b>Старший волонтер</b></p>
				</div>
			</div>

			{/*=====progressAndHours=====*/}
			<div className="progressAndHours">
				<div className="progress">

				</div>

				<div className="hours">

				</div>

			</div>

			{/*=====History=====*/}
			<div className="history">

			</div>

			<div className="footer">

				<h1><img src={Logo} alt=""/>UNITED VOLUNTEER FORCE</h1>

				<div className="footer--icons">
					<img src={facebook} alt=""/>
					<img src={instagram} alt=""/>
					<img src={twitter} alt=""/>
				</div>

				<p>Наша електрона пошта: <b>unitedvolunteerforce@gmail.com</b></p>
			</div>

		</div>
	)
}
export default Profile
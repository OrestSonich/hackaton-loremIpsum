import '../stylesheets/main.css';
import Logo from "../images/logo.svg";
import home from "../images/home.svg";
import profile from "../images/profile.svg";
import exit from "../images/exit.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
const Main =() => {
	return(
		<div className="main__main">
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
			<div className="container__main">
				{/*=====About me=====*/}
				<div className="about--me">
					<h1>Найближчі події:</h1>
				</div>

				{/*=====Events=====*/}
				<div className="events">
					<div className="event--item">

					</div>

					<div className="event--item">

					</div>

					<div className="event--item">

					</div>

					<div className="event--item">

					</div>

					<button><h2>Більше</h2></button>

				</div>


				{/*=====Rank=====*/}
				<div className="rank">

				</div>


				{/*=====Progress=====*/}
				<div className="progress--main">

				</div>


				{/*=====Footer=====*/}
				<footer className="footer__main">

					<h1><img src={Logo} alt=""/>UNITED VOLUNTEER FORCE</h1>

					<div className="footer--icons">
						<img src={facebook} alt=""/>
						<img src={instagram} alt=""/>
						<img src={twitter} alt=""/>
					</div>

					<p>Наша електрона пошта: <b>unitedvolunteerforce@gmail.com</b></p>
				</footer>

			</div>
		</div>
	)
}
export default Main
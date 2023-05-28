import '../stylesheets/profile.css';
import Logo from "../images/logo.svg";
import home from "../images/home.svg";
import profile from "../images/profile.svg";
import exit from "../images/exit.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import petro from "../images/petro.png";
// import {useEffect, useState} from "react";
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// let mobile_btn;
// mobile_btn = undefined;
const Profile =() => {
	// const [nav, setNav] = useState(false);

	return(
		<div className="main">
			{/*className={*/}
			{/*	nav ? {menu, active}.join(' ') : [menu]*/}
			{/*}*/}

			{/*<ul*/}
			{/*	className={*/}
			{/*		nav ? [menu, active].join(' ') : [menu]*/}
			{/*	}*/}
			{/*>*/}
			{/*	<li>*/}
			{/*		<a href='#'>Product</a>*/}
			{/*	</li>*/}
			{/*	<li>*/}
			{/*		<a href='#'>About Us</a>*/}
			{/*	</li>*/}
			{/*	<li>*/}
			{/*		<a href='#'>Customers</a>*/}
			{/*	</li>*/}
			{/*	<li>*/}
			{/*		<a href='#'>Price</a>*/}
			{/*	</li>*/}
			{/*	<li>*/}
			{/*		<a href='#'>Contacts</a>*/}
			{/*	</li>*/}
			{/*</ul>*/}
			{/*<div onClick={() => setNav(!nav)} className={mobile_btn}>*/}
			{/*	{nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}*/}
			{/*</div>*/}

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

			<div className="container__profile">
				{/*=====About me=====*/}
				<div className="about__me">
					<img src={petro} alt=""/>
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
					<div className="history__item">

					</div>

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
		</div>
	)
}
export default Profile
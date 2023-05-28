import "../stylesheets/main.scss"
import Logo from "../img/logo.svg";
import facebook from "../img/fb.svg";
import instagram from "../img/ins.svg";
import twitter from "../img/twit.svg";
const Main = () => {
    return(
        <div className="container" style={{marginTop:350}}>
            <div className="landing">
                <div className="big__logo">
                    <p className="help__big">Допомагайте людям за допомогою:</p>
                    <p className="help__small"><img src={Logo} alt=""/>UNITED VOLUNTEER FORCE</p>
                </div>

                <div className="content">
                    <div className="content__item">
                        <h1>Хто ми?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at cum delectus deserunt doloremque eaque excepturi exercitationem fuga fugiat illo ipsam itaque quaerat quam quidem repellat rerum, totam veniam, vitae.</p>
                    </div>

                    <div className="content__item">
                        <h1>Наша ціль:</h1>
                        <p>Забезпечити зручний і ефективний спосіб вести облік волонтерської діяльності — отримувати звіти та підкреслить важливість внеску волонтерів у суспільство. Ми прагнемо створити зручне та високоефективне середовище для волонтерства, щоб кожен міг бути частиною позитивних змін.</p>
                    </div>

                    <div className="content__item">
                        <h1>Наші Переваги:</h1>
                        <p>Рейтингова система — яка буде мотивувати попрацювати на декілька годин більше та бачити результат за весь час вашої праці.</p>
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
export default Main;
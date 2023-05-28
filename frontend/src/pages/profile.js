import "../stylesheets/profile.scss"
import * as Avatar from "@radix-ui/react-avatar";
import {useEffect, useState} from "react";
import {parseJwT} from "../http/parseJwT";
import {setAuthToken} from "../http/setAuthToken";
import axios from "axios";
const Profile = () => {
    const [data,setData] = useState([])
    const user = parseJwT(localStorage.getItem("token"))
    useEffect(()=> {
        setAuthToken(localStorage.getItem("token"))
        axios.get(`https://hackaton-app.herokuapp.com/api/v1/user/${user.sub}`)
            .then(response => {
                setData(response.data)
            })
    })
    return(
        <div className="container__profile">
            {/*=====About me=====*/}
            <div className="about__me">
                <Avatar.Root className="AvatarRoot">
                    <Avatar.Image alt="UserName"
                                  className="AvatarImage"
                    />
                    <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                        {/*{data.firstName[0]}{data.lastName[0]}*/}
                    </Avatar.Fallback>
                </Avatar.Root>
                <div className="about--info">
                    <h2>{data.firstName} {data.lastName}</h2>
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
                {/*{data.map(el => (*/}
                {/*    <div className="history__item">*/}
                {/*        <h1>{el.project}</h1>*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>
        </div>
    )
}
export default Profile
import "../stylesheets/ranks.scss"
// import {useEffect, useState} from "react";
// import axios from "axios";
// import {parseJwT} from "../http/parseJwT";
// import {setAuthToken} from "../http/setAuthToken";


const Ranks = () => {
    // const [data,setData] = useState({})
    // const user = parseJwT(localStorage.getItem("token"))
    // useEffect(()=> {
    //     setAuthToken(localStorage.getItem("token"))
    //     axios.get(`https://hackaton-app.herokuapp.com/api/v1/user/${user.sub}`)
    //         .then(response => {
    //             setData(response)
    //         })
    // })
    return(
        <div className="ranks">
            <h2>Ранг:</h2>
            <div>
                <div className="smth">
                    <div>
                        {/*{!data.data.rangs?"Волонтер-Початківець":data.data.rangs.name}*/}
                        <h3>Волонтер-Початківець</h3>
                        <p>0 \ 100%</p>
                        <div className="progressbar"></div>
                    </div>
                    <p>До наступного рангу: <p className="selected">10 Годин до рангу: </p> <p className="selected">Віддалаений волонтер</p></p>
                </div>
            </div>
        </div>
    )
}
export default Ranks;
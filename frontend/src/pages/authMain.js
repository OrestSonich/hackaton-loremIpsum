import {useEffect, useState} from "react";
import axios from "axios";
import {parseJwT} from "../http/parseJwT";
import {setAuthToken} from "../http/setAuthToken";
import Geocode from "react-geocode"
import {FaMapMarkerAlt} from "react-icons/fa"


import {useJsApiLoader,GoogleMap,Marker} from "@react-google-maps/api"
const AuthMain = () => {
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [data,setData] = useState({});
    const [center, setCenter] = useState({})
    const [projects, setProjects] = useState([])
    const [positions, setPositions] = useState([])

    const user = parseJwT(localStorage.getItem("token"))
    Geocode.setLanguage("ua");
    Geocode.setRegion("ua");
    Geocode.setApiKey("AIzaSyDYhZzFtrirauW-wAN_bSFuIrLuUBmBoRk");
    useEffect(() => {
        setAuthToken(localStorage.getItem("token"))
        // axios.get(`https://hackaton-app.herokuapp.com/api/v1/user/${user.sub}`)
        //     .then(response => setData(response.data))
        //     .catch(er => console.log(er))
        Geocode.fromAddress("Львів").then(
            (response) => {
                setCenter(response.results[0].geometry.location)
            },
        )
        axios.get(`https://hackaton-app.herokuapp.com/api/v1/projects/all`)
            .then(response => {
                setProjects(response.data)
                response.data.forEach(el => {
                    Geocode.fromAddress(el.address).then(
                        (response) => {
                            setPositions(oldArray => [...oldArray, response.results[0].geometry.location])
                        },
                    )
                })
            })
            .catch(err => console.log(err))

    },[...positions])
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey:"AIzaSyDYhZzFtrirauW-wAN_bSFuIrLuUBmBoRk"
    })
    if(!isLoaded) {
        return <h1>No map</h1>
    }

    return(
        <div className="container">
            <div style={{width:"100%"}}>
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{position:"absolute", width:"100%",height:"100%", top:0, left: 0}}
                    options={{
                        zoomControl: true,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    onLoad={map => setMap(map)}
                >
                    {positions.map((el,id) =>
                        <Marker
                            position={el}
                            key={id++}
                        />)}
                </GoogleMap>
            </div>
        </div>
    )
}
export default AuthMain;
import {useEffect, useState} from "react";
import axios from "axios";
import {parseJwT} from "../http/parseJwT";
import {setAuthToken} from "../http/setAuthToken";
import Geocode from "react-geocode"
import MarkerModalForm from "../components/mapComponent/markerModalForm";

import "../stylesheets/addButton.scss"

import {useJsApiLoader,GoogleMap,Marker} from "@react-google-maps/api"
import ModalForm from "../components/mapComponent/modalForm";
import {MdPlaylistAddCircle} from "react-icons/md";
const AuthMain = () => {
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [data,setData] = useState({});
    const [center, setCenter] = useState({})
    const [projects, setProjects] = useState([])
    const [open,setOpen] = useState(false)
    const [markerOpen, setMarkerOpen] = useState(false)
    const [chosenOne, setChosenOne] = useState({})

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
                projects.map(el => {
                    Geocode.fromAddress(el.address).then(
                        (response) => {
                            setProjects({...el,...response})
                        }
                    )
                })

            })
            .catch(err => console.log(err))

    },[])
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey:"AIzaSyDYhZzFtrirauW-wAN_bSFuIrLuUBmBoRk"
    })
    if(!isLoaded) {
        return <h1>No map</h1>
    }
    console.log(projects)
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
                    {projects.map((el,id) =>
                        <Marker
                            position={el.location}
                            key={id++}
                            onClick={() => {
                                console.log(el)
                                setChosenOne(el)
                                setMarkerOpen(true)
                            }}
                        />)}
                </GoogleMap>
            </div>
            <button className="add__button_map" onClick={(e) => {
                e.preventDefault()
                setOpen(true)
            }}>
                <MdPlaylistAddCircle/>
            </button>
            <ModalForm open={open} onClose={() => setOpen(false)}/>
            <MarkerModalForm open={markerOpen} data={chosenOne} onClose={() =>setOpen(false)}/>
        </div>
    )
}
export default AuthMain;
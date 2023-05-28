import {useEffect, useState} from "react";
import axios from "axios";
import {setAuthToken} from "../http/setAuthToken";
import Geocode from "react-geocode"
import MarkerModalForm from "../components/mapComponent/markerModalForm";

import "../stylesheets/addButton.scss"
import "../stylesheets/index.css"

import {useJsApiLoader,GoogleMap,Marker} from "@react-google-maps/api"
import ModalForm from "../components/mapComponent/modalForm";
import {MdPlaylistAddCircle} from "react-icons/md";
import Ranks from "../components/ranks";
const AuthMain = () => {
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [center, setCenter] = useState({})
    const [projects, setProjects] = useState([])
    const [open,setOpen] = useState(false)
    const [markerOpen, setMarkerOpen] = useState(false)
    const [chosenOne, setChosenOne] = useState({})

    Geocode.setLanguage("ua");
    Geocode.setRegion("ua");
    Geocode.setApiKey("AIzaSyDYhZzFtrirauW-wAN_bSFuIrLuUBmBoRk");
    useEffect(() => {
        setAuthToken(localStorage.getItem("token"))
        Geocode.fromAddress("Львів").then(
            (response) => {
                setCenter(response.results[0].geometry.location)
            },
        )
        axios.get(`https://hackaton-app.herokuapp.com/api/v1/projects/all`)
            .then(response => {
                 Promise.all(response.data.map(async (el) => {
                    const response = await Geocode.fromAddress(el.address);
                    return { ...el, location: response.results[0].geometry.location }

                })).then((res) => {
                    setProjects(res);
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
    return(
        <div className="container">
            <div style={{width:"100%"}}>
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{position:"absolute", width:"100%",height:"85%", top:0, left: 0}}
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
                                setChosenOne(el)
                                setMarkerOpen(true)
                            }}
                        />)}
                </GoogleMap>
            </div>
            <button className="add__button_map" onClick={(e) => {
                setOpen(true)
            }}>
                <MdPlaylistAddCircle/>
            </button>
            <ModalForm open={open} onClose={() => setOpen(false)}/>
            <MarkerModalForm open={markerOpen} data={chosenOne} onClose={() =>setMarkerOpen(false)}/>
            <Ranks/>
        </div>
    )
}
export default AuthMain;
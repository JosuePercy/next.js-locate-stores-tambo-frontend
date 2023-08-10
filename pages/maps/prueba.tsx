import React, { useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import { Autocomplete, Box, Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, TextField, Typography, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CustomDrawer, { DrawerItem } from '../../components/CustomDrawer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import styles from "./prueba.module.css";
import SearchIcon from '@mui/icons-material/Search';

//import { GeolocationPosition } from 'GeolocationPosition';
interface Coordinates {
    lat: number;
    lng: number;
}
export interface Schedule {
    open: string;
    close: string;
}

interface Tienda {
    id: string;
    name: string;
    direction: string;
    schedule: Schedule
    district: string;
    days_attention: string;
    coordinate: Coordinates;
}


type EpochTimeStamp = number;
interface GeolocationPosition {
    readonly coords: GeolocationCoordinates;
    readonly timestamp: EpochTimeStamp;
}


interface GeolocationCoordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}


// const drawerItems: DrawerItem[] = [
//     { icon: <LocationOnIcon />, text: 'Explorar' },
//     { icon: <AddIcon />, text: 'Añadir Tiendas' },

// ];

export default function Prueba() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    });
    const [mapZoom, setMapZoom] = useState<number>(12);
    const [activeMarker, setActiveMarker] = useState<string | null>("");
    const [currentLocation, setCurrentLocation] = useState<Coordinates | null>(null)
    // const [currentLocation, setCurrentLocation] = useState<Coordinates>({
    //     lat: - 12.041049040832993,
    //     lng: -76.92908208508061
    // })
    const [tiendas, setTiendas] = useState<Tienda[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/tiendas')
            .then(response => response.json())
            .then(data => {
                setTiendas(data)
            })
            .catch(error => console.error('Error de consulta a la api de tiendas:', error));


        let idWatcher = navigator.geolocation.watchPosition(
            onActualizacionDeUbicacion,
            onErrorDeUbicacion,
            opcionesDeSolicitud
        );
        //console.log("idWatcher ==> ", idWatcher);
    }, []);

    const nombreTiendas = tiendas.map((tiendas) => tiendas.name);

    const onActualizacionDeUbicacion = (ubicacion: GeolocationPosition) => {
        const coordenadas = ubicacion.coords;
        let { latitude, longitude } = coordenadas;
        setCurrentLocation({ lat: latitude, lng: longitude })

    }

    const onErrorDeUbicacion = (err: any) => {
        alert("Para poder usar el sistema por favor habilite la ubicación")
        console.log("Error obteniendo ubicación: ", err);
    };

    const opcionesDeSolicitud = {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
    };

    const handleActiveMarker = (marker: string) => {
        // console.log("marker ==> ", marker)
        // console.log("activeMarker ==> ", activeMarker)
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const mapOptions = {
        disableDefaultUI: true
    };


    if (!isLoaded) return <div>Loading...</div>;

    return <>
        <div style={{ display: 'flex' }}>

            <Grid className={styles["display-center-search"]}>
                <Grid container sx={{ display: "block", width: "20%", padding: "15px" }}>
                    <Grid item>
                        <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>Ruta 2</Typography>
                    </Grid>

                    <Grid item>
                        <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>Fecha: 08/08/2023</Typography>
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            sx={{ width: "100%", marginTop: "1rem", zIndex: 10 }}
                            options={nombreTiendas}
                            renderInput={(params) => <TextField {...params} label="Seleccionar tienda" />}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <div style={{ width: "100%" }}>
                {currentLocation !== null ? (
                    // activeMarker ? tiendas.find(tienda => tienda.id === activeMarker)?.coordinate : currentLocation
                    <GoogleMap
                        center={currentLocation}
                        options={mapOptions}
                        zoom={mapZoom}
                        mapContainerClassName="map-container"
                        onClick={() => setActiveMarker(null)}
                    >

                        <MarkerF
                            position={currentLocation}
                            icon={{
                                url: './../../truck_32.png',
                                scaledSize: new window.google.maps.Size(30, 30),
                            }} >
                        </MarkerF>
                        <Grid className={styles["display-block-search"]} sx={{ padding: "0px 10px", borderRadius: "24px" }}>
                            <Grid item  >
                                <Autocomplete
                                    popupIcon={<SearchIcon sx={{ position: 'static !important', transform: 'inherit' }} />}
                                    disablePortal
                                    id="combo-box-demo"
                                    sx={{
                                        width: "100%", marginTop: "1rem", zIndex: 10


                                    }}
                                    options={nombreTiendas}
                                    onChange={(event, newValue) => {
                                        const selectedStore = tiendas.find(tienda => tienda.name === newValue);
                                        setActiveMarker(selectedStore ? selectedStore.id : null);
                                        setMapZoom(16);
                                    }}

                                    renderInput={(params) =>
                                        <TextField
                                            className={styles["zzz"]}
                                            sx={{
                                                backgroundColor:
                                                    "white", borderRadius: "24px"
                                            }}
                                            {...params}
                                            label="Seleccionar tienda"
                                        />}
                                />
                            </Grid>
                        </Grid>
                        {tiendas.map((tienda, index) => {
                            // console.log("tienda.namefasfsaa ==>", tienda.name)
                            //console.log("tienda ==> ", tienda, activeMarker, tienda.id)
                            // console.log(tienda.name, activeMarker, tienda.id)

                            return <MarkerF
                                key={tienda.id}
                                position={tienda.coordinate}
                                onClick={() => handleActiveMarker(tienda.id)}
                                icon={{
                                    url: './../../icon-tambo.png',
                                    scaledSize: new window.google.maps.Size(30, 30),
                                }}
                            >
                                {activeMarker === tienda.id ? (
                                    <InfoWindow onCloseClick={() => setActiveMarker(null)} >
                                        <div>
                                            <ul>
                                                <li><span>Nro de tienda: </span> <strong>{tienda.id}</strong></li>
                                                <li><span>Tienda: </span> <strong>{tienda.name}</strong></li>
                                                <li><span>Dirección: </span> <strong>{tienda.direction}</strong></li>
                                                <li><span>Horario de apertura: </span> <strong>{tienda.schedule.open}</strong></li>
                                                <li><span>Horario de cierre: </span> <strong>{tienda.schedule.close}</strong></li>
                                                <li><span>Distrito: </span> <strong>{tienda.district}</strong></li>
                                                <li><span>Dias de atención: </span> <strong>{tienda.days_attention}</strong></li>
                                            </ul>
                                        </div>
                                    </InfoWindow>
                                ) : null}
                            </MarkerF>
                        })}
                    </GoogleMap>)
                    : (
                        <section>
                            <p>No se habilito el uso del gps</p>
                        </section>
                    )
                }
            </div>
        </div >
        <CustomDrawer />
    </>;


}

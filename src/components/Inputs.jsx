import React from "react"
import { UilSearch , UilLocationPinAlt } from '@iconscout/react-unicons'

export default function Inputs(props) {

    const [city, setCity] = React.useState("")

    const handleSearchClick = ()=>{
        if (city !== ""){
            props.setQuery({q: city})
        }
    }

    const handleLocationClick = () => {
        if (navigator.geolocation){

            navigator.geolocation.getCurrentPosition((position) => {

                let lat = position.coords.latitude
                let lon = position.coords.longitude

                props.setQuery({lat,lon})
            })
        }
    }

    const handleUnitChange = (event)=>{
        const selectedUnit = event.target.name

        if (props.units !== selectedUnit) {

            props.setUnits(selectedUnit)
        }
    }

    return (
        <div className="flex flex-row justify-center my-6">

            <div className="flex flex-row w-3/4 items-center justify-center space-x-5">
            <input type="text" value={city} onChange={(event)=> { setCity(event.target.value) }} placeholder="Search..." className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"  />
                <UilSearch onClick={handleSearchClick} size="25" className="text-white cursor-pointer transition ease-out hover:scale-125" />
                <UilLocationPinAlt onClick={handleLocationClick} size="25" className="text-white cursor-pointer transition ease-out hover:scale-125" />

                <div className="flex flex-row w-1/4 items-center justify-center">
                    <button onClick={handleUnitChange} name="metric" className="text-xl text-white font-light">°C</button>
                    <p className="text-xl text-white mx-1">|</p>
                    <button  onClick={handleUnitChange} name="imperial" className="text-xl text-white font-light">°F</button>
                </div>
            </div>

        </div>
    )
}
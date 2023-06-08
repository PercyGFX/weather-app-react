import React from "react"
import {formatToLocalTime} from "../services/weatherService";

export default function TimeAndLocation(props) {

return (
    <div>
         <div className="flex items-center justify-center my-6">

            <p className="text-white text-xl font-extralight">{formatToLocalTime(props.weather.dt, props.weather.timezone)}</p>

         </div>

        <div className="flex items-center justify-center my-6">
            <p className="text-white text-3xl font-medium">{props.weather.name} {props.weather.country}</p>
        </div>

    </div>
)
}
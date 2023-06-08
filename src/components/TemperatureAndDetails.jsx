import React from "react"
import {formatToLocalTime, iconUrlFromCode} from "../services/weatherService";
import {UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilWindy, UilSun, UilSunset} from "@iconscout/react-unicons";

export default function TemperatureAndDetails(props){

    return(
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>{props.weather.details}</p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3">
                <img alt="" src={iconUrlFromCode(props.weather.icon)} className="w-20" />

                <p className="text-5xl">{props.weather.temp.toFixed()}°</p>

                <div className="flex flex-col space-y-2">

                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1" />
                        Real Feel:
                        <span className="font-medium ml-1">{props.weather.feels_like}°</span>
                    </div>

                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">{props.weather.humidity}%</span>
                    </div>

                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWindy size={18} className="mr-1" />
                        Wind:
                        <span className="font-medium ml-1">{props.weather.speed} km/h</span>
                    </div>


                </div>

            </div>

                <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                    <UilSun />
                    <p className="font-light">Rise: <span className="font-medium ml-1">{formatToLocalTime(props.weather.sunrise, props.weather.timezone, "hh:mm a")}</span></p>
                    <p className="font-light">|</p>

                    <UilSunset />
                    <p className="font-light">set: <span className="font-medium ml-1">{formatToLocalTime(props.weather.sunset, props.weather.timezone, "hh:mm a")}</span></p>
                    <p className="font-light">|</p>

                    <UilArrowUp />
                    <p className="font-light">High: <span className="font-medium ml-1">{props.weather.temp_max.toFixed()}°</span></p>
                    <p className="font-light">|</p>

                    <UilArrowDown />
                    <p className="font-light">Low: <span className="font-medium ml-1">{props.weather.temp_min.toFixed()}°</span></p>

                </div>

        </div>
    )
}
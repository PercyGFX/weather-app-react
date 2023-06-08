import React from "react"
import { UilSearch , UilLocationPinAlt } from '@iconscout/react-unicons'

export default function Inputs() {

    return (
        <div className="flex flex-row justify-center my-6">

            <div className="flex flex-row w-3/4 items-center justify-center space-x-5">
            <input type="text" placeholder="Search..." className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"  />
                <UilSearch size="25" className="text-white cursor-pointer transition ease-out hover:scale-125" />
                <UilLocationPinAlt size="25" className="text-white cursor-pointer transition ease-out hover:scale-125" />

                <div className="flex flex-row w-1/4 items-center justify-center">
                    <button name="metric" className="text-xl text-white font-light">°C</button>
                    <p className="text-xl text-white mx-1">|</p>
                    <button name="metric" className="text-xl text-white font-light">°F</button>
                </div>
            </div>

        </div>
    )
}
import React from "react"

export default function TopButtons(props) {

    const cities = [
        {
            id:1,
            title:'Colombo'
        },
        {
            id:2,
            title:'Kandy'
        },
        {
            id:3,
            title:'Matara'
        },
        {
            id:4,
            title:'New York'
        },
        {
            id:5,
            title:'London'
        }
    ]
    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city)=>(
                <button onClick={()=> props.setQuery({q:city.title})} key={city.id} className="text-white text-lg font-medium">{city.title}</button>
            ))}
        </div>
    )
}
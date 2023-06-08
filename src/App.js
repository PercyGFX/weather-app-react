
import React from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from "./components/TopButtons"
import Inputs from "./components/Inputs"
import TimeAndLocation from "./components/TimeAndLocation"
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast"
import getFormattedWeatherData from "./services/weatherService"



function App() {

    const [query, setQuery] = React.useState({q: 'Colombo'})
    const [units, setUnits] = React.useState('metric')
    const [weather, setWeather] = React.useState(null)

    React.useEffect(()=>{

        const fetchWeather = async () => {

            const message = query.q ? query.q : 'current location'

            toast.info ("Fetching weather for " + message)
          await getFormattedWeatherData( {...query, units})
              .then((data)=>{

                  setWeather(data)
              })

        }

        fetchWeather()

    },[query, units])

    const formatBackground = ()=> {
        if (!weather) {
            return "from-cyan-700 to-blue-700"
        }else {

            const threshold = units === 'metric' ? 20 : 60

            if(weather.temp <= threshold){

                return "from-cyan-700 to-blue-700"
            }else {

                return 'from-yellow-700 to-orange-700'
            }
        }
    }


  return (
      <div
          className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        <TopButtons setQuery={setQuery} />

        <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

        {weather && (
            <div>
        <TimeAndLocation weather={weather}/>
        <TemperatureAndDetails weather={weather} />
        <Forecast title={"Hourly Forecast"} items={weather.hourly} />
        <Forecast title={"Daily Forecast"} items={weather.daily} />
                <ToastContainer autoClose={4000} theme="colored" newestOnTop={true} />
            </div>
)}

    </div>
  );
}

export default App;

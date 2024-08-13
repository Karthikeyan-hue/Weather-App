import { useState } from 'react'
import IconSearch from './icon'
import axios from 'axios'


function App() {

  const [cityName,setCityName] = useState("---");
  const [temp,setTemp] = useState("---°");
  const [climateStatus,setClimateStatus] = useState("---")
  const [changeText,setChangeText] = useState("");

  function textManage(event){
    setChangeText(event.target.value)
  }


  function apidata(){

    const api = axios(`https://api.openweathermap.org/data/2.5/weather?q=${changeText}&appid=3eea2290fec33117656bcbb453dc1a95&units=metric`)

    api.then(
      function(dataapi){
        setCityName(dataapi.data.name);
        setTemp(dataapi.data.main.temp);
        setClimateStatus(dataapi.data.weather[0].description);
      }
    ).catch(
      function(){
        console.log("Data was corrupted");
      }
    )

  }

  return(
    <div className="bg-container">
      <div className="2xl:container mx-auto">
        <div className="h-[90%] mx-auto grid grid-cols-1">
          <div className="flex flex-col justify-center items-center h-[100vh] gap-5">
            <h1 className="text-5xl font-[Poppins] font-medium text-gray-800 py-4">Weather App</h1>
            <div className='flex w-[300px] bg-white rounded-md shadow shadow-lg hover:shadow-black'>
              <input onChange={textManage} type="text" placeholder="Enter a City Name" className=" px-2 py-1 rounded-md outline-none font-medium "/>
              <IconSearch/>
            </div>
            <button className='bg-black text-white rounded-md text-lg px-3 py-1 hover:bg-transparent hover:outline hover:outline-black hover:text-blue-500' onClick={apidata}>Check Weather</button>
            <h1 className="text-5xl font-[Poppins] font-medium text-gray-800 pt-5">{cityName}</h1>
            <div className="flex gap-3">
              <img src="https://ik.imagekit.io/c3q3h7pex/Weather-App/Sun%20and%20Rain.png?updatedAt=1723217478428" alt="Weather-img" className="w-14"/>
              <p className="text-4xl font-[Poppins] font-medium text-blue-500">{temp} °C</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 mt-4 bg-blue-500 w-[400px] h-[70px] rounded-md hover:outline ">
              <img src="https://ik.imagekit.io/c3q3h7pex/Weather-App/Sun.png?updatedAt=1723217478326" alt="Weather-img" className="w-14"/>
              <p className="text-3xl font-[Poppins] font-medium text-white">{climateStatus}...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default App

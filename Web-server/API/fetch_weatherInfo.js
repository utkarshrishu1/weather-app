const fetch=require('node-fetch');
const fetch_weatherInfo=async (cords)=>{
    let res=await fetch('http://api.weatherapi.com/v1/current.json?key=5fd918100d0944458ff82048210708&q='+cords[1]+','+cords[0]);
    res=await res.json();
    const info={
        city:res.location.name,
        state:res.location.region,
        country:res.location.country,
        temp:res.current.temp_c,
        cond:res.current.condition.text
    };
    return info;
}
module.exports=fetch_weatherInfo;
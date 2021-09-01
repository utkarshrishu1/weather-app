const fetch_cords=require('./fetch_cords');
const fetch_weatherInfo=require('./fetch_weatherInfo');
const fetch_Weather=async (location)=>{
    const cords=await fetch_cords(location);
    let weather_info;
    if(cords!=null)
    {
    return weather_info=await fetch_weatherInfo(cords);
    }
    weather_info={
        error:"Enter Valid Location"
    }
    return weather_info;
}
module.exports=fetch_Weather;
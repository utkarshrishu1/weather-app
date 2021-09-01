const fetch=require('node-fetch');
const fetch_cords=async (location)=>{
    let res=await fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?access_token=pk.eyJ1IjoidXRrYXJzaDAzIiwiYSI6ImNrczFpN2VjNTF1aDAydXBzZzVxMWo4aHgifQ.0tzXAZIgv63dowiv6V1bEQ');
    res=await res.json();
    if(res.features[0])
    return res.features[0].center;
    return null;
}
module.exports=fetch_cords;
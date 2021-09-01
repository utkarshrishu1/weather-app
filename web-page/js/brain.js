document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    let val=document.getElementById("location").value;
    if(val==null)
    {

    }
    else
    {
        fetch('http://localhost:3000/weatherInfo?location='+val).then(res=>res.json()).then((res)=>{
            if(res.error){
                document.getElementById("temp-info").innerText=res.error;
            }
            else
            {
                document.getElementById("temp-info").innerText=res.temp+" degrees(c), "+res.cond;
                document.getElementById("address").innerText=res.city+", "+res.state+", "+res.country;
            }
        });
    }
});

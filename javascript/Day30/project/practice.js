
document.querySelector('button').addEventListener('click',()=>{

    const place=document.getElementById('location').value
    
    function updateTemp(data){
        const weather = document.getElementById('weatherInfo')
        weather.innerHTML=`Today's Temperature is ${data.current.temp_c} ° Celcious and feels like {}`

        const other_info = document.getElementById('otherweatherInfo')
        other_info.innerHTML=`Today's weather condition is ${data.current.condition.text}`
    }
    
    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=c2f9306afd9e45d99ba140148250903&q={place}&aqi=yes`)
    prom
    .then((response)=>response.json())
    .then((data)=>updateTemp(data))

})
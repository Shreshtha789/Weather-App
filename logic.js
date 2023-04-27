/* const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f15bfcf15mshba18de3a199a83fp16cac3jsn8b49d410aba6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); */


let weatherHeadingCont = document.getElementById('weatherHeadingCont');

let city = document.getElementById('city');

let search = document.getElementById('search');
let cityName;


let cloud_pct;
let feels_like;
let humidity;
let max_temp;
let min_temp;
let sunrise;
let sunset;
let wind_degrees;
let wind_speed;
let temp;


let temp1 = document.getElementsByClassName('temp')[0];
let temp2 = document.getElementsByClassName('temp')[1];
let min_temp1 = document.getElementsByClassName('min_temp')[0];
let max_temp1 = document.getElementsByClassName('max_temp')[0];
let humidity1 = document.getElementsByClassName('humidity')[0];
let humidity2 = document.getElementsByClassName('humidity')[1];
let wind_degrees1 = document.getElementsByClassName('wind_degrees')[0];
let feels_like1 = document.getElementsByClassName('feels_like')[0];
let wind_speed1 = document.getElementsByClassName('wind_speed')[0];
let wind_speed2 = document.getElementsByClassName('wind_speed')[1];
let sunrise1 = document.getElementsByClassName('sunrise')[0];
let sunset1 = document.getElementsByClassName('sunset')[0];


search.addEventListener("click",function(e){
    e.preventDefault;
    cityName = city.value;
    //console.log(cityName);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4f15bfcf15mshba18de3a199a83fp16cac3jsn8b49d410aba6',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    let a = fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`, options)
        .then(response => response.json())
        .then(response => { 
            console.log(response)
            
            cloud_pct = response.cloud_pct;
            feels_like = response.feels_like;
            humidity = response.humidity;
            max_temp = response.max_temp;
            min_temp = response.min_temp;
            sunrise = response.sunrise;
            sunset = response.sunset;
            temp = response.temp;
            wind_degrees = response.wind_degrees;
            wind_speed = response.wind_speed;

        })
        .catch(err => console.error(err));
    
    weatherHeadingCont.innerHTML = `<h1>Weather for ${cityName}</h1>`;

    a.then(()=>{
        temp1.innerText = `${temp}°C`;
        temp2.innerText = `${temp}°C`;
        min_temp1.innerText = `${min_temp}°C`;
        max_temp1.innerText = `${max_temp}°C`;
        humidity1.innerText = `${humidity}%`;
        humidity2.innerText = `${humidity}`;
        wind_degrees1.innerText = `${wind_degrees}°`;
        feels_like1.innerText = `${feels_like}`;
        wind_speed1.innerText = `${wind_speed}km/hr`;
        wind_speed2.innerText = `${wind_speed}km/hr`;
        sunrise1.innerText = `${sunrise}`;
        sunset1.innerText = `${sunset}`;
    })
});



//logic for below table:
//for delhi:
let cloud_pctt = document.getElementsByClassName('cloud_pctt')[0];
let feels_liket = document.getElementsByClassName('feels_liket')[0];
let humidityt = document.getElementsByClassName('humidityt')[0];
let max_tempt = document.getElementsByClassName('max_tempt')[0];
let min_tempt = document.getElementsByClassName('min_tempt')[0];
let sunriset = document.getElementsByClassName('sunriset')[0];
let sunsett = document.getElementsByClassName('sunsett')[0];
let wind_degreest = document.getElementsByClassName('wind_degreest')[0];
let wind_speedt = document.getElementsByClassName('wind_speedt')[0];
let tempt = document.getElementsByClassName('tempt')[0];


const optionst = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4f15bfcf15mshba18de3a199a83fp16cac3jsn8b49d410aba6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let at = fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi`, optionst)
    .then(response => response.json())
    .then(response => { 
        console.log(response)
        
        cloud_pct = response.cloud_pct;
        feels_like = response.feels_like;
        humidity = response.humidity;
        max_temp = response.max_temp;
        min_temp = response.min_temp;
        sunrise = response.sunrise;
        sunset = response.sunset;
        temp = response.temp;
        wind_degrees = response.wind_degrees;
        wind_speed = response.wind_speed;

    })

    .then(()=>{
        cloud_pctt.innerText = `${cloud_pct}`;
        feels_liket.innerText = `${feels_like}`;
        humidityt.innerText = `${humidity}`;
        max_tempt.innerText = `${max_temp}`;
        min_tempt.innerText = `${min_temp}`;
        sunriset.innerText = `${sunrise}`;
        sunsett.innerText = `${sunset}`;
        tempt.innerText = `${temp}`;
        wind_degreest.innerText = `${wind_degrees}`;
        wind_speedt.innerText = `${wind_speed}`;
    })


//for Bengaluru:
let cloud_pctb = document.getElementsByClassName('cloud_pctt')[1];
let feels_likeb = document.getElementsByClassName('feels_liket')[1];
let humidityb = document.getElementsByClassName('humidityt')[1];
let max_tempb = document.getElementsByClassName('max_tempt')[1];
let min_tempb = document.getElementsByClassName('min_tempt')[1];
let sunriseb = document.getElementsByClassName('sunriset')[1];
let sunsetb = document.getElementsByClassName('sunsett')[1];
let wind_degreesb = document.getElementsByClassName('wind_degreest')[1];
let wind_speedb = document.getElementsByClassName('wind_speedt')[1];
let tempb = document.getElementsByClassName('tempt')[1];


const optionsb = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4f15bfcf15mshba18de3a199a83fp16cac3jsn8b49d410aba6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let ab = fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru`, optionsb)
    .then(response => response.json())
    .then(response => { 
        console.log(response)
        
        cloud_pct = response.cloud_pct;
        feels_like = response.feels_like;
        humidity = response.humidity;
        max_temp = response.max_temp;
        min_temp = response.min_temp;
        sunrise = response.sunrise;
        sunset = response.sunset;
        temp = response.temp;
        wind_degrees = response.wind_degrees;
        wind_speed = response.wind_speed;

    })

    .then(()=>{
        cloud_pctb.innerText = `${cloud_pct}`;
        feels_likeb.innerText = `${feels_like}`;
        humidityb.innerText = `${humidity}`;
        max_tempb.innerText = `${max_temp}`;
        min_tempb.innerText = `${min_temp}`;
        sunriseb.innerText = `${sunrise}`;
        sunsetb.innerText = `${sunset}`;
        tempb.innerText = `${temp}`;
        wind_degreesb.innerText = `${wind_degrees}`;
        wind_speedb.innerText = `${wind_speed}`;
    })


//for Mumbai:
let cloud_pctm = document.getElementsByClassName('cloud_pctt')[2];
let feels_likem = document.getElementsByClassName('feels_liket')[2];
let humiditym = document.getElementsByClassName('humidityt')[2];
let max_tempm = document.getElementsByClassName('max_tempt')[2];
let min_tempm = document.getElementsByClassName('min_tempt')[2];
let sunrisem = document.getElementsByClassName('sunriset')[2];
let sunsetm = document.getElementsByClassName('sunsett')[2];
let wind_degreesm = document.getElementsByClassName('wind_degreest')[2];
let wind_speedm = document.getElementsByClassName('wind_speedt')[2];
let tempm = document.getElementsByClassName('tempt')[2];


const optionsm = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4f15bfcf15mshba18de3a199a83fp16cac3jsn8b49d410aba6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let am = fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai`, optionsm)
    .then(response => response.json())
    .then(response => { 
        console.log(response)
        
        cloud_pct = response.cloud_pct;
        feels_like = response.feels_like;
        humidity = response.humidity;
        max_temp = response.max_temp;
        min_temp = response.min_temp;
        sunrise = response.sunrise;
        sunset = response.sunset;
        temp = response.temp;
        wind_degrees = response.wind_degrees;
        wind_speed = response.wind_speed;

    })

    .then(()=>{
        cloud_pctm.innerText = `${cloud_pct}`;
        feels_likem.innerText = `${feels_like}`;
        humiditym.innerText = `${humidity}`;
        max_tempm.innerText = `${max_temp}`;
        min_tempm.innerText = `${min_temp}`;
        sunrisem.innerText = `${sunrise}`;
        sunsetm.innerText = `${sunset}`;
        tempm.innerText = `${temp}`;
        wind_degreesm.innerText = `${wind_degrees}`;
        wind_speedm.innerText = `${wind_speed}`;
    })


//for Kolkata:
let cloud_pctk = document.getElementsByClassName('cloud_pctt')[3];
let feels_likek = document.getElementsByClassName('feels_liket')[3];
let humidityk = document.getElementsByClassName('humidityt')[3];
let max_tempk = document.getElementsByClassName('max_tempt')[3];
let min_tempk = document.getElementsByClassName('min_tempt')[3];
let sunrisek = document.getElementsByClassName('sunriset')[3];
let sunsetk = document.getElementsByClassName('sunsett')[3];
let wind_degreesk = document.getElementsByClassName('wind_degreest')[3];
let wind_speedk = document.getElementsByClassName('wind_speedt')[3];
let tempk = document.getElementsByClassName('tempt')[3];


const optionsk = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4f15bfcf15mshba18de3a199a83fp16cac3jsn8b49d410aba6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let ak = fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata`, optionsk)
    .then(response => response.json())
    .then(response => { 
        console.log(response)
        
        cloud_pct = response.cloud_pct;
        feels_like = response.feels_like;
        humidity = response.humidity;
        max_temp = response.max_temp;
        min_temp = response.min_temp;
        sunrise = response.sunrise;
        sunset = response.sunset;
        temp = response.temp;
        wind_degrees = response.wind_degrees;
        wind_speed = response.wind_speed;

    })

    .then(()=>{
        cloud_pctk.innerText = `${cloud_pct}`;
        feels_likek.innerText = `${feels_like}`;
        humidityk.innerText = `${humidity}`;
        max_tempk.innerText = `${max_temp}`;
        min_tempk.innerText = `${min_temp}`;
        sunrisek.innerText = `${sunrise}`;
        sunsetk.innerText = `${sunset}`;
        tempk.innerText = `${temp}`;
        wind_degreesk.innerText = `${wind_degrees}`;
        wind_speedk.innerText = `${wind_speed}`;
    })


 //for Dehradun:
let cloud_pctd = document.getElementsByClassName('cloud_pctt')[4];
let feels_liked = document.getElementsByClassName('feels_liket')[4];
let humidityd = document.getElementsByClassName('humidityt')[4];
let max_tempd = document.getElementsByClassName('max_tempt')[4];
let min_tempd = document.getElementsByClassName('min_tempt')[4];
let sunrised = document.getElementsByClassName('sunriset')[4];
let sunsetd = document.getElementsByClassName('sunsett')[4];
let wind_degreesd = document.getElementsByClassName('wind_degreest')[4];
let wind_speedd = document.getElementsByClassName('wind_speedt')[4];
let tempd = document.getElementsByClassName('tempt')[4];


const optionsd = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4f15bfcf15mshba18de3a199a83fp16cac3jsn8b49d410aba6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let ad = fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dehradun`, optionsd)
    .then(response => response.json())
    .then(response => { 
        console.log(response)
        
        cloud_pct = response.cloud_pct;
        feels_like = response.feels_like;
        humidity = response.humidity;
        max_temp = response.max_temp;
        min_temp = response.min_temp;
        sunrise = response.sunrise;
        sunset = response.sunset;
        temp = response.temp;
        wind_degrees = response.wind_degrees;
        wind_speed = response.wind_speed;

    })

    .then(()=>{
        cloud_pctd.innerText = `${cloud_pct}`;
        feels_liked.innerText = `${feels_like}`;
        humidityd.innerText = `${humidity}`;
        max_tempd.innerText = `${max_temp}`;
        min_tempd.innerText = `${min_temp}`;
        sunrised.innerText = `${sunrise}`;
        sunsetd.innerText = `${sunset}`;
        tempd.innerText = `${temp}`;
        wind_degreesd.innerText = `${wind_degrees}`;
        wind_speedd.innerText = `${wind_speed}`;
    })   


//for Pune:
let cloud_pctp = document.getElementsByClassName('cloud_pctt')[5];
let feels_likep = document.getElementsByClassName('feels_liket')[5];
let humidityp = document.getElementsByClassName('humidityt')[5];
let max_tempp = document.getElementsByClassName('max_tempt')[5];
let min_tempp = document.getElementsByClassName('min_tempt')[5];
let sunrisep = document.getElementsByClassName('sunriset')[5];
let sunsetp = document.getElementsByClassName('sunsett')[5];
let wind_degreesp = document.getElementsByClassName('wind_degreest')[5];
let wind_speedp = document.getElementsByClassName('wind_speedt')[5];
let tempp = document.getElementsByClassName('tempt')[5];


const optionsp = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4f15bfcf15mshba18de3a199a83fp16cac3jsn8b49d410aba6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let ap = fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune`, optionsp)
    .then(response => response.json())
    .then(response => { 
        console.log(response)
        
        cloud_pct = response.cloud_pct;
        feels_like = response.feels_like;
        humidity = response.humidity;
        max_temp = response.max_temp;
        min_temp = response.min_temp;
        sunrise = response.sunrise;
        sunset = response.sunset;
        temp = response.temp;
        wind_degrees = response.wind_degrees;
        wind_speed = response.wind_speed;

    })

    .then(()=>{
        cloud_pctp.innerText = `${cloud_pct}`;
        feels_likep.innerText = `${feels_like}`;
        humidityp.innerText = `${humidity}`;
        max_tempp.innerText = `${max_temp}`;
        min_tempp.innerText = `${min_temp}`;
        sunrisep.innerText = `${sunrise}`;
        sunsetp.innerText = `${sunset}`;
        tempp.innerText = `${temp}`;
        wind_degreesp.innerText = `${wind_degrees}`;
        wind_speedp.innerText = `${wind_speed}`;
    })
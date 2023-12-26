fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=dhaka&appid=f64c33734bbb580f3ad0ddd127b40b55`)
  .then((response) => response.json())
  .then((data) => weatherApp(data));



  const weatherApp = (data) =>{
    // console.log(data);

    let temp = Math.round(data.main.temp);
    let name = data.name;
    let humidity = data.main.humidity;
    let speed = data.wind.speed;
    let status = data.weather[0].main;
    console.log(status);
    if(status == "Rain"){
      jQuery("#specific").attr("src", "./images/drizzle.png")
    }else if(status == "Haze"){
      jQuery("#specific").attr("src", "./images/snow.png")

    }else if(status == "Clear"){
      jQuery("#specific").attr("src", "./images/clear.png")

    }else if(status == "Clouds"){
      jQuery("#specific").attr("src", "./images/clouds.png")

    }else if(status == "Drizzle"){
      jQuery("#specific").attr("src", "./images/drizzle.png")

    }else if(status == "Mist"){
      jQuery("#specific").attr("src", "./images/mist.png")

    }
    
    
    jQuery(".temp").text(temp);
    jQuery(".title").text(name);
    jQuery(".ratio").text(humidity + "%");
    jQuery(".ratio2").text(speed + " k/h");
    let deg = `<div class="degre">°C</div>`;
    jQuery(".temp").append(deg);
  }

jQuery(document).on("click", ".icon", (e)=>{

   let myArea= jQuery("input").val();

   fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${myArea}&appid=f64c33734bbb580f3ad0ddd127b40b55`)
  .then((response) => response.json())
  .then((data) => weatherApp(data));
 

  });
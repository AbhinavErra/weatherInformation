/*let inputEle =document.getElementById("location-input");
let tempEle =document.getElementById("temp-value");
let locEle =document.getElementById("location");
let weatherdescEle =document.getElementById('weather-desc');
let btnEle =document.getElementById("btn");
//let icon =document.getElementById("icon")

const apiKey = 'f499205b0e53a4e1ab8793b5cc8cf6fd';
btnEle.onclick = function(){
    if(inputEle.value =="")
    alert("please Enter some location");
else{
    loc = inputEle.value
    url ='https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}';

    fetch(url).then(res => res.json())
    .then(data => {
        console.log(data)
        const{name} = data
        const{feels_like} = data.main
        const{description} =data.weather[0]
        tempEle.innerText =Math.floor(feels_like-273);
        locEle.innerText = name;
        weatherdescEle.innerText=description
    })
    .catch(()=>{
alert("Enter valid location")
    });
    inputEle.value = ""

    fetch(url).then(res=>res.json())
    .then(data=>{
        console.log();

    })

}
};
*/

let inputEle = document.getElementById("location-input");
let tempEle = document.getElementById("temp-value");
let locEle = document.getElementById("location");
let weatherdescEle = document.getElementById("weather-desc");
let btnEle = document.getElementById("btn");

const apiKey = "f499205b0e53a4e1ab8793b5cc8cf6fd";
btnEle.onclick = function () {
  if (inputEle.value === "") {
    alert("Please enter a location.");
  } else {
    const loc = inputEle.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const { name } = data;
        const { main } = data;
        const { description } = data.weather[0];
        const { temp } = main;

        tempEle.innerText = Math.floor(temp - 273.15); // Convert temperature to Celsius.
        locEle.innerText = name;
        weatherdescEle.innerText = description;
      })
      .catch(() => {
        alert("Enter a valid location or check your API key.");
      });

    inputEle.value = "";
  }
};


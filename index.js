console.log("Happy diwali to All");
var APIKey = "4078e32825ab225dede1ce3332e80d62";
async function fetchWeatherDetails() {
  try {
    let city = "goa";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
    );

    const data = await response.json();
    console.log("Weather Data: -> ", data);

    // let newPara = document.createElement("p");
    // newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;
    // document.body.appendChild(newPara);
  } catch (err) {}
}

async function getCurrentLocationWeather() {
  // Check if the browser supports Geolocation
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        // Retrieve latitude and longitude from the position object
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const current = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid=${APIKey}`
        );
        const currentData = await current.json();
        console.log("Weather Data: -> ", currentData);

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        // Make the API call

        // You can now use the latitude and longitude in your application
      },
      (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

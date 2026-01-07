let temperature = parseInt(prompt("What is the temperature in °C"));
let humidity = parseInt(prompt("What is the humidity in %"));

if (temperature >= 20 && temperature <= 25 && humidity < 60) {
  console.log("Perfect day for outdoor activities!");
} else {
  console.log("Maybe stay indoors today.");
}
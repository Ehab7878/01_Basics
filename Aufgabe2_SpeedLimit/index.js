let speed = parseInt(prompt("How fast do you drive in km/h"));
let trafficLevel = parseInt(prompt("From a scale of 1 to 10 how heavy is traffic"));

if (speed > 80 || trafficLevel > 7) {
  console.log("Slow a little bit down for your own saftey");
} else {
  console.log("You are fine if you drive a little bit faster");
}
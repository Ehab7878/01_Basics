let heartRate = parseInt(prompt("Whats your heart rate in bpm"));
let age = parseInt(prompt("How old are you"));

if (age < 30 && heartRate < 100) {
  console.log("Light exercise");
} else if (age >= 30 && heartRate >= 80 && heartRate <= 120) {
  console.log("Moderate exercise");
} else {
  console.log("Visit The Doctor");
}
let age = parseInt(prompt("How old are you"));
let money = parseInt(prompt("How much money do you have in euros"));

if (age >= 18 && money >= 12) {
  console.log("Ticket purchased");
} else if (age >= 18 && money < 12) {
  console.log("Not enough money");
} else {
  console.log("Too young to watch the movie");
}
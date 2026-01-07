let grade = parseInt(prompt("Which grade do you have from 0 to 100"));
let attendance = parseInt(prompt("Which attendance do you have from 0 to 100"));
let extraCredit = parseInt(prompt("Which extraCredit do you have from 0 to 10"));

if (grade > 80 && (attendance > 90 || extraCredit > 5)) {
  console.log("Eligible for advanced exam.");
} else {
  console.log("Not eligible for advanced exam.");
}
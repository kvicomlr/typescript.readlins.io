console.log("ALHAMDULLILLAH. I am now a TypeScript Expert");
var dophinsAveScore = (96 + 108 + 89) / 3;
console.log("Dophins Average Score: ".concat(dophinsAveScore));
var koalasAveScore = (88 + 91 + 110) / 3;
console.log("Koalas Average Score: ".concat(koalasAveScore));
if (dophinsAveScore > koalasAveScore) {
    console.log("Winner: Dophins");
}
else {
    console.log("Winner: Koalas");
}
var reverseString = function (str) {
    // return str.split("").reverse().join("");
    return str
        .split("")
        .slice(0, str.length)
        .forEach(function (e) { return (e = "#"); });
};
console.log(reverseString("1234567890"));
/* const day = "friday";

switch (day as any) {
  case "friday":
    console.log("Attend Fajr prayers in the morning");
    console.log("Take some sleep before Friday prayers");
    break;
  case "Sartuday":
    console.log("In Shaa ALLAH. End my six days fasting.");
    break;
  case "Sunday":
  case "Monday":
    console.log(
      "In Shaa ALLAH complete all my current outstanding projects and start applying for jobs.."
    );
    break;
  default:
    console.log("Not a valid day");
}
 */

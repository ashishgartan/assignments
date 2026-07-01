// let clock = document.getElementById("clock");
// let stopWatch = document.getElementById("stop-watch");
// let i = 0;
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday"];
// setInterval(() => {
//   clock.innerHTML = "";
//   let timeStamp = new Date();
//   let date = document.createElement("h1");
//   date.innerText = timeStamp.toLocaleDateString();
//   let day = document.createElement("h1");
//   day.innerText = days[timeStamp.getDay()];
//   let time = document.createElement("h1");
//   time.innerText = timeStamp.toLocaleTimeString();
//   clock.appendChild(date);
//   clock.appendChild(day);
//   clock.appendChild(time);
//   console.log(timeStamp.toLocaleTimeString());
// }, 1000);
// let startButton = document.createElement("button");
// startButton.innerText = "Start";
// startButton.addEventListener("click", () => {
//   setInterval(() => {
//     let time = new Date().toLocaleTimeString();
//     timeBox.innerText = time;
//   }, 1000);
// });
// let lapButton = document.createElement("button");
// lapButton.innerText = "Lap";
// lapButton.addEventListener("click", () => {
//   lapBox.innerText = lapBox.innerText + "  " + new Date().toLocaleTimeString();
// });
// let timeBox = document.createElement("div");
// let lapBox = document.createElement("div");
// stopWatch.appendChild(startButton);
// stopWatch.appendChild(lapButton);
// stopWatch.appendChild(timeBox);
// stopWatch.appendChild(lapBox);

let x = 35;
let name = "rahul";
let str = `hello this is number : ${x} and this odd number and my name is ${name}`;
console.log(str);

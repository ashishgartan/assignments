let mainFrame = document.getElementById("main-frame");
mainFrame.classList = "border-2 p-2 flex";
let flagBox = document.createElement("div");

function getIndiaFlag() {
  let indiaFlag = document.createElement("div");
  indiaFlag.classList = "border-2 w-31 m-2";

  let orangeStrap = document.createElement("div");
  orangeStrap.classList = "h-10 w-30 bg-orange-500";

  let whiteStrap = document.createElement("div");
  whiteStrap.classList = "h-10 w-30 justify-items-center";

  let greenStrap = document.createElement("div");
  greenStrap.classList = "h-10 w-30 bg-green-500";

  let blueDics = document.createElement("div");
  blueDics.classList = "bg-blue-700 w-10 h-10 rounded-full";
  whiteStrap.appendChild(blueDics);

  indiaFlag.appendChild(orangeStrap);
  indiaFlag.appendChild(whiteStrap);
  indiaFlag.appendChild(greenStrap);
  return indiaFlag;
}
function getJapanFlag() {
  let japanFlag = document.createElement("div");
  japanFlag.classList =
    "border-2 w-31 h-31 justify-items-center content-center m-2";

  let redDics = document.createElement("div");
  redDics.classList = "bg-red-700 w-10 h-10 rounded-full";
  japanFlag.appendChild(redDics);
  return japanFlag;
}
function getBanglaFlag() {
  let banglaFlag = document.createElement("div");
  banglaFlag.classList =
    "border-2 w-31 h-31 justify-items-center content-center m-2 bg-green-800";

  let red2Dics = document.createElement("div");
  red2Dics.classList = "bg-red-700 w-10 h-10 rounded-full";
  banglaFlag.appendChild(red2Dics);
  return banglaFlag;
}
function getRussianFlag() {
  let rusFlag = document.createElement("div");
  rusFlag.classList = "border-2 w-31 m-2";

  let white2Strap = document.createElement("div");
  white2Strap.classList = "h-10 w-30 justify-items-center";

  let blueStrap = document.createElement("div");
  blueStrap.classList = "h-10 w-30 bg-blue-600";

  let redStrap = document.createElement("div");
  redStrap.classList = "h-10 w-30 bg-red-500";

  rusFlag.appendChild(white2Strap);
  rusFlag.appendChild(blueStrap);
  rusFlag.appendChild(redStrap);

  return rusFlag;
}
let countryName = "india";
let inputBar = document.createElement("input");
inputBar.classList = "h-6 bg-green-200";
let searchButton = document.createElement("button");
searchButton.innerText = "Search Country";
searchButton.classList = "bg-green-400 rounded-sm h-6";
flagBox.appendChild(getIndiaFlag());
searchButton.addEventListener("click", () => {
  let country = inputBar.value;
  inputBar.value = "";
  countryName = country;
  flagBox.innerHTML = "";
  if (countryName == "russia") {
    flagBox.appendChild(getRussianFlag());
  } else if (countryName == "bangla") {
    flagBox.appendChild(getBanglaFlag());
  } else if (countryName == "japan") {
    flagBox.appendChild(getJapanFlag());
  } else {
    flagBox.appendChild(getIndiaFlag());
  }
  console.log(country);
});

mainFrame.appendChild(inputBar);
mainFrame.appendChild(searchButton);
mainFrame.appendChild(flagBox);

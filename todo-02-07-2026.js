let headBox = document.getElementById("head-box");
headBox.innerHTML = `
<h1 class="text-9xl text-center">TODO APP</h1>`;

let inputBox = document.getElementById("input-box");
inputBox.classList = "flex flex-col m-5 border rounded-xl p-5";
inputBox.innerHTML = `
    <input type="text" class ="text-7xl m-5 border" placeholder="Enter title" id="title-box">
    <textarea placeholder="Enter Decription" class="text-7xl m-5 border" id="description-box" ></textarea>
    <button class="border bg-blue-500 w-80 h-20 rounded-xl m-5 text-5xl" onclick="addTask()">Add Item</button>
`;
function addTask() {
  let titleBox = document.getElementById("title-box");
  let descriptionBox = document.getElementById("description-box");
  let titleBoxValue = titleBox.value;
  let descriptionBoxValue = descriptionBox.value;
  titleBox.value = "";
  descriptionBox.value = "";
  if (titleBoxValue == "" || descriptionBoxValue == "") {
    Swal.fire({
      title: "Warning",
      text: "Please enter title and description",
    });
    return;
  }
  makeTaskInOutBox(titleBoxValue.trim(), descriptionBoxValue.trim());
}
function makeTaskInOutBox(titleBoxValue, descriptionBoxValue) {
  let newTask = document.createElement("div");
  newTask.classList = "border bg-purple-200 rounded-sm m-2";
  let id = new Date().getTime();
  console.log(id);
  newTask.id = id;
  newTask.innerHTML = `
    <h1 class="text-5xl border m-1">${titleBoxValue}</h1>
    <h2 class="text-3xl border m-1">${descriptionBoxValue}</h2>
    <button class="rounded bg-yellow-200 text-3xl" onclick="deleteTask(${id})">Delete</button>    
    `;
  outputBox.appendChild(newTask);
}
function deleteTask(id) {
  console.log(id);
  let task = document.getElementById(id);
  task.remove();
}
let outputBox = document.getElementById("output-box");
outputBox.innerHTML = `<h1>This is sample</h1>`;
outputBox.classList = "flex flex-col m-5 border rounded-xl p-5";

import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
   
    <h1>Hello Fetch!</h1>
    <ul id="list"></ul>
    
  </div>
`;

// DQ: Client-Server Comms

const url = "https://data.cityofnewyork.us/resource/2j8u-wtju.json";
const data = fetch(url); // fetch returns a Promise

console.log(data);

fetch(url).then(console.log); // Promise result = Response obj

fetch(url)
  .then(function (response) {
    return response.json(); // call .json() to parse response, returns a Promise
  })
  .then(console.log); // Promise result = JSON data

fetch(url)
  .then((res) => res.json())
  .then(console.log); // Promise result = JSON data

function getJSON(fetchUrl) {
  return fetch(fetchUrl).then((res) => res.json()); // returning Promise chain w/ implicit return
}

getJSON(url).then(renderAllPrograms); // this is possible because you can "split" the Promise chain and keep adding .then here

function renderAllPrograms(programArr) {
  console.log("🚀 ~ renderAllPrograms ~ programArr:", programArr);
  programArr.forEach((program) => renderProgram(program));
}

const list = document.querySelector("#list")
console.log("🚀 ~ list:", list)

function renderProgram(programObj) {
  console.log("🚀 ~ renderProgram ~ programObj:", programObj);
  const li = document.createElement('li')
  li.innerText = programObj.program_name
  list.append(li)
}

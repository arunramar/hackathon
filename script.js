headDiv = document.createElement("div");
document.body.appendChild(headDiv);
headDiv.setAttribute("class", "jumbotron text-center");
myDiv = document.createElement("div");
headDiv.appendChild(myDiv);
myDiv.setAttribute("class", "container");
p = document.createElement("p");
myDiv.appendChild(p);
inputLbl = document.createElement("label");
inputLbl.setAttribute("for", "input");
myDiv.appendChild(inputLbl);
inputLbl.innerHTML = "Name: ";
input = document.createElement("input");
myDiv.appendChild(input);
input.setAttribute("id", "textBox");
button = document.createElement("button");
myDiv.appendChild(button);
button.setAttribute("class", "btn btn-primary button");
button.setAttribute("id", "buttonId");
button.innerHTML = "Submit";
bodyDiv = document.createElement("div");
myDiv.appendChild(bodyDiv);
bodyDiv.setAttribute("class", "bodyDiv card card-body");
bodyDiv.setAttribute("id", "mainDiv");
button.addEventListener("click", async function getData() {
  names = document.querySelector("input").value;
  text = `<h1>Country Details for ${names}</h1>
    <p></p>`;
  names = document.querySelector("input").value;
  try {
    const data = await fetch("https://api.nationalize.io?name=" + names);
    const result = await data.json();
    console.log(data);
    console.log(result);
    console.log(result.country[0].country_id);

    text += `<div>
        <p> Country: ${result.country[0].country_id}</p>
        <p> Probability: ${result.country[0].probability}</p>
        <p> Country: ${result.country[1].country_id}</p>
        <p> Probability: ${result.country[1].probability}</p>
        </div>`;

    document.getElementById("mainDiv").innerHTML = text;
    console.log(text);
  } catch (error) {
    console.log(error);
  }
});
document.getElementById("textBox").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.key === 13) {
    document.getElementById("buttonId").click();
  }
});

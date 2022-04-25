// First part of task
let newElement = document.createElement("li")
document.querySelector("ul").appendChild(newElement)

let addedElement = document.querySelectorAll("li")[1];
let addedTextNode = document.createTextNode("Our products");

addedElement.appendChild(addedTextNode);
addedElement.style.fontSize = "36px";
addedElement.style.padding = "24px"

// Second part of task

let addingInnerHtml= document.createTextNode("Example with innerHTML");
let addingTextContent= document.createTextNode("Example with textContent");
let addingAppendChild= document.createTextNode("Example with appendChild");

document.body.innerHTML += `<div>${addingInnerHtml.textContent}</div>`

let addDivElement = document.createElement("div")
addDivElement.textContent += addingTextContent.textContent
document.body.appendChild(addDivElement)


let addNewDivElement = document.createElement("div")
document.body.appendChild(addNewDivElement)
document.querySelectorAll("div")[2].appendChild(addingAppendChild)

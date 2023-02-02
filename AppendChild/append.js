

console.clear()
let myElements = document.createElement("div");
let myAttribut = document.createAttribute("data-cartsen");
let myText = document.createTextNode("my Text");
let myComment = document.createComment(" This is my Comment")


myElements.setAttributeNode(myAttribut);
myElements.setAttribute("data-cartsen", "test-one");
myElements.setAttribute("parent", "main");


myElements.classList = "product";

// Apeend to my Coment
myElements.appendChild(myComment)


//  Append text to Element
//  myElements.textContent = "hallo weli in berlin"; ===> or
myElements.appendChild(myText)

console.log(myElements)

// This Element to my Body
document.body.appendChild(myElements);

console.log("<---------------Product with Title------------->")

let myDiv = document.createElement("div");
let myHead2 = document.createElement("h3");
let myParagraph = document.createElement("p");


let myTexts = document.createTextNode("Product Title");
let myPrar = document.createTextNode("This my Websits and Description");

myDiv.setAttribute("main","parent");

// Add Heading Text
myHead2.appendChild(myTexts);

// Add heading to Main Element
myDiv.appendChild(myHead2)


// Add paragrph Text
myParagraph.appendChild(myPrar);


 // Add paragraph to my heading
 myDiv.appendChild(myParagraph)

document.body.appendChild(myDiv)

console.log("<-------------Seal with childern -------------_>");

let mySection =  document.querySelector("section");

console.log(mySection);

console.log(mySection.children[0]);
// console.log(mySection.childNodes); length bringt es zu mir.
//console.log(mySection.firstChild);  hallo div
 //console.log(mySection.lastChild); ====> hallo
// console.log(mySection.firstElementChild); hallo paragraph
//console.log(mySection.lastElementChild) ===> hallo span 
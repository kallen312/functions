import "./styles.css";

document.getElementById("app").innerHTML = `

`;
function favColor(){
  if (myfavColor === color){
    return ("nice, that's my favorite color too!")
  }
  else {
    return ("oh cool my favorite color is blue.")
  }
}

let myfavColor = "red";

let color = "green";

console.log(favColor);
console.log(color);

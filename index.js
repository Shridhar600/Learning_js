//console.log("hello");

// Variables - Containers to store data values.

var num = 1;
var num2 = 2;

//console.log(num + num2);

// data types;

var str1 = "this is a string";

//Objects

var marks = { ravi: 59, harry: 99, shridhar: 33 };
//console.log(marks)

//booleans

var ar = true;
var ab = false;

//undefined
var ud = undefined;
var ud; // this is also and undefined variable;

// data types
// 1. primitive
// 2. reference
var arr = [1, 2, 3, 4, 5, 65, "string"];
//console.log(arr[4])

//OPERATORS
//functions

function avg(a, b) {
  return (a + b) / 2;
}
var c1 = avg(2, 2);
console.log(c1);

function Clicked() {
  console.log(" button Clickeddd");
}
firstContainer.addEventListener("click", function () {
  console.log(" container clicked");
});

let prevhtml = document.querySelectorAll(".container")[1].innerHTML;
firstContainer.addEventListener("mouseup", function () {
  document.querySelectorAll(".container")[1].innerHTML = "hcshdiahdsas";
});
firstContainer.addEventListener("mousedown", function () {
  document.querySelectorAll(".container")[1].innerHTML =
    "<b>We are holding the container</b>";
});

//-----------Square code-----------
console.group("Squares");

//Perimeter
//Arrow function
const squarePerimeter = (side) => side * 4;

//Area
//Arrow function
const squareArea = (side) => side * side;

console.groupEnd();

//-----Triangle code-------------
console.group("Triangles");

//Perimeter
//Arrow function
const trianglePerimeter = (side1, side, base) => side1 + side + base;

//Area
//Arrow function
const triangleArea = (base, height) => (base * height) / 2;

console.groupEnd();

//-----------Circles code-----------------
console.group("Circle");

//Diameter
//Arrow function
const circleDiameter = (radius) => radius *  2;

//PI
const PI = Math.PI;
console.log("PI is = " + PI);

//Circumference
//Arrow function
const circlePerimeter = (radius) => circleDiameter(radius) * PI;

//Area
//Arrow function
const circleArea = (radius) => PI * radius ** 2;

console.groupEnd();

//Interaction with HTML
function calculatePerimeterSquare() {
  const input = document.getElementById("inputSquare");
  const value = input.value;

  const perimeter = squarePerimeter(value);
  alert(perimeter);
}

function calculateAreaSquare() {

  const input = document.getElementById("inputSquare");
  const value = input.value;

  const area = squareArea(value);
  alert(area);

}

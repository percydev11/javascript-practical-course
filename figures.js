//-----------Square code-----------
console.group("Squares");

//Perimeter
const squarePerimeter = (side) => side * 4;

//Area
const squareArea = (side) => side * side;

//Interaction with HTML
function calculatePerimeterSquare() {
  const input = document.getElementById("InputSquare");

  //Get value of element
  const value = input.value;
  const perimeter = squarePerimeter(value);
  alert("The perimeter the square is = " + perimeter);
}

function calculateAreaSquare() {
  const input = document.getElementById("InputSquare");
  const value = input.value;
  const area = squareArea(value);
  alert("The area the squeare is = " + area);

}

console.groupEnd();

//-----Triangle code-------------
console.group("Triangles");

//Perimeter
const trianglePerimeter = (side1, side2, base) => side1 + side2 + base;

//Area
const triangleArea = (base, height) => (base * height) / 2;

function calculatePerimeterTriangle() {
  const inputSide1 = document.getElementById("InputSide1");
  const valueSide1 = Number(inputSide1.value);
  const inputSide2 = document.getElementById("InputSide2");
  const valueSide2 = Number(inputSide2.value);
  const inputBase = document.getElementById("InputBase");
  const valueBase = Number(inputBase.value);
  const perimeter =  trianglePerimeter(valueSide1, valueSide2, valueBase);
  alert("The perimeter of triangle is = " + perimeter);
  
}

function calculateAreaTriangle() {
  const inputHeight = document.getElementById("InputHeight");
  const valueHeight =  Number(inputHeight.value);
  const inputBase = document.getElementById("InputBase");
  const valueBase = Number(inputBase.value);
  const area = triangleArea(valueHeight, valueBase);
  alert("The area the triangle is = " + area);
}

console.groupEnd();

//-----------Circles code-----------------
console.group("Circle");

//Diameter
const circleDiameter = (radius) => radius *  2;

//PI
const PI = Math.PI;
console.log("PI is = " + PI);

//Circumference
const circlePerimeter = (radius) => circleDiameter(radius) * PI;

//Area
const circleArea = (radius) => PI * radius ** 2;


function calculatePerimeterCircle() {


}

function calculateAreaCircle() {


}

console.groupEnd();



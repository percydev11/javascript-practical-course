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

//----- Equilateral Triangle code-------------
console.group("Triangles");

//Perimeter
const trianglePerimeter = (side1, side2, base) => side1 + side2 + base;

//Area
const triangleArea = (base, height) => (base * height) / 2;

function calculatePerimeterEquilateral() {
  const inputSide1 = document.getElementById("InputSide1");
  const valueSide1 = Number(inputSide1.value);
  const inputSide2 = document.getElementById("InputSide2");
  const valueSide2 = Number(inputSide2.value);
  const inputBase = document.getElementById("InputBase");
  const valueBase = Number(inputBase.value);
  const perimeter = trianglePerimeter(valueSide1, valueSide2, valueBase);
  alert("The perimeter of triangle is = " + perimeter);
}

function calculateAreaEquilateral() {
  const inputHeight = document.getElementById("InputHeight");
  const valueHeight = Number(inputHeight.value);
  const inputBase = document.getElementById("InputBase");
  const valueBase = Number(inputBase.value);
  const area = triangleArea(valueHeight, valueBase);
  alert("The area the triangle is = " + area);
}

console.groupEnd();

//----Isosceles Triangle Code----------------//////

const heightIsoscelesTriangle = (side1, side2, base) =>  {
  if(side1 === side2 && side1 != base) {
    alert("It is a isosceles triangle");
    const height = (Math.sqrt(side1 ** 2 - (base ** 2 / 4)));
    alert("The height of the triangle is " + height);
  } else {
    alert("Not is a isosceles triangle");
  }
}

function calculateHeightIsosceles() {
  const side1 = document.getElementById("InputSide1Isos");
  const valueSide1 = Number(side1.value);
  const side2 = document.getElementById("InputSide2Isos");
  const valueSide2 = Number(side2.value);
  const base = document.getElementById("InputBaseIsos");
  const valueBase = Number(base.value);
  const heightIsosceles = heightIsoscelesTriangle(valueSide1, valueSide2, valueBase);
  
}

//-----------Circles code-----------------
console.group("Circle");

//Diameter
const circleDiameter = (radius) => radius * 2;

//PI
const PI = Math.PI;
console.log("PI is = " + PI);

//Circumference
const circlePerimeter = (radius) => circleDiameter(radius) * PI;

//Area
const circleArea = (radius) => PI * radius ** 2;

function calculatePerimeterCircle() {
  const inputRadius = document.getElementById("InputRadius");
  const valueRadius = inputRadius.value;
  const perimeter = circleDiameter(valueRadius) * PI;
  alert("The perimeter of circle is =  " + perimeter);
}

function calculateAreaCircle() {
  const inputRadius = document.getElementById("InputRadius");
  const valueRadius = inputRadius.value;
  const area = PI * valueRadius ** 2;
  alert("The area of circle is = " + area);
}

console.groupEnd();

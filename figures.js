//-----------Square code-----------
console.group("Squares");

//Perimeter
function squarePerimeter(side) {
  return side * 4;
}

//Arrw function
const squarePerimeter2 = (side) => side * 4;

//Area
function squareArea(side) {
  return side * side;
}

//Arrow function
const squareArea2 = (side) => side * side;

console.groupEnd();

//-----Triangle code-------------
console.group("Triangles");

//Perimeter
function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}

//Arrow function 
const trianglePerimeter2 = (side1, side2, base) => side1 + side2 + base;

//Area
function triangleArea(base, height) {
  return (base * height) / 2;
}

//Arrow function 
const triangleArea2 = (base, height) => (base * height) / 2;

console.groupEnd();

//-----------Circles code-----------------
console.group("Circle");

//Diameter
function circleDiameter(radius) {
  return  radius * 2;
}

//Arrow function 
const circleDiameter2 = (radius) => radius * 2;


//PI
const PI = Math.PI;
console.log("PI is = " + PI);

//Circumference
function circlePerimeter(radius) {
  const diameter = circleDiameter(radius);
  return diameter * PI;
}

//Arrow function
const circlePerimeter2 = (radius) => circleDiameter2(radius) * PI;


//Area
function circleArea(radius) {
  return radius * radius * PI;
}


//Arrow function
const circleArea2 = (radius) => PI * radius ** 2;


console.groupEnd();

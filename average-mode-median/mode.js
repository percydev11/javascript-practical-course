function calculateMode(list) {
  const countList = {};

  list.map(function (element) {
    if (countList[element]) {
      countList[element] += 1;
    } else {
      countList[element] = 1;
    }
  });

  const listArray = Object.entries(countList).sort(function (
    elementA,
    elementB
  ) {
    return elementA[1] - elementB[1];
  });

  const mode = listArray[listArray.length - 1];

  return mode;
}

function mode() {
  const inputNumbers = document.getElementById("InputNumbers");
  const numbersValue = inputNumbers.value;
  // Convert the string to an array
  const arrayValue = Array.from(numbersValue.split(","), Number);
  const resultMode = calculateMode(arrayValue);
  const result = document.getElementById("ResultMode");

  if (resultMode.length > 1) {
    for (let i = 0; i < resultMode.length; i++) {
      result.innerText = "The mode is " + resultMode[0];
    }
  } 
}

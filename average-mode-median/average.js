function calculateAverage(list) {
  const sumList = list.reduce(function (acumulatedValue = 0, newValue) {
    return acumulatedValue + newValue;
  });

  const averageList = sumList / list.length;

  return averageList;
}

const getAverage = (arr) => arr.reduce((a, b) => a + b) / arr.length;

function average() {
  const inputNumbers = document.getElementById("InputNumbers");
  const numbersValue = inputNumbers.value;
  // Convert the string to an array
  const arrayValue = Array.from(numbersValue.split(","), Number);
  const resultAverage = calculateAverage(arrayValue);
  const result = document.getElementById("ResultAverage");
  result.innerText = "The average is = " + resultAverage;
}

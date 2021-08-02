function calculateMedian(list) {
  const orderedList = list.sort(function (elementOne, elementTwo) {
    return elementOne - elementTwo;
  });

  const middleList = parseInt(orderedList.length / 2);

  let median;
  function isPair(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  if (isPair(orderedList.length)) {
    const elementOne = orderedList[middleList - 1];
    const elementTwo = orderedList[middleList];
    const averageElementsOneTwo = calculateAverage([elementOne, elementTwo]);
    median = averageElementsOneTwo;
  } else {
    median = orderedList[middleList];
  }

  return median;
}

function calculateAverage(list) {
  const sumList = list.reduce(function (acumulatedValue = 0, newValue) {
    return acumulatedValue + newValue;
  });
  const averageList = sumList / list.length;
  return averageList;
}

function median() {
  const inputNumbers = document.getElementById("InputNumbers");
  const numbersValue = inputNumbers.value;
  // Convert the string to an array
  const arrayValue = Array.from(numbersValue.split(","), Number);
  const resultMedian = calculateMedian(arrayValue);
  const result = document.getElementById("ResultMedian");
  result.innerText = "The median is " + resultMedian;
    
  
}

function calculateMedian(list) {
  const orderedList = list.sort(function (elementOne, elementTwo) {
    return elementOne - elementTwo;
  });

  const middleList = parseInt(orderedList.length / 2);

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

let median;
function isPair(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calculateAverage(list) {
  const sumList = list.reduce(function (acumulatedValue = 0, newValue) {
    return acumulatedValue + newValue;
  });
  const averageList = sumList / list.length;
  return averageList;
}

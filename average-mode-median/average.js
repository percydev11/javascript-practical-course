function calculateAverage(list) {


  const sumList = list.reduce(function (acumulatedValue = 0, newValue) {
    return acumulatedValue + newValue;
  });

  const averageList = sumList / list.length;

  return averageList;
}

const getAverage = (arr) =>
arr.reduce((a,b) => a + b) / arr.length;

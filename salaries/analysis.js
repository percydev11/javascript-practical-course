// Helpers
function isPair(number) {
  return number % 2 === 0;
}

function calculateAverage(list) {
  const sumList = list.reduce(function (acumulatedValue = 0, newValue) {
    return acumulatedValue + newValue;
  });
  const averageList = sumList / list.length;
  return averageList;
}


// Calculator of median
function salariesMedian(list) {
  const middleList = parseInt(list.length / 2);

  if (isPair(list.length)) {
    const middlePerson1 = list[middleList - 1];
    const middlePerson2 = list[middleList];
    const median = calculateAverage([middlePerson1, middlePerson2]);
    return median;
  } else {
    const middlePerson = list[middleList];
    return middlePerson;
  }
}

// General median
const colSalaries = colombia.map(function (person) {
  return person.salary;
});

const sortedColSalaries = colSalaries.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

const colGeneralMedian = salariesMedian(sortedColSalaries);

// Median of top 10%
const spliceStart = (sortedColSalaries.length * 90) / 100;

const spliceCount = sortedColSalaries.length - spliceStart;

const colSalariesTop10 = sortedColSalaries.splice(spliceStart, spliceCount);

const  colTop10Median = salariesMedian(colSalariesTop10);

console.log({
  colGeneralMedian,
  colTop10Median,
});

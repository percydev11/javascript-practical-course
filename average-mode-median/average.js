function calculateAverage(list) {
  /*let sumList = 0;
  for (let i = 0; i < list.length; i++) {
    sumList += list[i];
  }*/

  const sumList = list.reduce(function (acumulatedValue = 0, newValue) {
    return acumulatedValue + newValue;
  });

  const averageList = sumList / list.length;

  return averageList;
}

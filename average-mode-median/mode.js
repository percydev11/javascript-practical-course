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

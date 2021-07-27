const list1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const countList1 = {};

list1.map(function (element) {
  if (countList1[element]) {
    countList1[element] += 1;
  } else {
    countList1[element] = 1;
  }
});

const list1Array = Object.entries(countList1).sort(function (elementA, elementB) {
    return elementA[1] - elementB[1];
 });

 const mode = list1Array[list1Array.length - 1];



function calculateWeightedAverage(listNotes) {
  const notesWithCredit = listNotes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
  });

  const sumNotesWithCredit = notesWithCredit.reduce(function (
    sum = 0,
    newValue
  ) {
    return sum + newValue;
  });

  const credits = listNotes.map(function (noteObject) {
    return noteObject.credit;
  });

  const sumOfCredits = credits.reduce(function (sum = 0, newValue) {
    return sum + newValue;
  });

  const weightedAverage = sumNotesWithCredit / sumOfCredits;

  return weightedAverage;
}

console.log(
  calculateWeightedAverage(
    notes = [
      {
        course: "Math",
        note: 10,
        credit: 2,
      },
      {
        course: "Science",
        note: 8,
        credit: 5,
      },
      {
        course: "Finance",
        note: 7,
        credit: 5,
      },
    ]
  )
);

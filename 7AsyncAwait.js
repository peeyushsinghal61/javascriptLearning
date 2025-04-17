async function Week() {
  let weekDays = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Monday,Tuesday,Wednesday,Thrusday,Friday"));
  });
  let weekEnds = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Saturday, Sunday"));
  });
  console.log("Fetching Weekdays.... Please wait...");
  let wD = await weekDays;
  console.log("Weekdays are:" + wD);
  console.log("Fetched weekdays....!");
  console.log("Fetching weekends....please wait!");
  let wE = await weekEnds;
  console.log("Weekends are" + wE);
  return [weekDays, weekEnds];
}

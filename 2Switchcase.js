let val = 7;

switch (true) {
  case val > 0 && val <= 5:
    console.log("number is between 1 and 5");
    break;
  case val > 5 && val <= 10:
    console.log("number is between 6 and 10");
    break;
  default:
    console.log("the number is out of range");
}

var day = 8;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("Invalid Day");
}

// Correct these statements so they make sense
// Sunday = 0, Monday = 1, ... Saturday = 6
// re-assign day to any number from 0 - 7 to test the result
let day = 3;
let dayname = `Today`;

// Complete this switch case statement to produce the correct results please.

switch (day) {
  case 3:
    dayname = `Today is Wednesday`;
    break;
  case 1:
    dayname = `Today is Monday`;
    break;

  // Note the code blocks in the next 2 cases: Why?
  case 4: {
    dayname = `Today is Thursday`;
    console.log(dayname);
    break;
  }
  case 5:
    dayname = `Tomorrow it's the weekend!`;
    console.log(message);
    break;
  
  default:
    console.log(`so lets party`);
    break;
  case 2  :
    console.log(`Today is Tuesday`);
    break;
  // write a case here for the weekend (how many days in the weekend?)
  case 6 :
    alert(`It's the Weekend !!`);

}
if (dayname !== 'Today'){
console.log(dayname);
}

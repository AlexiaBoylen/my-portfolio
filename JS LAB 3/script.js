//Step 2: If-else Condition
var number = 5;

console.log("— Step 2: If–Else —");

if (number > 0) {
  console.log(number + " is positive");
} else if (number < 0) {
  console.log(number + " is negative");
} else {
  console.log(number + " is zero");
}

//Step 3: Switch Statement
var day = 3;

console.log("— Step 3: Switch —");

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day — use a number from 1 to 7");
}

//Step 4: Loops
console.log("— Step 4: For Loop —");
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("— Step 4: While Loop —");
var j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

console.log("— Step 4: Do…While Loop —");
var k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

//Step 5: Control Flow with break and continue
console.log("— Step 5: Break at 3 —");
for (var i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Reached " + i + " → breaking the loop");
    break; 
  }
  console.log(i);
}

console.log("— Step 5: Continue (skip 3) —");
for (var i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping " + i);
    continue; 
  }
  console.log(i);
}

//Step 6: Scope and Context
var globalVar = "I'm global!";

function scopeExample() {
  var localVar = "I'm local!";
  console.log("Inside function: globalVar = " + globalVar);
  console.log("Inside function: localVar = " + localVar);
}

scopeExample();

console.log("Outside function: globalVar = " + globalVar);

try {
  console.log("Outside function: localVar = " + localVar);
} catch (error) {
  console.log("Outside function: localVar is not accessible");
}

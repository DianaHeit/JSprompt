let you = parseInt(prompt("Please enter your score", "Your Score"));



let friend = parseInt(prompt("Please enter your friend's score", "Friend's Score"));


let passed = 51;

if (you >= passed && friend >= passed) {
  document.getElementById("display-result").innerHTML =
    "Both of you have passed the test.";
} else if (you >= passed || friend >= passed) {
  document.getElementById("display-result").innerHTML =
    "Only one of you has passed the test.";
  if (you >= passed) {
    document.getElementById("display-result").innerHTML =
      "Only you passed the test - with a score of " + you + "... congrats ! ";
  };

  if (friend >= passed) {
    document.getElementById("display-result").innerHTML =
      "Only your friend passed the test - with a score of " + friend + "... congrats ! ... And too bad for you. ";
  };
} else {
  document.getElementById("display-result").innerHTML =
    "Both of you have failed";
}

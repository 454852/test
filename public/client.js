var handgamepictures = [
  "https://cdn.glitch.com/a8523ae7-6b48-4657-aa8b-dc72cf4663db%2Fpaper.jpg?v=1576854218221",
  "https://cdn.glitch.com/a8523ae7-6b48-4657-aa8b-dc72cf4663db%2Frock.jpg?v=1576854221039",
  "https://cdn.glitch.com/a8523ae7-6b48-4657-aa8b-dc72cf4663db%2Fscissors.jpg?v=1576854223138"
];

var myhand = 0;
var hand = 0;

function handgamepaper() {
  myhand = 1;
  newhand();
  document.getElementById("myhand").src =
    "https://cdn.glitch.com/a8523ae7-6b48-4657-aa8b-dc72cf4663db%2Fpaper.jpg?v=1576854218221";
}
function handgamerock() {
  myhand = 2;
  newhand();
  document.getElementById("myhand").src =
    "https://cdn.glitch.com/a8523ae7-6b48-4657-aa8b-dc72cf4663db%2Frock.jpg?v=1576854221039";
}
function handgamescissors() {
  myhand = 3;
  newhand();
  document.getElementById("myhand").src =
    "https://cdn.glitch.com/a8523ae7-6b48-4657-aa8b-dc72cf4663db%2Fscissors.jpg?v=1576854223138";
}

function newhand() {
  hand = Math.floor(Math.random() * 3);
  document.getElementById("opponent").src = handgamepictures[hand];
  decideWinner();
}

function decideWinner() {
  if (myhand == 1) {
    if (hand == 0) {
      document.getElementById("result").innerHTML = "Tie";
    } else {
      if (hand == 1) {
        document.getElementById("result").innerHTML = "Win";
      } else {
        if (hand == 2) {
          document.getElementById("result").innerHTML = "Loss";
        }
      }
    }
  } else {
    if (myhand == 2) {
      if (hand == 0) {
        document.getElementById("result").innerHTML = "Loss";
      } else {
        if (hand == 1) {
          document.getElementById("result").innerHTML = "Tie";
        } else {
          if (hand == 2) {
            document.getElementById("result").innerHTML = "Win";
          }
        }
      }
    } else {
      if (myhand == 3) {
        if (hand == 0) {
          document.getElementById("result").innerHTML = "Win";
        } else {
          if (hand == 1) {
            document.getElementById("result").innerHTML = "Loss";
          } else {
            if (hand == 2) {
              document.getElementById("result").innerHTML = "Tie";
            }
          }
        }
      }
    }
  }
}

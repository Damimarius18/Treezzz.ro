let add = document.getElementById("increment");
let int = document.getElementById("number");
let flo = document.getElementById("curency");
let long = document.getElementById("highestcurency");
let integer = 0;
timer = 8;
let ans;
let curency = "seeds:" + 0;
let last_curency = "highest number of seeds:" + 0;
add.addEventListener("click", function () {
  integer++;
  int.innerHTML = integer;
  if (integer == 100) {
    ans = prompt("What can you recicle");
    if (ans == "paper" || ans == "plastic" || ans == "cardboard") {
      alert("Congrats! You keep your 100 trees planted");
      curency += 50;
      flo.innerHTML = curency;
      while (timer) {
        integer += 2;
        timer--;
      }
    } else {
      alert("Try again next time when you rach 100");
      integer = 0;
      last_curency = curency;
      long.innerHTML = last_curency;
    }
  }
  if (integer == 500) {
    ans = prompt("What is the most poluating way of traveling?");
    if (ans == "by airline" || ans == "By airline") {
      alert("Congrats! You pass on!");
      curency += 50;
      flo.innerHTML = curency;
      while (timer) {
        integer += 4;
        timer--;
      }
    } else {
      alert("Try again when you reach 500! ");
      integer = 0;
      last_curency = "highest number of" + curency;
      long.innerHTML = last_curency;
    }
  }
  if (integer == 1000) {
    ans = prompt(
      "What color are the containers in which paper and cardboard waste is selectively collected?"
    );
    if (
      ans == "blue and yellow" ||
      ans == "Blue and yellow" ||
      ans == "Blue and Yellow"
    ) {
      alert("Congrats! You keep your 1000 trees planted");
      curency += 50;
      flo.innerHTML = curency;
      while (timer) {
        integer += 6;
        timer--;
      }
    } else {
      alert("Try again next time when you rach 1000");
      integer = 0;
      last_curency = "highest number of" + curency;
      long.innerHTML = last_curency;
    }
  }
  if (integer == 5000) {
    ans = prompt("Every year, World Environment Day is celebrated on:");
    if (ans == "5 june" || ans == "5 June") {
      alert("Congrats! You keep your 5000 trees planted");
      curency += 50;
      flo.innerHTML = curency;
      while (timer) {
        integer += 8;
        timer--;
      }
    } else {
      alert("Try again next time when you rach 5000");
      integer = 0;
      last_curency = "highest number of" + curency;
      long.innerHTML = last_curency;
    }
  }
  if (integer == 10000) {
    ans = prompt("When is Earth Day celebrated?");
    if (ans == "22 April" || ans == "22 April") {
      alert("Congrats! You keep your 10000 trees planted");
      curency += 50;
      flo.innerHTML = curency;
      while (timer) {
        integer += 10;
        timer--;
      }
    } else {
      alert("Try again next time when you rach 10000");
      integer = 0;
      last_curency = "highest number of" + curency;
      long.innerHTML = last_curency;
    }
  }
});

var a = 0;
function openList1() {
  if (a == 1) {
    document.getElementById("misiuni").style.display = "inline";
    return (a = 0);
  } else {
    document.getElementById("misiuni").style.display = "none";
    return (a = 1);
  }
}

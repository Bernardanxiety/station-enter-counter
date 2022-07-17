const count = document.querySelector(".count");
const add = document.querySelector(".add");
const save = document.querySelector(".save");
const entered = document.querySelector(".entered");

let passengerCount = 0;
let day = 1;

function update() {
  passengerCount = 0;
  count.textContent = passengerCount;
}

add.addEventListener("click", function () {
  passengerCount++;
  count.textContent = passengerCount;
});

save.addEventListener("click", function () {
  const p = document.createElement("p");
  p.textContent = `day ${day} - ${passengerCount}`;
  entered.appendChild(p);
  day++;
  update();
});

function reset() {
  count.textContent = passengerCount;
  entered.textContent = "";
}

window.onload = reset();

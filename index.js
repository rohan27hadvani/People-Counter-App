var count = 0;
var countEl = document.getElementById("count-el")
var saveEl = document.getElementById("save-el")

function increment() {
    count += 1;
    countEl.textContent = count;
}

function decrement() {
    if (count >= 1) {
    count -= 1;
    countEl.textContent = count;
    }
    else {
        alert("This Value Cannot Be negative!")
    }
}

function save() {
    var countStr = count + " - "
    saveEl.textContent += countStr;
    countEl.textContent = 0
    count = 0
}
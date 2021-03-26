const source1 = document.getElementById('mathInput1');
const source2 = document.getElementById('mathInput2');

const resultMath1 = document.getElementById('resultMath1');
const resultMath2 = document.getElementById('resultMath2');

const inputHandler1 = function(e) {
  resultMath1.innerHTML = e.target.value;
}

const inputHandler2 = function(e) {
    resultMath2.innerHTML = e.target.value;
}

source1.addEventListener('input', inputHandler1);
source2.addEventListener('input', inputHandler2);

source1.addEventListener('propertychange', inputHandler1);
source2.addEventListener('propertychange', inputHandler2); // for IE8
// Firefox/Edge18-/IE9+ don’t fire on <select><option>
// source.addEventListener('change', inputHandler);
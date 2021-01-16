const size = 8;
let state = {
    sign : 1,
};
const weights = [];

for (let i=0; i<size; i++)
    weights.push(2 ** i);
const bits = new Array(size).fill(0);

function populateWeights(size) {
    for (let i=size-1; i>=0; i--) {
        if (i==size-1)
            document.getElementById("weights").innerHTML +=
            `<div id="signWeight" class='value weightVal sign'>2<sup>${i}</sup></div>`;
        else
            document.getElementById("weights").innerHTML +=
            `<div class='value weightVal'>2<sup>${i}</sup></div>`;
    }
}

function populateBits(bits) {
   for (let i=size-1; i>=0; i--) {
        if (i==size-1)
            document.getElementById("bits").innerHTML +=
            `<div id='bit${i}' class='value bitVal sign'>${bits[i]}</div>`;
        else
            document.getElementById("bits").innerHTML +=
            `<div id='bit${i}' class='value bitVal'>${bits[i]}</div>`;
    }
}

function populateSwitchs(size) {
    for (let i=size-1; i>=0; i--) {
        if (i==size-1)
            /* Add extra  */
            document.getElementById("switchs").innerHTML += `
<div class="checkButton">
  <label class="switch">
    <input type="checkbox" onchange="swapBit(bits, ${i})">
    <span class="slider round"></span>
  </label>
</div>`;
        else
            document.getElementById("switchs").innerHTML += `
<div class="checkButton">
  <label class="switch">
    <input type="checkbox" onchange="swapBit(bits, ${i})">
    <span class="slider round"></span>
  </label>
</div>`;
    }
}

function swapBit(bits, i) {
    bits[i] = (bits[i] + 1) % 2;
    const id = "bit" + String(i);
    document.getElementById(id).innerText = String(bits[i]);
    populateValue(bits, size, state);
}

function populateValue(bits, size, state) {
    const val = getValue(bits, size, state);
    document.getElementById("value").innerText = String(val);
}

function getValue(bits, size, state ) {
    let val = 0;
    for (let i=0; i<size; i++) {
        if (i == size -1)
            val += state.sign * bits[i] * 2**i;
        else
            val += bits[i] * 2**i;
    }
    return val;
}

function handleSwapEncoding() {
    swapEncoding(bits, size, state);
}

function swapEncoding(bits, size, state) {
    state.sign *= -1;
    const newWeight = state.sign > 0 ?
          `2<sup>${size-1}` :
          `-2<sup>${size-1}`;
    document.getElementById("signWeight").innerHTML =
        newWeight;
    /* Change color */
    const color = state.sign > 0 ?
          "initial" :
          "red" ;
    let signElements = document.getElementsByClassName('sign');
    for (let signElement of signElements) 
        signElement.style.color = color;


    /* Update value */
    populateValue(bits, size, state);
}

function initializeEncoding() {
    document.getElementById('encodeCheck').checked = false;
}

populateWeights(size);
populateBits(bits);
populateSwitchs(size);
populateValue(bits, size, state);
initializeEncoding();


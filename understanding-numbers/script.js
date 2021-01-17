const state = {
    sign : 1,
    size : 8,
    bits : [],
};

function populate(state) {
    state.bits = new Array(state.size).fill(0);
    populateWeights(state);
    populateBits(state);
    populateSwitchs(state);
    populateValue(state);
    initializeEncoding();
}

function setSize(s) {
    state.size = Number(s);
    state.sign = 1;
    unpopulate();
    populate(state);
}

function unpopulate() {
    document.getElementById("weights").innerHTML = "";
    document.getElementById("bits").innerHTML = "";
    document.getElementById("switchs").innerHTML = "";
}

function populateWeights(state) {
    for (let i=state.size-1; i>=0; i--) {
        if (i==state.size-1)
            document.getElementById("weights").innerHTML +=
            `<div id="signWeight" class='value weightVal sign'>2<sup>${i}</sup></div>`;
        else
            document.getElementById("weights").innerHTML +=
            `<div class='value weightVal'>2<sup>${i}</sup></div>`;
        if (i % 4 == 0)
            document.getElementById("weights").innerHTML +=
            `<div class="separator"></div>`;
    }
}

function populateBits(state) {
    for (let i=state.size-1; i>=0; i--) {
        if (i==state.size-1)
            document.getElementById("bits").innerHTML +=
            `<div id='bit${i}' class='value bitVal sign'>${state.bits[i]}</div>`;
        else
            document.getElementById("bits").innerHTML +=
            `<div id='bit${i}' class='value bitVal'>${state.bits[i]}</div>`;
        if (i % 4 == 0)
            document.getElementById("bits").innerHTML +=
            `<div class="separator"></div>`;
    }
}

function populateSwitchs(state) {
    for (let i=state.size-1; i>=0; i--) {
        if (i==state.size-1)
            /* Add extra id to sign input swicth */
            document.getElementById("switchs").innerHTML += `
<div class="checkButton">
  <label class="switch">
    <input id="signInput" type="checkbox" onchange="swapBit(state, ${i})">
    <span class="slider round"></span>
  </label>
</div>`;
        else
            document.getElementById("switchs").innerHTML += `
<div class="checkButton">
  <label class="switch">
    <input type="checkbox" onchange="swapBit(state, ${i})">
    <span class="slider round"></span>
  </label>
</div>`;
        if (i % 4 == 0)
            document.getElementById("switchs").innerHTML +=
            `<div class="separator"></div>`;
    }
}

function swapBit(state, i) {
    state.bits[i] = (state.bits[i] + 1) % 2;
    const id = "bit" + String(i);
    document.getElementById(id).innerText = String(state.bits[i]);
    populateValue(state);
}

function populateValue(state) {
    const val = getValue(state);
    document.getElementById("value").innerText = String(val);
}

function getValue(state) {
    let val = 0;
    for (let i=0; i<state.size; i++) {
        if (i == state.size -1)
            val += state.sign * state.bits[i] * 2**i;
        else
            val += state.bits[i] * 2**i;
    }
    return val;
}

function handleSwapEncoding() {
    swapEncoding(state);
}

function swapEncoding(state) {
    state.sign *= -1;
    const newWeight = state.sign > 0 ?
          `2<sup>${state.size-1}` :
          `-2<sup>${state.size-1}`;
    document.getElementById("signWeight").innerHTML =
        newWeight;
    /* Change color */
    const color = state.sign > 0 ?
          "initial" :
          "red" ;
    const signElements = document.getElementsByClassName('sign');
    for (let signElement of signElements) 
        signElement.style.color = color;
    /* Change slider color */
    if (state.sign > 0)
        document.getElementById("signInput").removeAttribute("sign");
    else
        document.getElementById("signInput").setAttribute('sign', '1');

    /* Update value */
    populateValue(state);
}

function initializeEncoding() {
    document.getElementById('encodeCheck').checked = false;
}

populate(state);


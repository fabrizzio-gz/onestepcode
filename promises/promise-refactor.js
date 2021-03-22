function fetchValue() {
  let val;
  if (Math.random() > 0.5) val = (Math.random() * 10).toFixed(0);

  return new Promise(function (resolve, reject) {
    if (val) return resolve(val);
    else return reject(`Invalid value! Response was ${val}`);
  });
}

function successCallback(val) {
  console.log(`Succesfully retrieved ${val}!`);
}

function failureCallback(err) {
  console.error(err);
}

fetchValue().then(successCallback, failureCallback);
fetchValue().then(successCallback).catch(failureCallback);
// console.log("First!");

/* Extra callbacks */

function checkParity(val) {
  if (val % 2 == 0) return val;
  throw `Value ${val} isn't even!`;
}

function divisibleByThree(val, resolve, reject) {
  if (val % 3 == 0) return val;
  throw `Value ${val} isn't divisible by 3!`;
}

fetchValue()
  .then((value) => {
    console.log(`Succesfully retrieved ${value}!`);
    return checkParity(value);
  })
  .then((evenValue) => {
    console.log(`Value ${evenValue} is even!`);
    return divisibleByThree(evenValue);
  })
  .then((finalValue) => console.log(`Value ${finalValue} is divisible by 3!`))
  .catch(failureCallback);

/* wrong */
let value = fetchValue()
  .then(checkParity)
  .then(divisibleByThree)
  .catch(failureCallback);

/* correct */
let value;
fetchValue()
  .then(checkParity)
  .then(divisibleByThree)
  .then((finalValue) => (value = finalValue))
  .catch(failureCallback);

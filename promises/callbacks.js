function fetchValue(resolve, reject) {
  let val;
  if (Math.random() > 0.5) val = (Math.random() * 10).toFixed(0);

  if (val) resolve(val);
  else reject(val);
}

function failureCallback(val) {
  console.error(`Invalid value! Response was ${val}`);
}

function successCallback(val) {
  console.log(`Succesfully retrieved ${val}!`);
}

/* Simple callback */
fetchValue(successCallback, failureCallback);

/* Extra callbacks */

function checkParity(val, resolve, reject) {
  if (val % 2 == 0) resolve(val);
  else reject(val);
}

function divisibleByThree(val, resolve, reject) {
  if (val % 3 == 0) resolve(val);
  else reject(val);
}

function failureCallbackParity(val) {
  console.error("Value ", val, " isn't even!");
}

function failureCallbackDiv3(val) {
  console.error("Value ", val, " isn't divisible by 3!");
}

function execute() {
  fetchValue(function (value) {
    console.log(`Succesfully retrieved ${value}!`);
    checkParity(
      value,
      function (evenValue) {
        console.log(`Value ${evenValue} is even!`);
        divisibleByThree(
          evenValue,
          function (finalValue) {
            console.log(`Value ${finalValue} is divisible by 3!`);
          },
          failureCallbackDiv3
        );
      },
      failureCallbackParity
    );
  }, failureCallback);
}

execute();

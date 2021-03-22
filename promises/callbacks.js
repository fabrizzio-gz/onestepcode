function getNumber(resolve, reject) {
  const val = (Math.random() * 10).toFixed(0);
  if (val > 5) resolve(val);
  else reject(val);
}

function checkParity(val, resolve, reject) {
  if (val % 2 == 0) resolve(val);
  else reject(val);
}

function divisibleByThree(val, resolve, reject) {
  if (val % 3 == 0) resolve(val);
  else reject(val);
}

function failureCallback(val) {
  console.error("Value ", val, " isn't large enough!");
}

function execute() {
  getNumber(
    function (largeValue) {
      console.log(`Value ${largeValue} is large enough!`);
      checkParity(
        largeValue,
        function (evenValue) {
          console.log(`Value ${evenValue} is odd!`);
          divisibleByThree(
            evenValue,
            function (finalValue) {
              console.log(`Value ${finalValue} is divisible by 3!`);
            },
            function failureCallbackDiv3(val) {
              console.error("Value ", val, " isn't divisible by 3!");
            }
          );
        },
        function failureCallbackParity(val) {
          console.error("Value ", val, " isn't odd!");
        }
      );
    },
    function failureCallback(val) {
      console.error("Value ", val, " isn't large enough!");
    }
  );
}

execute();

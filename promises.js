const returnsAPromise = function (value) {
  return new Promise((resolve, reject) => {
    if (typeof value === 'string') {
      resolve(value + ' is a string');
    } else {
      reject("Is not a string");
    }
  });
};


//ES5
returnsAPromise("test").then((response) => {
  console.log(response);

  // returnsAPromise(response).then((response) => {
  //   console.log(response);
  // }).catch(console.error);

}).catch(console.error);
returnsAPromise(1).then((response) => {
  console.log(response);
}).catch(console.error);
console.log('Stefan');

//ES6
async function checkPromise(str) {
  try {
    const response = await returnsAPromise(str);
    // const response2 = await returnsAPromise(response);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

checkPromise("TEST");
checkPromise(3);

const obj = [{
  name: "Ion",
  math: 4,
  science: 10
},
{
  name: "Ana",
  math: 8,
  science: 4
},
{
  name: "Alex",
  math: 7,
  science: 1
}];

const arrNumber = [1, 2, 4]; // array primitive 
const cloneArrNumber = Array.from(arrNumber);

// for (let i = 0; i < obj.length; i++) {
//   obj[i].math += 1;
// };

// const newCloneObj = obj.map((item)=> Object.assign({},item));//1
const newCloneObj = obj.map((item) => ({ ...item }));//2
// const newCloneObj = JSON.parse(JSON.stringify(obj));//3
// const newCloneObj = structuredClone(obj);//4


//map, forEach
const newAarray = newCloneObj.map((item, index, initialArray) => {
  item.math += 1;
  return item;
});

const newArrayForEach = newCloneObj.forEach((item, index, initialArray) => {
  item.math += 1; // forEach doar intereaza prin array, instructiunea asta nu modifica newCloneObj
});

// find, filter
const mathPass = obj.find((item, index, initialArray) => { return item.math > 5 }); //if no element undefined
const mathPassArray = obj.filter((item, index, initialArray) => { return item.math > 5 });//if no element empty array


//reduce
const sum = obj.reduce(
  (acumulator, item, index, initialArray) => {
    acumulator += item.math;
    return acumulator;
  }, 0);


console.log(newAarray, obj, newArrayForEach, mathPass, mathPassArray, sum);

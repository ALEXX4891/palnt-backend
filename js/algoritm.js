const max = 1600; // максимальное значение длины (ширина листа)
let props = [600, 450, 340, 200]; // массив значенй ширины необходимых деталей (ширина полоски)
let items = [...props]; // копирование массива
items.push(0); // добавление элемента '0' в конец массива
let obj = props.reduce((a, v) => ({ ...a, [v]: 0}), {}); // генерация типового объекта из массива
let result = [];

smolestItem = items.sort((a, b) => a - b)[1];
console.log(smolestItem);
maxItems = Math.floor(max / items.sort((a, b) => a - b)[1]);
console.log(maxItems);

number = 0;

if (items.length > 0) {
  for (let i = 0; i < items.length; i++) {
    number += 1;
    if (items.length > 1) {
      for (let j = 0; j < items.length; j++) {
        number += 1;
        if (items.length > 2) {
          for (let k = 0; k < items.length; k++) {
            number += 1;
            if (items.length > 3) {
              for (let x = 0; x < items.length; x++) {
                number += 1;
                if (items.length > 4) {
                  for (let y = 0; y < items.length; y++) {
                    number += 1;
                    if (items.length > 5) {
                      for (let ii = 0; ii < items.length; ii++) {
                        number += 1;
                        if (items.length > 6) {
                          for (let jj = 0; jj < items.length; jj++) {
                            number += 1;
                            if (items.length > 7) {
                              for (let kk = 0; kk < items.length; kk++) {
                                number += 1;
                                if (items.length > 8) {
                                  for (let xx = 0; xx < items.length; xx++) {
                                    number += 1;
                                    if (items.length > 9) {
                                      for (let yy = 0; yy < items.length; yy++) {
                                        number += 1;
                                        if (items.length > 10) {
                                          for (let iii = 0; iii < items.length; iii++) {
                                            number += 1;
                                            if (items.length > 11) {
                                              for (let jjj = 0; jjj < items.length; jjj++) {
                                                number += 1;
                                                if (items.length > 12) {
                                                  for (let kkk = 0; kkk < items.length; kkk++) {
                                                    number += 1;
                                                    if (items.length > 13) {
                                                      for (let xxx = 0; xxx < items.length; xxx++) {
                                                        number += 1;
                                                        if (items.length > 14) {
                                                          for (let yyy = 0; yyy < items.length; yyy++) {
                                                            number += 1;
                                                            if (
                                                              items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] + items[yy] + items[iii] + items[jjj] + items[kkk] + items[xxx] + items[yyy] <= max &&
                                                              max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] - items[yy] - items[iii] - items[jjj] - items[kkk] - items[xxx] - items[yyy] <= smolestItem
                                                            ) {
                                                              result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx], items[yy], items[iii], items[jjj], items[kkk], items[xxx], items[yyy]]);
                                                            }                                                         
                                                          }
                                                        }
                                                        if (
                                                          items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] + items[yy] + items[iii] + items[jjj] + items[kkk] + items[xxx] <= max &&
                                                          max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] - items[yy] - items[iii] - items[jjj] - items[kkk] - items[xxx] <= smolestItem
                                                        ) {
                                                          result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx], items[yy], items[iii], items[jjj], items[kkk], items[xxx]]);
                                                        }
                                                      }
                                                    }
                                                    if (
                                                      items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] + items[yy] + items[iii] + items[jjj] + items[kkk] <= max &&
                                                      max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] - items[yy] - items[iii] - items[jjj] - items[kkk] <= smolestItem
                                                    ) {
                                                      result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx], items[yy], items[iii], items[jjj], items[kkk]]);
                                                    }
                                                  }
                                                }
                                                if (
                                                  items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] + items[yy] + items[iii] + items[jjj] <= max &&
                                                  max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] - items[yy] - items[iii] - items[jjj] <= smolestItem
                                                ) {
                                                  result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx], items[yy], items[iii], items[jjj]]);
                                                }
                                              }
                                            }
                                            if (
                                              items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] + items[yy] + items[iii] <= max &&
                                              max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] - items[yy] - items[iii] <= smolestItem
                                            ) {
                                              result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx], items[yy], items[iii]]);
                                            }

                                          }
                                        }
                                        if (
                                          items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] + items[yy] <= max &&
                                          max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] - items[yy] <= smolestItem
                                        ) {
                                          result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx], items[yy]]);
                                        }
                                      }
                                    }
                                    if (
                                      items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] <= max &&
                                      max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] <= smolestItem
                                    ) {
                                      result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx]]);
                                    }
                                  }
                                }
                                if (
                                  items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] <= max &&
                                  max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] <= smolestItem
                                ) {
                                  result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk]]);
                                }
                              }
                            }
                            if (
                              items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] <= max &&
                              max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] <= smolestItem
                            ) {
                              result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj]]);
                            }

                          }
                        }
                        if (
                          items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] <= max &&
                          max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] <= smolestItem
                        ) {
                          result.push([items[i], items[j], items[k], items[x], items[y], items[ii]]);
                        }
                      }
                    }
                    if (
                      items[i] + items[j] + items[k] + items[x] + items[y] <= max &&
                      max - items[i] - items[j] - items[k] - items[x] - items[y] <= smolestItem
                      ) {
                      result.push([items[i], items[j], items[k], items[x], items[y]]);
                    }

                  }
                }
                if (
                  items[i] + items[j] + items[k] + items[x] <= max &&
                  max - items[i] - items[j] - items[k] - items[x] <= smolestItem
                ) {
                  result.push([items[i], items[j], items[k], items[x]]);
                }
              }
            }
            if (
              items[i] + items[j] + items[k] <= max &&
              max - items[i] - items[j] - items[k] <= smolestItem
            ) {
              result.push([items[i], items[j], items[k]]);
            }
          }
        }
        if (
          items[i] + items[j] <= max &&
          max - items[i] - items[j] <= smolestItem
        ) {
          result.push([items[i], items[j]]);
        }
      }
    }
    if (items[i] <= max && max - items[i] <= smolestItem) {
      result.push([items[i]]);
    }
  }
}

console.log('number: ', number);

let resultNew = [];
let resNew = [];
let arr = [];
let arrNew = [];
let arrObjekts = [];

let numberTwo = 0;
for (let i = 0; i < result.length; i++) {
  numberTwo++;
  let element = result[i];
  element = element.sort((a, b) => a - b);
  // console.log("element: ", element);
  let elObj = {};
  for (let key in obj) {
    // console.log("key: ", key);
    elObj[key] = element.filter((x) => x == key).length;

    // console.log('element: ', element);
    // console.log("key: ", key);
    // console.log("filter: ", element.filter(x => x == key).length);
    // console.log("obj[key]: ", obj[key]);
    // console.log("elObj[key]: ", elObj[key]);
  }
  arrObjekts.push(elObj);
  //   let elObj = {
  //     obj[j]: element.filter(x => x === Number(obj[j])).length,

  // console.log('elObj: ', elObj);
}
// console.log("arrObjekts: ", arrObjekts);

let myMass = []; //массив объектов содержащих комбинации
// console.log(myMass);

// // if (myMass.length > 0) {
//   // for (let k = 0; k < myMass.length; k++) {
for (let i = 0; i < arrObjekts.length; i++) {
  // console.log(arrObjekts);
  let neobj = {};
  if (myMass.length > 0) {
    // console.log(myMass);
    for (let key in obj) {
      neobj[key] = arrObjekts[i][key];
      // console.log(key);
      // console.log(myMass[i][key]);
      // console.log(arrObjekts[i][key]);
      // console.log(i);
      // console.log(arrObjekts[i]);
      // console.log(arrObjekts[i][key]);
      // console.log(myMass[i][key]);
      //   if (arrObjekts[i][key] == myMass[i][key]) {
    }
    myMass.push(neobj);
  } else {
    myMass.push(arrObjekts[i]);
    // console.log(arrObjekts[i]);
    // console.log(myMass);
  }
  // console.log(neobj);
}
// console.log(myMass);

let newMyMass = [];

// for (let i = 0; i < myMass.length; i++) {
//   for (let key in myMass[i]) {
//     if (myMass[i][key] > == "1") {
//   }
// }

const options = [
  [0, 340, 340, 600, 1280],
  [0, 340, 340, 600, 1280],
];

// const options = [
//   { a: 1, b: 0 },
//   { a: 1, b: 0 },

// ];

const getUniqueOptions = (options) => {
  // оставляет уникальные значения массива объектов и массива
  return options.reduce(
    (res, cur) =>
      res.find((find) => JSON.stringify(find) === JSON.stringify(cur))
        ? res
        : [...res, cur],
    []
  );
};

const filteredArrCombi = getUniqueOptions(myMass);
console.log(getUniqueOptions(filteredArrCombi));

//   // }
// // } else {
//   // myMass.push(arrObjekts[0]);
// // }

// console.log("arrObjekts[i][key]&&&&: ", arrObjekts[0][340]);

// console.log("arrObjekts: ", arrObjekts);

// obj = {340: 0, 600: 0, 450: 0};

// console.log("elObj: ", elObj);
// element.push(element[0] + element[1] + element[2] + element[3]);
// resultNew.push(element);
// arr = resultNew.sort((a, b) => a[4] - b[4]);
// arrNew = new Set(arr);
// console.log(element);
// if (resNew.includes(element) === false) {
//   console.log(element);
//   resNew.push(element);
// }
// console.log(resultNew.sort((a, b) => a - b));
// }
// console.log('resultNew: ', resultNew);

// arrNew =   new Set(resultNew);
// console.log('arr: ', arr);
let massssssssss = [0, 340, 340, 600, 1280];
// console.log(resultNew.indexOf(resultNew[2]));
// console.log('resultNew[0]: ', resultNew[0]);
// console.log('resultNew[2]: ', resultNew[2]);
// console.log('massssssssss: ', massssssssss);

let superArr = [[0, 340, 340, 600, 1280]];
let superArr2 = [[0, 340, 340, 600, 1280]];
// console.log("superArr[1]: ", superArr[0][1]);
let xxx = superArr2[0].filter((x) => x === Number(superArr[0][1])).length;
// console.log("xxx: ", xxx);
let superObj1 = [{ 340: 2, 450: 0, 600: 1 }];
// let superObj2 = [{ '340': 2, '450': 0, '600': 1 }];
// console.log('superArr1: ', superArr);
// console.log('superArr2: ', superArr2);
// console.log('superObj1: ', superObj1[0]);
// console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&', superArr.indexOf(superArr2[0]));
// console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@', superObj1.includes(superObj2[0]));
for (let i = 0; i < resultNew.length; i++) {
  // console.log('resultNew[i]: ', resultNew[i]);
  // console.log('superArr[i]: ', superArr[i]);
  // console.log(resultNew[i] == superArr[i]);
  // if (resultNew[i] == superArr[i]) {
  // for (let j = 0; j < resultNew.length; j++) {
  //   if (resultNew[i] == superArr[j]) {
  //     console.log('resultNew[i]: ', resultNew[i]);
  //     console.log('superArr[j]: ', superArr[j]);
  //    return false;
  //   } else {
  //     superArr.push(resultNew[i]);
  //   }
  // }
}

// console.log('superArr: ', superArr);

// if (resultNew.indexOf(resultNew[0]) == -1) {
//   console.log('false');
// } else {
//   console.log('true');
// }

// function contains(arrNew, resultNew[0]){
// console.log('arrNew: ', arrNew);
// console.log('resultNew[0]: ', resultNew[0]);
// for(var i=0; i<what.length; i++){
// if(arrNew.indexOf(resultNew[0]) == -1) console.log(false);
// }
// return true;
// }

// for (let i = 0; i < resultNew.length; i++) {
//   resNew[i].push(resultNew[i][0]);
//   resNew[i].push(resultNew[i][1]);
//   resNew[i].push(resultNew[i][2]);
//   resNew[i].push(resultNew[i][3]);
// }

// console.log('resNew: ', resNew);

// static List<List<int>> result = new List<List<int>>();
//         static int max = 10;
//         static void Main(string[] args)
//         {

//             List<int> l = new List<int>();
//             Random rnd = new Random();
//             for (int i = 0; i < 12; i++)
//             {
//                 l.Add(rnd.Next(max));
//             }
//             Console.WriteLine("Исходный массив");
//             foreach (var item in l)
//             {
//                 Console.Write($"{item} ");
//             }
//             Console.WriteLine("\n");
//             Calc(l);
//             Console.WriteLine("\n\n\n");

//             foreach (var item in result)
//             {
//                 foreach (var item1 in item)
//                 {
//                     Console.Write(item1);
//                 }
//                 Console.WriteLine();
//             }

//             Console.Read();

//         }

//         static void Calc(List<int> list)
//         {
//             if (list.Count <= 2)
//                 return;
//             var t = new List<int>();
//             var e = list.TakeWhile(g => { t.Add(g); return t.Sum() < max; }).ToList();
//             result.Add(e.ToList());
//             for (int i = 0; i < e.Count; i++)
//             {
//                 list.Remove(e[i]);
//             }
//             Calc(list);
//         }

// let result = [];
// const max = 1600;
// const list = [600, 450, 340];

// function calc(list) {
//     if (list.length <= 2) {
//         return;
//     }

//     let t = [];
//     let e = list.filter(g => {
//         t.push(g);
//         return t.reduce((a, b) => a + b, 0) < max;
//     });
//     result.push([...e]);

//     e.forEach(item => {
//         list.splice(list.indexOf(item), 1);
//     });

//     calc(list);
// }

// function main() {
//     let l = [];
//     for (let i = 0; i < 12; i++) {
//         l.push(Math.floor(Math.random() * max));
//     }

//     console.log("Исходный массив");
//     console.log(l.join(' '));
//     console.log("\n");

//     calc(l);

//     console.log("\n\n\n");

//     result.forEach(item => {
//         console.log(item.join(''));
//     });
// }

// main();

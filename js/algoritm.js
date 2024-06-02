const max = 100; // максимальное значение длины (ширина листа)
let props = [14, 31, 36, 45]; // массив значенй ширины необходимых деталей (ширина полоски)
let items = [...props]; // копирование массива
items.push(0); // добавление элемента '0' в конец массива
let obj = props.reduce((a, v) => ({ ...a, [v]: 0 }), {}); // генерация типового объекта из массива
let result = []; // массив массивов комбинаций

smolestItem = items.sort((a, b) => a - b)[1]; // получаем минимальное значение требуемой длины отрезка
maxItems = Math.floor(max / items.sort((a, b) => a - b)[1]); // получаем максимально возможное кол-во требуемых деталей в длине заготовки

let number = 0; // счетчик операций

// собираем массив всех вожможных комбинаций удовлетворяющих условию что сумма элементов в комбинации меньше длины заготовки,
// и минимальный остаток меньше чем длина самого маленького элемента:
if (maxItems > 0) {
  for (let i = 0; i < items.length; i++) {
    number += 1;    
    if (maxItems > 1) {
      for (let j = 0; j < items.length; j++) {
        number += 1;        
        if (maxItems > 2) {
          for (let k = 0; k < items.length; k++) {
            number += 1;
            if (maxItems > 3) {
              for (let x = 0; x < items.length; x++) {
                number += 1;
                if (maxItems > 4) {
                  for (let y = 0; y < items.length; y++) {
                    number += 1;
                    if (maxItems > 5) {
                      for (let ii = 0; ii < items.length; ii++) {
                        number += 1;
                        if (maxItems > 6) {
                          for (let jj = 0; jj < items.length; jj++) {
                            number += 1;
                            if (maxItems > 7) {
                              for (let kk = 0; kk < items.length; kk++) {
                                number += 1;
                                if (maxItems > 8) {
                                  for (let xx = 0; xx < items.length; xx++) {
                                    number += 1;
                                    if (maxItems > 9) {
                                      for (let yy = 0; yy < items.length; yy++) {
                                        number += 1;
                                        if (maxItems > 10) {
                                          for (let iii = 0; iii < items.length; iii++) {
                                            number += 1;
                                            if (maxItems > 11) {
                                              for (let jjj = 0; jjj < items.length; jjj++) {
                                                number += 1;
                                                if (maxItems > 12) {
                                                  for (let kkk = 0; kkk < items.length; kkk++) {
                                                    number += 1;
                                                    if (maxItems > 13) {
                                                      for (let xxx = 0; xxx < items.length; xxx++) {
                                                        number += 1;
                                                        if (maxItems > 14) {
                                                          for (let yyy = 0; yyy < items.length; yyy++) {
                                                            number += 1;
                                                            if (
                                                              items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] + items[yy] + items[iii] + items[jjj] + items[kkk] + items[xxx] + items[yyy] <= max &&
                                                              max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] - items[yy] - items[iii] - items[jjj] - items[kkk] - items[xxx] - items[yyy] < smolestItem
                                                            ) {
                                                              result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx], items[yy], items[iii], items[jjj], items[kkk], items[xxx], items[yyy]]);
                                                            }                                                         
                                                          }
                                                        }
                                                        if (
                                                          items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] + items[yy] + items[iii] + items[jjj] + items[kkk] + items[xxx] <= max &&
                                                          max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] - items[yy] - items[iii] - items[jjj] - items[kkk] - items[xxx] < smolestItem
                                                        ) {
                                                          result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx], items[yy], items[iii], items[jjj], items[kkk], items[xxx]]);
                                                        }
                                                      }
                                                    }
                                                    if (
                                                      items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] + items[yy] + items[iii] + items[jjj] + items[kkk] <= max &&
                                                      max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] - items[yy] - items[iii] - items[jjj] - items[kkk] < smolestItem
                                                    ) {
                                                      result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx], items[yy], items[iii], items[jjj], items[kkk]]);
                                                    }
                                                  }
                                                }
                                                if (
                                                  items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] + items[yy] + items[iii] + items[jjj] <= max &&
                                                  max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] - items[yy] - items[iii] - items[jjj] < smolestItem
                                                ) {
                                                  result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx], items[yy], items[iii], items[jjj]]);
                                                }
                                              }
                                            }
                                            if (
                                              items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] + items[yy] + items[iii] <= max &&
                                              max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] - items[yy] - items[iii] < smolestItem
                                            ) {
                                              result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx], items[yy], items[iii]]);
                                            }

                                          }
                                        }
                                        if (
                                          items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] + items[yy] <= max &&
                                          max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] - items[yy] < smolestItem
                                        ) {
                                          result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx], items[yy]]);
                                        }
                                      }
                                    }
                                    if (
                                      items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] + items[xx] <= max &&
                                      max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] - items[xx] < smolestItem
                                    ) {
                                      result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk], items[xx]]);
                                    }
                                  }
                                }
                                if (
                                  items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] + items[kk] <= max &&
                                  max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] - items[kk] < smolestItem
                                ) {
                                  result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj], items[kk]]);
                                }
                              }
                            }
                            if (
                              items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] + items[jj] <= max &&
                              max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] - items[jj] < smolestItem
                            ) {
                              result.push([items[i], items[j], items[k], items[x], items[y], items[ii], items[jj]]);
                            }

                          }
                        }
                        if (
                          items[i] + items[j] + items[k] + items[x] + items[y] + items[ii] <= max &&
                          max - items[i] - items[j] - items[k] - items[x] - items[y] - items[ii] < smolestItem
                        ) {
                          result.push([items[i], items[j], items[k], items[x], items[y], items[ii]]);
                        }
                      }
                    }
                    if (
                      items[i] + items[j] + items[k] + items[x] + items[y] <= max &&
                      max - items[i] - items[j] - items[k] - items[x] - items[y] < smolestItem
                      ) {
                      result.push([items[i], items[j], items[k], items[x], items[y]]);
                    }

                  }
                }
                if (
                  items[i] + items[j] + items[k] + items[x] <= max &&
                  max - items[i] - items[j] - items[k] - items[x] < smolestItem
                ) {
                  result.push([items[i], items[j], items[k], items[x]]);
                }
              }
            }
            if (
              items[i] + items[j] + items[k] <= max &&
              max - items[i] - items[j] - items[k] < smolestItem
            ) {
              result.push([items[i], items[j], items[k]]);
            }
          }
        }
        if (
          items[i] + items[j] <= max &&
          max - items[i] - items[j] < smolestItem
        ) {
          result.push([items[i], items[j]]);
        }
      }
    }
    if (
      items[i] <= max && 
      max - items[i] < smolestItem
    ) {
      result.push([items[i]]);
    }
  }
}

let arrObjekts = []; // массив объектов комбинаций

//формируем массив объектов комбинаций:
let numberTwo = 0;
for (let i = 0; i < result.length; i++) {
  numberTwo++;
  let element = result[i];
  element = element.sort((a, b) => a - b); // сортируем элементы массива
  let elObj = {};
  for (let key in obj) {
    elObj[key] = element.filter((x) => x == key).length; // формируем объект
  }
  arrObjekts.push(elObj);
}

// оставляет уникальные значения массива объектов и массива
function getUniqueOptions(options) {
  return options.reduce(
    (res, cur) =>
      res.find((find) => JSON.stringify(find) === JSON.stringify(cur))
        ? res
        : [...res, cur],
    []
  );
};

const filteredArrCombi = getUniqueOptions(arrObjekts); // уникальные значения массива комбинаций
console.log('Уникальные комбинации: ', getUniqueOptions(filteredArrCombi));
console.log("Проверено комбинаций: ", number);

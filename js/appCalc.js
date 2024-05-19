// ----------------------simplebar:---------------------------------------
function simplebar() {
  if (document.querySelector(".my-simplebar-1")) {
    const simpleBar1 = new SimpleBar(
      document.querySelector(".my-simplebar-1"),
      {
        scrollbarMaxSize: 80,
        autoHide: false,
        forceVisible: true,
      }
    );
  }

  if (document.querySelector(".my-simplebar-2")) {
    const simpleBar2 = new SimpleBar(
      document.querySelector(".my-simplebar-2"),
      {
        scrollbarMaxSize: 80,
        autoHide: false,
        forceVisible: true,
      }
    );
  }

  if (document.querySelectorAll(".my-simplebar-input")) {
    document.querySelectorAll(".my-simplebar-input").forEach((item) => {
      new SimpleBar(item, {
        scrollbarMaxSize: 45,
        scrollbarMinSize: 33,
        autoHide: false,
        forceVisible: true,
      });
    });
  }
}
simplebar();
// --------------------end simplebar:---------------------------------------

// --------------------popup:------------------------
let unlock = true;
const timeout = 300;
const lockPadding = document.querySelectorAll(".lock-padding");
const body = document.querySelector("body");

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".header").offsetWidth + "px";
  for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.marginRight = lockPaddingValue;
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.marginRight = "0px";
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    //удалим у строк лишние классы:
    const rows = document.querySelectorAll(".table__row");
    rows.forEach((item) => {
      item.classList.remove("table__row_deletable");
    });
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function setPopupEvent() {
  const popupLinks = document.querySelectorAll(".popup-link");

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
        const popupName = popupLink.getAttribute("href").replace("#", "");
        const curentPopup = document.getElementById(popupName); //получаем id попап-окна
        popupOpen(curentPopup);
        e.preventDefault();
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll(".popup-close");
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener("click", function (e) {
        popupClose(el.closest(".popup")); //ближайший родитель класса popup
        e.preventDefault();
      });
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector(".popup.open");
      if (popupActive) {
        // закрываем текущий открытый попап, если он есть
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      // console.log(curentPopup);
      curentPopup.classList.add("open");
      curentPopup.addEventListener("click", function (e) {
        if (!e.target.closest(".popup__content")) {
          // если клик был по области вокруг попапа то ничего не делаем
          popupClose(e.target.closest(".popup"));
        }
      });
    }
  }

  // добавляем боди padding-right при открытии попапа, на ширину скролл-бара
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const popupActive = document.querySelector(".popup.open");
      popupClose(popupActive);
    }
  });
}
// --------------------end popup:------------------------

// 1) вытаскиваем всех контрагентов для селекта
// 2) вытаскиваем все типы картона для селекта
// 3) создаем таблицу с необходимым количеством разделителей
// 4) формируем из БД таблицу остатков картона

// 5) программа должна предложить несколько вариантов расчета материалов для нарезки разделителей

const tableWarehouseBody = document.querySelector(".table__body_warehouse");
// const tableBodyWrapper = document.querySelector(".table-body-wrapper");
// const cartonSearch = document.getElementById("cartonsSearch");

//--------------------------Запрос к БД----------------------------
// Загружаем список контрагентов с БД:
let responce;
let infoList;

let options = {
  // опции для получения списка всех контрагентов
  function: "getAll",
  table: "carton",
  all: "*",
};

async function fetchToDB(options) {
  // Блок try выполнится полностью, если не будет ошибок:
  try {
    // Выполняем запрос:
    responce = await fetch("main.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    });
    infoList = await responce.json();
    return infoList; // Возвращаем результат запроса
  } catch (err) {
    // Блок catch сработает только если будут какие-то ошибки в блоке try:
    // Выведем в консоли информацию об ошибке:
    console.log("При запросе к БД произошла ошибка, детали ниже:");
    console.error(err);
    // Вернем исключение с текстом поясняющим детали ошибки:
    alert("Произошла ошибка при запросе к БД!");
    throw new Error("Запрос завершился неудачно.");
  }
}

await fetchToDB(options); // требуется подключить скрипт как модуль, иначе await не работает!!!
//--------------------------end Запрос к БД----------------------------

let cartonList = [...infoList];
let cartonListForRender = [];
console.log(cartonList);

// функция формирования данных с остатками картона
function crateResultTable(arr) {
  const copyArr = [...arr];
  const quantity = copyArr.reduce((acc, cartonObj) => {
    return acc + cartonObj.coming;
  }, 0);
  console.log(quantity);
}

crateResultTable(cartonList);


// Добавляем событие на кнопку "Добавить контрагента":
// const addRowBtn = document.getElementById("btn-add-row");
// addRowBtn.onclick = function () {
//   maxId += 1;
//   const item = createRowForm(maxId);
//   item.scrollIntoView(); // переход к созданной строке
// };

function preRender(arr) {
  let copyArr = [...arr]; // создаем копию массива
  //посчитаем количество и стоимость:
  // copyArr.forEach((cartonObj) => {
  //   cartonObj.quantity = cartonObj.quantity;
  //   cartonObj.cost = cartonObj.cost;
  //   cartonObj.isActive = cartonObj.isActive;
  //   cartonObj.email = cartonObj.email;
  //   cartonObj.price = cartonObj.price;
  //   cartonObj.lengthCarton = cartonObj.lengthCarton;
  //   cartonObj.width = cartonObj.width;
  //   cartonObj.typeCarton = cartonObj.typeCarton;
  //   cartonObj.name = cartonObj.name;
  // })

  for (const cartonObj of copyArr) {
    let cartonObjForRender = {
      name: cartonObj.name,
      typeCarton: cartonObj.typeCarton,
      width: cartonObj.width,
      lengthCarton: cartonObj.lengthCarton,
      price: cartonObj.price,
      quantity: cartonObj.quantity, // посчитать количество
      cost: cartonObj.cost, // посчитать стоимость
    };
    cartonListForRender.push(cartonObjForRender);
  }
}
preRender(cartonList);

let number = 0;
function getWarehouseRow(cartonObj) {
  const item = document.createElement("tr"),
    tableNumber = document.createElement("td"),
    tableDataName = document.createElement("td"),
    tableDataType = document.createElement("td"),
    tableDataWidth = document.createElement("td"),
    tableDataLength = document.createElement("td"),
    tableDataPrice = document.createElement("td"),
    tableDataQuantity = document.createElement("td"),
    tableDataCost = document.createElement("td");

  item.classList.add("table__row");
  tableNumber.classList.add("table__column", "table__column_1");
  tableDataName.classList.add("table__column", "table__column_2");
  tableDataType.classList.add("table__column", "table__column_3");
  tableDataWidth.classList.add("table__column", "table__column_4");
  tableDataLength.classList.add("table__column", "table__column_5");
  tableDataPrice.classList.add("table__column", "table__column_6");
  tableDataQuantity.classList.add("table__column", "table__column_7");
  tableDataCost.classList.add("table__column", "table__column_8");

  number++;
  tableNumber.textContent = number;
  tableDataName.textContent = cartonObj.name;
  tableDataType.textContent = cartonObj.typeCarton;
  tableDataWidth.textContent = cartonObj.width;
  tableDataLength.textContent = cartonObj.lengthCarton;
  tableDataPrice.textContent = cartonObj.price;
  tableDataQuantity.textContent = cartonObj.quantity;
  tableDataCost.textContent = cartonObj.cost;

  // присваеваем id контрагента элементу и добавляем информацию в таблицу:
  item.append(tableNumber);
  item.append(tableDataName);
  item.append(tableDataType);
  item.append(tableDataWidth);
  item.append(tableDataLength);
  item.append(tableDataPrice);
  item.append(tableDataQuantity);
  item.append(tableDataCost);

  // console.log(item);
  return item;
}

function renderWarehouseTable(arr) {
  tableWarehouseBody.innerHTML = ""; // очищаем тело таблицы
  let copyList = [...arr]; // создаем копию массива

  // рендерим всю таблицу
  for (const cartonrObj of copyList) {
    const item = getWarehouseRow(cartonrObj);
    // console.log(item);

    tableWarehouseBody.append(item); // добавление контрагента в таблицу
  }
}

renderWarehouseTable(cartonListForRender);

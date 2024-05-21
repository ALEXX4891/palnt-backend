// ----------------------simplebar:---------------------------------------
// function simplebar() {
if (document.querySelector(".my-simplebar-1")) {
  const simpleBar1 = new SimpleBar(document.querySelector(".my-simplebar-1"), {
    scrollbarMaxSize: 80,
    autoHide: false,
    forceVisible: true,
  });
}

if (document.querySelector(".my-simplebar-2")) {
  const simpleBar2 = new SimpleBar(document.querySelector(".my-simplebar-2"), {
    scrollbarMaxSize: 80,
    autoHide: false,
    forceVisible: true,
  });
}

function simplebar() {
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

let options1 = {
  // опции для получения списка всех контрагентов
  function: "getAll",
  table: "carton",
  all: "*",
};

async function fetchToDB(options) {
  // Блок try выполнится полностью, если не будет ошибок:
  try {
    // Выполняем запрос:
    let infoList;
    let responce;
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

await fetchToDB(options1); // требуется подключить скрипт как модуль, иначе await не работает!!!
let options2 = {
  // опции для получения списка всех контрагентов
  function: "getAll",
  table: "contractor",
  all: "*",
};

// await fetchToDB(options2);

//--------------------------end Запрос к БД----------------------------
let warehouseList = await fetchToDB(options1);
let contractorsList = await fetchToDB(options2);

// console.log(warehouseList);
let copyContractorsList = [...contractorsList];
const ContractorsListForInput = [];
// console.log(copyContractorsList);

let cartonList = [...warehouseList];
let cartonListForRender = [];
const TotalTableArr = [];

const contractorsSelect = document.querySelector(".my-select_contractors");
const contractorsSelectUl = document.querySelector(
  ".my-select__list_contractors"
);
const contractorsSelectInput = document.querySelector(
  ".my-select__text_contractors"
);
let contractorsSelectId = 0;
// console.log(contractorsSelect);
// contractorsSelect.addEventListener("click", (event) => {
//   contractorsSelect.classList.add("my-select_active");
//   contractorsSelect.classList.toggle("my-select_open");

//   // console.log(event.target);
//   // console.log(event.target.getAttribute("idContractor"));
// })

// ---------------------------setCastomSelectEvents:-------------------------
function setCastomSelectEvents() {
  const selects = document.querySelectorAll(".my-select");
  // const inputs = document.querySelectorAll(".my-select__text");
  // const selectLists = document.querySelectorAll(".my-select__list");
  // const inputFieldsFields = document.querySelectorAll(".input_search-field");
  selects.forEach((select) => {
    select.addEventListener("click", (event) => {
      select.classList.toggle("my-select_open");
    });
    const selectOptions = select.querySelectorAll(".my-select__item");
    selectOptions.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.stopPropagation(); // отменяем всплытие, что бы повторно не сработало событие на самом селекте
        const input = select.querySelector(".my-select__text");
        input.innerHTML = item.innerHTML;
        input.classList.add("my-select__text_active");
        select.classList.remove("my-select_open");
        select.classList.add("my-select_active");
      });
    });
  });

  const inputFields = document.querySelectorAll(".input_search-field");
  if (inputFields) {
    inputFields.forEach((item) => {
      item.addEventListener("click", (event) => {
        item.classList.add("input_search-field_active");
      });
      item.querySelector("input").addEventListener("input", function () {
        if (item.querySelector("input").value.trim() !== "") {
          item.classList.add("input_search-field_active");
          console.log(1);
        }
      });
      document.addEventListener("click", function (e) {});
    });
  }

  document.addEventListener("click", function (e) {
    selects.forEach((select) => {
      if (!select.contains(e.target)) {
        select.classList.remove("my-select_open");
        if (select.querySelector(".my-select__text").innerHTML == "") {
          select
            .querySelector(".my-select__text")
            .classList.remove("my-select__text_active");
        }
      }
    });

    inputFields.forEach((item) => {
      if (
        item.querySelector("input") == e.target &&
        item.querySelector("input").value.trim() == ""
      ) {
        item.classList.add("input_search-field_active");
      } else if (
        item.querySelector("input") !== e.target &&
        item.querySelector("input").value.trim() == ""
      ) {
        item.classList.remove("input_search-field_active");
      }
    });
  });
}

// // кастомный селект для поиска:
// inputFieldsFields.forEach((input) => {
//   input.addEventListener("input", (event) => {
//     const target = event.target;
//     const value = target.value;
//     const list = target.closest(".my-select").querySelector(
//       ".my-select__list"
//     );
//     const options = list.querySelectorAll(".my-select__item");
//     options.forEach((option) => {
//       if (option.innerHTML.toLowerCase().indexOf(value.toLowerCase()) > -1) {
//         option.style.display = "";
//       } else {
//         option.style.display = "none";
//       }
//     });
//   });
// });

// ---------------------------end setCastomSelectEvents:-------------------------

// function preRenderContractorsList(arr) { // пререндер нужен если мы хотим преобразовать данные перед рендером
//   let copyArr = [...arr];

//   for (const contractorObj of copyArr) {
//     let contractorObjForRender = {
//       name: contractorObj.name,
//       id: contractorObj.idContractor,
//     };
//     ContractorsListForInput.push(contractorObjForRender);
//   }
// }
// preRenderContractorsList(copyContractorsList);
// console.log(ContractorsListForInput);

function getContractorListRow(contractorObj) {
  const item = document.createElement("li");

  // console.log(contractorLi);

  item.classList.add("my-select__item");
  item.textContent = contractorObj.name;
  item.setAttribute("id", contractorObj.idContractor);

  // console.log(item);
  // item.addEventListener("click", (event) => {
  //   // contractorsSelectId = item.getAttribute("id");
  //   // console.log(contractorsSelectId);
  //   contractorsSelectInput.textContent = item.textContent;
  //   contractorsSelectInput.setAttribute("idContractor", item.getAttribute("id"));
  //   contractorsSelectInput.classList.add("my-select__text_active");
  // })

  // console.log(item);
  return item;
}

// contractorsList.forEach((contractorObj) => {
//   getContractorListRow(contractorObj);
// })
// getContractorListRow(contractorsList);

function renderContractorsSelect(arr) {
  contractorsSelectUl.innerHTML = ""; // очищаем тело таблицы
  // console.log(contractorsSelectUl);
  let copyArr = [...arr]; // создаем копию массива

  // рендерим всю таблицу
  for (const contractorObj of copyArr) {
    const item = getContractorListRow(contractorObj);
    contractorsSelectUl.append(item); // добавление контрагента в таблицу
  }
}

renderContractorsSelect(contractorsList);
// simplebar();

// console.log(contractorsList);

// функция формирования результирующей таблицы
function crateResultTable(arr) {
  const copyArr = [...arr];
  copyArr.forEach((cartonObj) => {
    // добавляем в объект уникальное имя
    cartonObj.idName = `${cartonObj.name} - ${cartonObj.typeCarton} - ${cartonObj.width} x ${cartonObj.lengthCarton} - ${cartonObj.price}$`;
  });
  const unicList = [...new Set(copyArr.map((cartonObj) => cartonObj.idName))]; // формируем массив уникальных названий
  // фильтруем результирующий массив:
  for (let i = 0; i < unicList.length; i++) {
    let filterList = copyArr.filter(
      // фильтруем по уникальному названию
      (cartonObj) => cartonObj.idName === unicList[i]
    );

    let quantity = filterList.reduce(
      // считаем остатки картона на складе
      (acc, cartonObj) => acc + cartonObj.coming - cartonObj.expense,
      0
    );
    const unicObj = {
      // создаем объект с уникальным названием для рендера результирующей таблицы
      idName: unicList[i],
      name: filterList[0].name,
      typeCarton: filterList[0].typeCarton,
      width: filterList[0].width,
      lengthCarton: filterList[0].lengthCarton,
      price: filterList[0].price,
      quantity: quantity,
      cost: quantity * filterList[0].price,
    };
    TotalTableArr.push(unicObj); // собираем массив для рендера результирующей таблицы
  }
  // console.log(TotalTableArr);
  // return TotalTableArr;
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
  // пререндер нужен если мы хотим преобразовать данные перед рендером
  let copyArr = [...arr];

  for (const cartonObj of copyArr) {
    let cartonObjForRender = {
      name: cartonObj.name,
      typeCarton: cartonObj.typeCarton,
      width: cartonObj.width,
      lengthCarton: cartonObj.lengthCarton,
      price: cartonObj.price,
      quantity: cartonObj.quantity,
      cost: cartonObj.cost,
    };
    cartonListForRender.push(cartonObjForRender);
  }
}
preRender(TotalTableArr);

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
simplebar();
setCastomSelectEvents();

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

let optionsForCarton = {
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

await fetchToDB(optionsForCarton); // требуется подключить скрипт как модуль, иначе await не работает!!!
let optionsForContractors = {
  // опции для получения списка всех контрагентов
  function: "getAll",
  table: "contractor",
  all: "*",
};

// await fetchToDB(options2);

//--------------------------end Запрос к БД----------------------------

const warehouseList = await fetchToDB(optionsForCarton);
const contractorsList = await fetchToDB(optionsForContractors);

// console.log(warehouseList);
const copyContractorsList = [...contractorsList];
let ContractorsListForInput = [
  ...new Set(copyContractorsList.map((contractor) => contractor.name)),
];
// console.log(ContractorsListForInput);
let CartonListForInput = [];

// console.log(copyContractorsList);

const cartonList = [...warehouseList];
const cartonListForRender = [];
const TotalTableArr = [];

// const contractorsSelect = document.querySelector(".my-select_contractors");

const contractorsSelectUl = document.querySelector(
  ".my-select__list_contractors"
);
const cartonTypesSelectUl = document.querySelector(".my-select__list_carton");
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

// ---------------------------создание таблицы с параметрами заказа:-------------------------
// функция добавления сразу множества атрибутов:
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

const orderParamsTable = document.querySelector(".table__body_orderParams");

function createOrderParamsTable() {
  const table = document.createElement("table");
  table.classList.add("table");
  return table;
}

const addOrderParamsBtn = document.getElementById("btn-add-row");
addOrderParamsBtn.onclick = function () {
  // maxId += 1;
  const item = createOrderParamsForm();
  // item.scrollIntoView(); // переход к созданной строке
};

const orderParamsDelBtn = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M17.8908 4.79999L11.9999 10.6909L6.10896 4.79999C5.93536 4.62639 5.69991 4.52887 5.45441 4.52887C5.20891 4.52887 4.97346 4.62639 4.79986 4.79999C4.62627 4.97359 4.52874 5.20903 4.52874 5.45454C4.52874 5.70004 4.62627 5.93549 4.79986 6.10908L10.6908 12L4.79986 17.8909C4.62627 18.0645 4.52874 18.3 4.52874 18.5455C4.52874 18.791 4.62627 19.0264 4.79986 19.2C4.97346 19.3736 5.20891 19.4711 5.45441 19.4711C5.69991 19.4711 5.93536 19.3736 6.10896 19.2L11.9999 13.3091L17.8908 19.2C18.0644 19.3736 18.2998 19.4711 18.5453 19.4711C18.7908 19.4711 19.0263 19.3736 19.1999 19.2C19.3735 19.0264 19.471 18.791 19.471 18.5455C19.471 18.3 19.3735 18.0645 19.1999 17.8909L13.309 12L19.1999 6.10908C19.3735 5.93549 19.471 5.70004 19.471 5.45454C19.471 5.20903 19.3735 4.97359 19.1999 4.79999C19.0263 4.62639 18.7908 4.52887 18.5453 4.52887C18.2998 4.52887 18.0644 4.62639 17.8908 4.79999Z"
  fill="#890000" />
</svg>`;

let numberOrderTableRow = 0;
function createOrderParamsForm() {
  const item = document.createElement("tr"),
    numberCell = document.createElement("td"),
    widthCell = document.createElement("td"),
    lengthCell = document.createElement("td"),
    quantityCell = document.createElement("td"),
    deleteCell = document.createElement("td"),
    inputwidth = document.createElement("input"),
    inputlength = document.createElement("input"),
    inputquantity = document.createElement("input");

  //присвоение классов созданным элементам:
  item.classList.add("table__row");
  numberCell.classList.add("table__column", "table__column_1");
  widthCell.classList.add("table__column", "table__column_2");
  lengthCell.classList.add("table__column", "table__column_3");
  quantityCell.classList.add("table__column", "table__column_4");
  deleteCell.classList.add("table__column", "table__column_5");

  //присвоение классов созданным инпутам:
  inputwidth.classList.add("table__cell-frame");
  inputlength.classList.add("table__cell-frame");
  inputquantity.classList.add("table__cell-frame");

  //присвоение атрибутов созданным инпутам:
  setAttributes(inputwidth, {
    type: "number",
    name: "width",
    value: "",
    required: true,
  });
  setAttributes(inputlength, {
    type: "number",
    name: "length",
    value: "",
    required: true,
  });
  setAttributes(inputquantity, {
    type: "number",
    name: "quantity",
    value: "",
    required: true,
  });

  //создаем кнопку удаления строки:
  deleteCell.innerHTML = orderParamsDelBtn;
  // добавляем обработчик на кнопку - удаления строки
  deleteCell.querySelector("svg").addEventListener("click", function () {
    item.remove();
    numberOrderTableRow--;
  });

  numberOrderTableRow++;
  numberCell.textContent = numberOrderTableRow;

  //присвоение инпутов ячейкам таблицы:
  widthCell.append(inputwidth);
  lengthCell.append(inputlength);
  quantityCell.append(inputquantity);

  //добвление формы в строку:
  item.append(numberCell, widthCell, lengthCell, quantityCell, deleteCell);

  orderParamsTable.append(item); // добавление контрагента в таблицу
  return item;
}

createOrderParamsForm();
// ---------------------------end создание таблицы с параметрами заказа:-------------------------

// ---------------------------end создание таблиц варианта:-------------------------
// блок варианта:
const variant = document.querySelector(".variant");
// if (variant) {
//таблица расстановки ножей (с head):
const variantTableKnives = variant.querySelector(".table__body_knives");
//результирующая таблица:
const variantTableKnivesRes = variant.querySelector(".table__body_knives_res");
//таблица калькуляции:
const variantTableCalculation = variant.querySelector(
  ".table__body_calculation"
);

//от блины объекта посчтиаем количество ножей<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// variantTable.addEventListener("click", (event) => {
//   event.preventDefault();
//   createOrderParamsForm();
// });

// variant.addEventListener("click", (event) => {
//   event.preventDefault();
//   createVariantForm();
// });
// }
// ---------------------------end создание таблиц варианта:-------------------------

const variantTableKnivesData = [
  {
    id: 1,
    resource: "Лист 72х126",
    type: "Тип №1",
    quantity: 179,
    knife1: 15,
    knife2: 16,
    knife3: 20,
    knife4: 20,
    knife5: 15,
    knife6: 15,
    knife7: 15,
    knife8: 15,
    knife9: 15,
    knife10: 15,
    knife11: 15,
    knife12: 15,
    knife13: 15,
    knife14: 15,
    knife15: 15,
    knife16: 15,
    knife17: 15,
    knife18: 15,
    knife19: 15,
    knife20: 15,
  },
  {
    id: 2,
    resource: "Полоска 72х126",
    type: "Тип №1",
    quantity: 754,
    knife1: 15,
    knife2: 16,
    knife3: 20,
    knife4: 20,
    knife5: 15,
    knife6: 15,
    knife7: 15,
    knife8: 15,
    knife9: 15,
    knife10: 15,
    knife11: 15,
    knife12: 15,
    knife13: 15,
    knife14: 15,
    knife15: 15,
    knife16: 15,
    knife17: 15,
    knife18: 15,
    knife19: 15,
    knife20: 15,
  },
  {
    id: 3,
    resource: "Лист 72х126",
    type: "Тип №1",
    quantity: 502,
    knife1: 15,
    knife2: 16,
    knife3: 20,
    knife4: 20,
    knife5: 15,
    knife6: 15,
    knife7: 15,
    knife8: 15,
    knife9: 15,
    knife10: 15,
    knife11: 15,
    knife12: 15,
    knife13: 15,
    knife14: 15,
    knife15: 15,
    knife16: 15,
    knife17: 15,
    knife18: 15,
    knife19: 15,
    knife20: 15,
  },
];

const variantTableKnivesResData = [
  {
    id: 1,
    resource: "Лист 72х126",
    type: "Тип №1",
    quantity: 179,
    prise: 15,
    cost: 16,
    remains: 2,
  },
  {
    id: 2,
    resource: "Полоска 72х126",
    type: "Тип №1",
    quantity: 754,
    prise: 18,
    cost: 18,
    remains: 2,
  },
];

const variantTableCalculationData = [
  {
    id: 1,
    width: 15,
    length: 18,
    quantity: 5000,
    prise: 19.34,
    cost: 21.34,
    marginedCost: 31.34,
    profit: 10,
    sum: 156.7,
  },
  {
    id: 2,
    width: 15,
    length: 18,
    quantity: 3000,
    prise: 19.34,
    cost: 21.34,
    marginedCost: 31.34,
    profit: 10,
    sum: 156.7,
  },
  {
    id: 3,
    width: 15,
    length: 18,
    quantity: 5000,
    prise: 19.34,
    cost: 21.34,
    marginedCost: 31.34,
    profit: 10,
    sum: 156.7,
  },
  {
    id: 4,
    width: 14,
    length: 18,
    quantity: 5000,
    prise: 19.34,
    cost: 21.34,
    marginedCost: 31.34,
    profit: 10,
    sum: 156.7,
  },
  {
    id: 5,
    width: 15,
    length: 18,
    quantity: 6000,
    prise: 19.34,
    cost: 21.34,
    marginedCost: 31.34,
    profit: 10,
    sum: 156.7,
  },
  // {
  //   prositResult: 40,
  //   sumResult: 839.15
  // }
];

//------------------------- универсальная функция создания таблицы ----------------------------
// создание таблицы:
// 1) получение данных,
// 2) подготовка данных (пререндер),
// 3) формирование head (если есть) c классами,
// 4) формирование строк c классами,
// 5) создание таблицы.

function createTable(
  table,
  tableData,
  tableHeadData = false,
  inputs = false,
  tableResRow = false
) {
  // table - html элемент, таблица, либо тело таблицы;
  // tableData - массив объектов с данными;
  // tableHead - массив с названиями столбцов;
  // tableResRow - объект с данными;
  // inputs - массив объектов, в объекте: номер столбца, классы, атрибуты, значения;

  // 1) получение данных:

  // 2) подготовка данных (пререндер):
  let tableBody = table;
  tableBody.innerHTML = "";
  const tableDataCopy = [...tableData];
  
  if (tableHeadData) {
    const tableHead = document.createElement("thead");
    const tableHeadRowEl = document.createElement("tr");
    
    tableHead.classList.add("table__head");
    tableHeadRowEl.classList.add("table__row");
    tableHead.append(tableHeadRowEl);
    table.append(tableHead);
    
    for (let i = 0; i < tableHeadData.length; i++) {
      const tableHeadColumn = document.createElement("th");
      tableHeadColumn.classList.add(`table__column_${i + 1}`);
      tableHeadColumn.textContent = tableHeadData[i];
      tableHeadRowEl.append(tableHeadColumn);
    }
    
    const tablebody = document.createElement("thead");
    tableBody = tablebody;
    table.append(tablebody);
  }


  tableDataCopy.forEach((item) => {
    // 3) формирование head (если есть) c классами:

    // 4) формирование строк c классами:
    const tableBodyRow = document.createElement("tr");
    tableBodyRow.classList.add("table__row");
    tableBody.append(tableBodyRow);

    let colNumber = 0;
    for (let key in item) {
      colNumber++;
      const tableColumn = document.createElement("td");
      tableColumn.classList.add(`table__column`, `table__column_${colNumber}`);
      tableColumn.textContent = item[key];
      tableBodyRow.append(tableColumn);

      if (inputs) {
        inputs.forEach((el) => {
          if (colNumber == el.numberColumn) {
            const input = document.createElement("input");
            input.classList.add("table__cell-frame");
            input.setAttribute("type", "number");
            input.setAttribute("value", item[key]);
            tableColumn.textContent = "";
            tableColumn.append(input);
          }
        });
      }
      // if (inputs) {
      //   for (let i = 0; i < inputs.length; i++) {
      //     if (key == inputs[i].numberColumn) {
      //       const input = document.createElement("input");
      //       input.classList.add("table__input");
      //       input.setAttribute("type", "number");
      //       input.setAttribute("value", item[key]);
      //       tableColumn.append(input);
      //     }
      //   }
      // }
    }
  });
}

const variant1 = document.querySelector(".variant_1");
const table2 = variant1.querySelector(".table__body_knives_res");
const table3 = variant1.querySelector(".table__body_calculation");

const inputs1 = [
  {
    numberColumn: 1,
    classInput: "table__input",
    type: "number",
    value: 10,
  },
];
const inputsForTable = [];
variantTableCalculationData.forEach((item) => {
  let obj = {
    numberColumn: 7,
    classInput: "table__input",
    type: "number",
    value: item.marginedCost,
  };
  inputsForTable.push(obj);
});

// let headsForTable = []
// функция формирования заголовков для таблицы ножей:
function createKnifesTableHead(variantTableKnivesData) {
  const arr = [];
  const obj1 = variantTableKnivesData[0];
  arr.push(`№`);
  arr.push(`Что берем`);
  arr.push(`Тип картона`);
  arr.push(`Кол-во, шт`);
  for (let i = 0; i < Object.keys(obj1).length - 4; i++) {
    arr.push(`Нож №${i + 1}`);
  }
  return arr;
}
const headsForTable = createKnifesTableHead(variantTableKnivesData);
console.log(headsForTable);

createTable(variantTableKnives, variantTableKnivesData, headsForTable);
createTable(variantTableKnivesRes, variantTableKnivesResData);
createTable(
  variantTableCalculation,
  variantTableCalculationData,
  false,
  inputsForTable
);

//------------------------- end универсальная функция создания таблицы ----------------------------

// ---------------------------setCastomInputsEvents:-------------------------
//обрабатываем события кастомных инпутов:
function setCastomInputsEvents() {
  // для селектов:
  const selects = document.querySelectorAll(".my-select");
  if (selects) {
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
  }

  const datePicker = document.querySelectorAll(".input_date");
  if (datePicker) {
    datePicker.forEach((item) => {
      const input = item.querySelector("input");
      item.addEventListener("click", (event) => {
        item.classList.add("input_date_active");
        input.value = new Date().toISOString().slice(0, 10); //удаляет время
      });
    });
  }
  // .input__datepicker

  //для инпутов:
  const inputFields = document.querySelectorAll(".input_search-field");
  if (inputFields) {
    inputFields.forEach((item) => {
      item.addEventListener("click", (event) => {
        item.classList.add("input_search-field_active");
      });
      item.querySelector("input").addEventListener("input", function () {
        if (item.querySelector("input").value.trim() !== "") {
          item.classList.add("input_search-field_active");
        }
      });
      document.addEventListener("click", function (e) {});
    });
  }

  //удаление классов при смене фокуса:
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

// событие на активацию кнопики распечатки этикеток:
const inputLabels = document.querySelector("#input-labels");
const btnPrintLabels = document.querySelector("#btn-print-labels");

if (inputLabels) {
  inputLabels.addEventListener("input", (event) => {
    if (inputLabels.value.trim() !== "") {
      btnPrintLabels.classList.remove("btn_disabled");
    } else {
      btnPrintLabels.classList.add("btn_disabled");
    }
  });
}

// ---------------------------end setCastomInputsEvents:-------------------------

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

//--------------------------getSelectLi:-------------------------
//получаем li для кастомного селекта:
function getSelectLi(field) {
  const item = document.createElement("li");
  item.classList.add("my-select__item");
  item.textContent = field;
  return item;
}
//--------------------------end getSelectLi:-------------------------

//--------------------------getCastomSelect:-------------------------
//получаем кастомный селект:
function getCastomSelect(arr, select) {
  select.innerHTML = ""; // очищаем тело таблицы
  // console.log(contractorsSelectUl);
  let copyArr = [...arr]; // создаем копию массива

  // рендерим всю таблицу
  for (const el of copyArr) {
    const item = getSelectLi(el);
    select.append(item); // добавление контрагента в таблицу
  }
}
//--------------------------end getCastomSelect:-------------------------

// simplebar();

// console.log(contractorsList);

//--------------------------crateResultTable:-------------------------

// функция формирования результирующей таблицы
function crateResultTable(arr) {
  const copyArr = [...arr];
  copyArr.forEach((cartonObj) => {
    // добавляем в объект уникальное имя
    cartonObj.idName = `${cartonObj.name} - ${cartonObj.typeCarton} - ${cartonObj.width} x ${cartonObj.lengthCarton} - ${cartonObj.price}$`;
  });
  const unicNamesCarton = [
    ...new Set(copyArr.map((cartonObj) => cartonObj.idName)),
  ]; // формируем массив уникальных названий
  CartonListForInput = [
    ...new Set(copyArr.map((cartonObj) => cartonObj.typeCarton)),
  ]; // формируем массив уникальных названий
  // console.log(CartonListForInput);

  // фильтруем результирующий массив:
  for (let i = 0; i < unicNamesCarton.length; i++) {
    let filterList = copyArr.filter(
      // фильтруем по уникальному названию
      (cartonObj) => cartonObj.idName === unicNamesCarton[i]
    );

    let quantity = filterList.reduce(
      // считаем остатки картона на складе
      (acc, cartonObj) => acc + cartonObj.coming - cartonObj.expense,
      0
    );
    const unicObj = {
      // создаем объект с уникальным названием для рендера результирующей таблицы
      idName: unicNamesCarton[i],
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
//--------------------------end crateResultTable:-------------------------

crateResultTable(cartonList);
getCastomSelect(ContractorsListForInput, contractorsSelectUl);
getCastomSelect(CartonListForInput, cartonTypesSelectUl);

// Добавляем событие на кнопку "Добавить контрагента":
// const addRowBtn = document.getElementById("btn-add-row");
// addRowBtn.onclick = function () {
//   maxId += 1;
//   const item = createRowForm(maxId);
//   item.scrollIntoView(); // переход к созданной строке
// };

//-------------------------------preRender-----------------------------

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

let numberWarehouseTableRow = 0;
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

  numberWarehouseTableRow++;
  tableNumber.textContent = numberWarehouseTableRow;
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
//-------------------------------end preRender-----------------------------

//-------------------------------renderWarehouseTable:-------------------------
// рендерим результирующую таблицу:
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
//-------------------------------end renderWarehouseTable:-------------------------

renderWarehouseTable(cartonListForRender);
simplebar();
setCastomInputsEvents();

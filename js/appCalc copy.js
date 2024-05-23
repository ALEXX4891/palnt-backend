////@ts-check // проверка ошибок типизации

const editIcon = `<svg class="btn-edit" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M18.6665 20H3.99984V5.33333H12.8132L14.1465 4H3.99984C3.64622 4 3.30708 4.14048 3.05703 4.39052C2.80698 4.64057 2.6665 4.97971 2.6665 5.33333V20C2.6665 20.3536 2.80698 20.6928 3.05703 20.9428C3.30708 21.1929 3.64622 21.3333 3.99984 21.3333H18.6665C19.0201 21.3333 19.3593 21.1929 19.6093 20.9428C19.8594 20.6928 19.9998 20.3536 19.9998 20V10L18.6665 11.3333V20Z"
    fill="#225F0D" fill-opacity="0.75" />
  <path
    d="M22.3531 3.89338L20.1065 1.64671C20.0068 1.54673 19.8883 1.46741 19.7579 1.41328C19.6275 1.35916 19.4877 1.3313 19.3465 1.3313C19.2053 1.3313 19.0655 1.35916 18.935 1.41328C18.8046 1.46741 18.6862 1.54673 18.5865 1.64671L9.44648 10.84L8.70648 14.0467C8.67495 14.2022 8.67826 14.3626 8.71618 14.5167C8.7541 14.6707 8.82567 14.8143 8.92576 14.9374C9.02585 15.0604 9.15196 15.1597 9.29502 15.2282C9.43808 15.2967 9.59454 15.3326 9.75314 15.3334C9.83512 15.3424 9.91783 15.3424 9.99981 15.3334L13.2331 14.62L22.3531 5.41338C22.4531 5.31367 22.5324 5.19522 22.5866 5.0648C22.6407 4.93439 22.6686 4.79458 22.6686 4.65338C22.6686 4.51218 22.6407 4.37237 22.5866 4.24195C22.5324 4.11154 22.4531 3.99308 22.3531 3.89338ZM12.5398 13.3867L10.0998 13.9267L10.6665 11.5067L17.5465 4.58004L19.4265 6.46004L12.5398 13.3867ZM20.1798 5.70671L18.2998 3.82671L19.3331 2.77338L21.2265 4.66671L20.1798 5.70671Z"
    fill="#225F0D" fill-opacity="0.75" />
</svg>`;

const deleteIcon = `<svg class="popup-link btn-delete" href="#popup-del" width="24" height="24" viewBox="0 0 24 24" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M20.25 5.40002H16.5V4.65002C16.5 4.05329 16.2629 3.48099 15.841 3.05903C15.419 2.63708 14.8467 2.40002 14.25 2.40002H9.75C9.15326 2.40002 8.58097 2.63708 8.15901 3.05903C7.73705 3.48099 7.5 4.05329 7.5 4.65002V5.40002H3.75C3.55109 5.40002 3.36032 5.47904 3.21967 5.61969C3.07902 5.76035 3 5.95111 3 6.15002C3 6.34894 3.07902 6.5397 3.21967 6.68035C3.36032 6.82101 3.55109 6.90002 3.75 6.90002H4.5V20.4C4.5 20.7978 4.65804 21.1794 4.93934 21.4607C5.22064 21.742 5.60217 21.9 6 21.9H18C18.3978 21.9 18.7794 21.742 19.0607 21.4607C19.342 21.1794 19.5 20.7978 19.5 20.4V6.90002H20.25C20.4489 6.90002 20.6397 6.82101 20.7803 6.68035C20.921 6.5397 21 6.34894 21 6.15002C21 5.95111 20.921 5.76035 20.7803 5.61969C20.6397 5.47904 20.4489 5.40002 20.25 5.40002ZM9 4.65002C9 4.45111 9.07902 4.26035 9.21967 4.11969C9.36032 3.97904 9.55109 3.90002 9.75 3.90002H14.25C14.4489 3.90002 14.6397 3.97904 14.7803 4.11969C14.921 4.26035 15 4.45111 15 4.65002V5.40002H9V4.65002ZM18 20.4H6V6.90002H18V20.4ZM10.5 10.65V16.65C10.5 16.8489 10.421 17.0397 10.2803 17.1804C10.1397 17.321 9.94891 17.4 9.75 17.4C9.55109 17.4 9.36032 17.321 9.21967 17.1804C9.07902 17.0397 9 16.8489 9 16.65V10.65C9 10.4511 9.07902 10.2603 9.21967 10.1197C9.36032 9.97904 9.55109 9.90002 9.75 9.90002C9.94891 9.90002 10.1397 9.97904 10.2803 10.1197C10.421 10.2603 10.5 10.4511 10.5 10.65ZM15 10.65V16.65C15 16.8489 14.921 17.0397 14.7803 17.1804C14.6397 17.321 14.4489 17.4 14.25 17.4C14.0511 17.4 13.8603 17.321 13.7197 17.1804C13.579 17.0397 13.5 16.8489 13.5 16.65V10.65C13.5 10.4511 13.579 10.2603 13.7197 10.1197C13.8603 9.97904 14.0511 9.90002 14.25 9.90002C14.4489 9.90002 14.6397 9.97904 14.7803 10.1197C14.921 10.2603 15 10.4511 15 10.65Z"
    fill="#890000" />
</svg>`;

const saveIcon = `<svg class="btn-save" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M6 4.5C5.60217 4.5 5.22064 4.65804 4.93934 4.93934C4.65804 5.22064 4.5 5.60217 4.5 6V18C4.5 18.3978 4.65804 18.7794 4.93934 19.0607C5.22064 19.342 5.60217 19.5 6 19.5V14.25C6 13.6533 6.23705 13.081 6.65901 12.659C7.08097 12.2371 7.65326 12 8.25 12H15.75C16.3467 12 16.919 12.2371 17.341 12.659C17.7629 13.081 18 13.6533 18 14.25V19.5C18.3978 19.5 18.7794 19.342 19.0607 19.0607C19.342 18.7794 19.5 18.3978 19.5 18V8.4315C19.4999 8.03371 19.3418 7.65224 19.0605 7.371L16.629 4.9395C16.3478 4.65818 15.9663 4.50008 15.5685 4.5H15V6.75C15 7.34674 14.7629 7.91903 14.341 8.34099C13.919 8.76295 13.3467 9 12.75 9H9.75C9.15326 9 8.58097 8.76295 8.15901 8.34099C7.73705 7.91903 7.5 7.34674 7.5 6.75V4.5H6ZM9 4.5V6.75C9 6.94891 9.07902 7.13968 9.21967 7.28033C9.36032 7.42098 9.55109 7.5 9.75 7.5H12.75C12.9489 7.5 13.1397 7.42098 13.2803 7.28033C13.421 7.13968 13.5 6.94891 13.5 6.75V4.5H9ZM16.5 19.5V14.25C16.5 14.0511 16.421 13.8603 16.2803 13.7197C16.1397 13.579 15.9489 13.5 15.75 13.5H8.25C8.05109 13.5 7.86032 13.579 7.71967 13.7197C7.57902 13.8603 7.5 14.0511 7.5 14.25V19.5H16.5ZM3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H15.5685C16.3641 3.00017 17.127 3.31635 17.6895 3.879L20.121 6.3105C20.6836 6.87298 20.9998 7.63591 21 8.4315V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6Z"
    fill="#225F0D" fill-opacity="0.75" />
</svg>`;

const revertIcon = `<svg class="popup-link btn-revert" href="#popup-revert" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 5.35386H14.4615C15.9304 5.35386 17.3392 5.93738 18.3778 6.97604C19.4165 8.0147 20 9.42343 20 10.8923C20 12.3612 19.4165 13.7699 18.3778 14.8086C17.3392 15.8473 15.9304 16.4308 14.4615 16.4308H10.3077" stroke="#225F0D" stroke-opacity="0.75" stroke-width="2.30769" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M6.15385 9.50769L2 5.35384L6.15385 1.2" stroke="#225F0D" stroke-opacity="0.75" stroke-width="2.30769" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`;


// ----------------------simplebar:---------------------------------------
// function simplebar() {
if (document.querySelector(".my-simplebar-1")) {
  new SimpleBar(document.querySelector(".my-simplebar-1"), {
    scrollbarMaxSize: 80,
    autoHide: false,
    forceVisible: true,
  });
}

if (document.querySelector(".my-simplebar-2")) {
  new SimpleBar(document.querySelector(".my-simplebar-2"), {
    scrollbarMaxSize: 80,
    autoHide: false,
    forceVisible: true,
  });
}

// function initSimpleBar() {
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
// }
// initSimpleBar()


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
  // deleteCell.querySelector("svg").addEventListener("click", function () {
  //   item.remove();
  //   numberOrderTableRow--;
  // });
  let svgElement = deleteCell.querySelector("svg");
  if (svgElement) {
      svgElement.addEventListener("click", function () {
          item.remove();
          numberOrderTableRow--;
      });
  }

  numberOrderTableRow++;
  // numberCell.textContent = numberOrderTableRow;
  numberCell.textContent = numberOrderTableRow.toString();

  //присвоение инпутов ячейкам таблицы:
  widthCell.append(inputwidth);
  lengthCell.append(inputlength);
  quantityCell.append(inputquantity);

  //добвление формы в строку:
  item.append(numberCell, widthCell, lengthCell, quantityCell, deleteCell);

  // orderParamsTable.append(item); // добавление контрагента в таблицу
  const orderParamsTable = document.querySelector(".table__body_orderParams");
  if (orderParamsTable) {
    // Use orderParamsTable here
    orderParamsTable.append(item); // do not use it if it's null
  } else {
    console.error("orderParamsTable not found");
  }
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

/**
 * 
 * @param {Object?} table 
 * @param {Array?} tableData 
 * @param {Array?} tableHeadData 
 * @param {Array?} inputs 
 * @param {Object?} tableResRow 
 * @param {Array?} btns 
 */

function createTable(
  table,
  tableData,
  tableHeadData,
  inputs,
  tableResRow,
  btns,
) {
  // console.log('table: ', table);
  // console.log('tableData: ', tableData);
  // console.log('tableHeadData: ', tableHeadData);
  // console.log('inputs: ', inputs);
  // console.log('tableResRow: ', tableResRow);
  // console.log('btns: ', btns);
  
  // table - html элемент, таблица, либо тело таблицы;
  // tableData - массив объектов с данными;
  // tableHead - массив с названиями столбцов;
  // tableResRow - объект с данными, номер столбца - содержимое и классы;
  // inputs - массив объектов, в объекте: номер столбца, классы, атрибуты, значения;
  // btns - массив объектов, в объекте: номер столбца, содержимое кнопки, классы;

  table.innerHTML = ""; // очищаем тело таблицы
  const tableDataCopy = [...tableData]; // копия массива с данными
  const columnsQuantity = Object.keys(tableDataCopy[0]).length; // количество столбцов в таблице

  // если есть названия столбцов:
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
    table.append(tableHead);
  }

  // формирование строк c классами:
  tableDataCopy.forEach((item) => {
    const tableBodyRow = document.createElement("tr");
    tableBodyRow.classList.add("table__row");
    table.append(tableBodyRow);

    let colNumber = 0; // счетчик столбцов
    for (let key in item) {
      colNumber++; // инкремент счетчика столбцов
      const tableColumn = document.createElement("td");
      tableColumn.classList.add(`table__column`, `table__column_${colNumber}`);
      tableColumn.textContent = item[key];
      tableBodyRow.append(tableColumn);

      if (inputs) {
        // если есть инпуты:
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

      if (btns) {
        // если есть кнопки:
        btns.forEach((el) => {
          if (colNumber == el.numberColumn) {
            tableColumn.innerHTML = el.button;
            tableColumn.classList.add(el.class);
          }
        });
      }
    }
  })
  if (tableResRow) {
    const tableResRowEl = document.createElement("tr");    
    tableResRowEl.classList.add("table__row", tableResRow.class);
    table.append(tableResRowEl);
    for (let i = 0; i < columnsQuantity; i++) {
      const tableResColumn = document.createElement("td");
      tableResColumn.classList.add('table__column', `table__column_${i + 1}`);

      for (let key in tableResRow) {
        if ((i + 1) == Number(key)) {
          tableResColumn.textContent = tableResRow[key];
        }
      }
      tableResRowEl.append(tableResColumn);
    }
    table.append(tableResRowEl);
  }
}

//------------------------- end универсальная функция создания таблицы ----------------------------

//------------------------- формирование таблиц: ----------------------------


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

const tableResRow = {
  7: "ИТОГО",
  8: 40,
  9: 839.15,
  class: "table__row_res",
};

// const btn = [
//   {
//     numberColumn: 7,
//     class: "table__small-btn",
//     button: saveIcon,
//   },
//   {
//     numberColumn: 8,
//     class: "table__small-btn",
//     button: deleteIcon,
//   },
// ]

const headsForTable = createKnifesTableHead(variantTableKnivesData);

crateResultTable(cartonList);
// createTable(tableWarehouseBody, TotalTableArr, null, null, null, btn);
createTable(tableWarehouseBody, TotalTableArr, null, null, null, null);
createTable(variantTableKnives, variantTableKnivesData, headsForTable, null, null, null);
createTable(variantTableKnivesRes, variantTableKnivesResData, null, null, null, null);
createTable(
  variantTableCalculation,
  variantTableCalculationData,
  null,
  inputsForTable,
  tableResRow,
  null
);

//------------------------- end формирование таблиц: ----------------------------

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
      // item.querySelector("input").addEventListener("input", function () {
      //   if (item.querySelector("input").value.trim() !== "") {
      //     item.classList.add("input_search-field_active");
      //   }
      // });
      item.querySelector("input")?.addEventListener("input", function () {
        if (item.querySelector("input")?.value.trim() !== "") {
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
/**
 * 
 * @param {Array} arr 
 * @param {*} select 
 */
function getCastomSelect(arr, select) {
  // select.innerHTML = ""; // очищаем тело таблицы
  // console.log(contractorsSelectUl);
  let copyArr = [...arr]; // создаем копию массива

  // рендерим всю таблицу
  for (const el of copyArr) {
    const item = getSelectLi(el);
    // console.log(item);
    select.append(item); // добавление контрагента в таблицу
  }
  // initSimpleBar()
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
    cartonObj.idName = `${cartonObj.name} - ${cartonObj.typeCarton} - ${cartonObj.widthCarton} x ${cartonObj.lengthCarton} - ${cartonObj.price}$`;
    // console.log(cartonObj.idName);
  });
  const unicNamesCarton = [
    ...new Set(copyArr.map((cartonObj) => cartonObj.idName)),
  ]; // формируем массив уникальных названий
  CartonListForInput = [
    ...new Set(copyArr.map((cartonObj) => cartonObj.typeCarton)),
  ]; // формируем массив уникальных названий
  // console.log(CartonListForInput);

  // фильтруем результирующий массив:
  // let idNumber = 1;
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
      // idName: unicNamesCarton[i],
      id: i + 1,
      name: filterList[0].name,
      typeCarton: filterList[0].typeCarton,
      width: filterList[0].widthCarton,
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
console.log(contractorsSelectUl);
// console.log(TotalTableArr);
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

// function preRender(arr) {
//   // пререндер нужен если мы хотим преобразовать данные перед рендером
//   let copyArr = [...arr];

//   for (const cartonObj of copyArr) {
//     let cartonObjForRender = {
//       name: cartonObj.name,
//       typeCarton: cartonObj.typeCarton,
//       width: cartonObj.width,
//       lengthCarton: cartonObj.lengthCarton,
//       price: cartonObj.price,
//       quantity: cartonObj.quantity,
//       cost: cartonObj.cost,
//     };
//     cartonListForRender.push(cartonObjForRender);
//   }
// }
// preRender(TotalTableArr);

// let numberWarehouseTableRow = 0;
// function getWarehouseRow(cartonObj) {
//   const item = document.createElement("tr"),
//     tableNumber = document.createElement("td"),
//     tableDataName = document.createElement("td"),
//     tableDataType = document.createElement("td"),
//     tableDataWidth = document.createElement("td"),
//     tableDataLength = document.createElement("td"),
//     tableDataPrice = document.createElement("td"),
//     tableDataQuantity = document.createElement("td"),
//     tableDataCost = document.createElement("td");

//   item.classList.add("table__row");
//   tableNumber.classList.add("table__column", "table__column_1");
//   tableDataName.classList.add("table__column", "table__column_2");
//   tableDataType.classList.add("table__column", "table__column_3");
//   tableDataWidth.classList.add("table__column", "table__column_4");
//   tableDataLength.classList.add("table__column", "table__column_5");
//   tableDataPrice.classList.add("table__column", "table__column_6");
//   tableDataQuantity.classList.add("table__column", "table__column_7");
//   tableDataCost.classList.add("table__column", "table__column_8");

//   numberWarehouseTableRow++;
//   tableNumber.textContent = numberWarehouseTableRow;
//   tableDataName.textContent = cartonObj.name;
//   tableDataType.textContent = cartonObj.typeCarton;
//   tableDataWidth.textContent = cartonObj.width;
//   tableDataLength.textContent = cartonObj.lengthCarton;
//   tableDataPrice.textContent = cartonObj.price;
//   tableDataQuantity.textContent = cartonObj.quantity;
//   tableDataCost.textContent = cartonObj.cost;

//   // присваеваем id контрагента элементу и добавляем информацию в таблицу:
//   item.append(tableNumber);
//   item.append(tableDataName);
//   item.append(tableDataType);
//   item.append(tableDataWidth);
//   item.append(tableDataLength);
//   item.append(tableDataPrice);
//   item.append(tableDataQuantity);
//   item.append(tableDataCost);

//   // console.log(item);
//   return item;
// }
//-------------------------------end preRender-----------------------------

//-------------------------------renderWarehouseTable:-------------------------
// рендерим результирующую таблицу:
// function renderWarehouseTable(arr) {
//   tableWarehouseBody.innerHTML = ""; // очищаем тело таблицы
//   let copyList = [...arr]; // создаем копию массива

//   // рендерим всю таблицу
//   for (const cartonrObj of copyList) {
//     const item = getWarehouseRow(cartonrObj);
//     // console.log(item);

//     tableWarehouseBody.append(item); // добавление контрагента в таблицу
//   }
// }
//-------------------------------end renderWarehouseTable:-------------------------

// renderWarehouseTable(cartonListForRender);
// initSimpleBar();
setCastomInputsEvents();

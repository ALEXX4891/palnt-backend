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
          console.log(1);
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
  console.log(item);
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

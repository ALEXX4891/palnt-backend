////@ts-check // проверка ошибок типизации
// --------------------------simplebar:---------------------------------------
const simpleBar = new SimpleBar(document.querySelector(".my-simplebar-1"), {
  scrollbarMaxSize: 80,
  autoHide: false,
  forceVisible: true,
});
simpleBar.getScrollElement().scrollTo(0, 0);
// --------------------------end simplebar:---------------------------------------

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

//--------------------------приложение----------------------------
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

const tableBody = document.querySelector(".table__body_warehouse");
const tableBodyWrapper = document.querySelector(".table-body-wrapper");
const cartonSearch = document.getElementById("cartonSearch");
// const toggleBtn = document.querySelector(".toggle__checkbox");

//--------------------------Запрос к БД----------------------------
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

let cartonListForRender = [...infoList];
// console.log(cartonListForRender);

let maxId = 0;
function getMaxId(arr) {
  let copy = [...arr];
  const ids = copy.map((object) => {
    return object.idCarton;
  });
  maxId = Math.max(...ids);
  // console.log(maxId);
  return maxId;
}

// Добавляем событие на кнопку "Добавить контрагента":
const addCartonBtn = document.getElementById("addCartonBtn");
addCartonBtn.onclick = function () {
  maxId += 1;
  const item = createRowForm(maxId);
  item.scrollIntoView(); // переход к созданной строке
};

// //функция переключения активности таблицы, так-же скрывает кнопку "добавить контрагента":
// function toggleBtnFunc() {
//   if (toggleBtn.checked) {
//     isActive = 0;
//     addCartonBtn.parentElement.style.display = "none"; // скрываем кнопку
//     tableBodyWrapper.style.height = "calc(100vh - 300px)"; // увеличиваем высоту таблицы
//     tableBodyWrapper.style.marginBottom = "0"; // убираем отступ снизу таблицы
//     getMaxId(cartonListForRender); // поиск максимального id в списке контрагентов
//     simpleBar.getScrollElement().scrollTo(0, 0);
//   }
//   if (!toggleBtn.checked) {
//     isActive = 1;
//     addCartonBtn.parentElement.style.display = "block"; // показываем кнопку
//     tableBodyWrapper.style.height = "calc(100vh - 360px)"; // уменьшаем высоту таблицы
//     tableBodyWrapper.style.marginBottom = "30px"; // добавляем отступ снизу таблицы
//     getMaxId(cartonListForRender); // поиск максимального id в списке контрагентов
//     simpleBar.getScrollElement().scrollTo(0, 0);
//   }
// }

// //логика фильтрации активных и не активных контрагентов:
// toggleBtn.addEventListener("click", function () {
//   toggleBtnFunc(); //проверить выбранную активность контрагентов
//   renderTable(cartonListForRender, isActive); //рендер таблицы контрагнетов
//   setPopupEvent(); // навесить заново события открытия и закрытия модльного окна
//   setBtnEvents(); // навесить заново события удаления и редактирования контрагента
// });

function setBtnEvents() {
  let delBtns = document.querySelectorAll(".btn-delete");
  // console.log(delBtns);
  if (delBtns) {
    delBtns.forEach((item) => {
      item.addEventListener("click", function () {
        const row = this.closest(".table__row");
        row.classList.add("table__row_deletable");
        setNoActive(row);
      });
    });
  }

  // // добавляем обработчик на кнопку - редактирование контрагента
  // let revertBtns = document.querySelectorAll(".btn-revert");
  // if (revertBtns) {
  //   revertBtns.forEach((item) => {
  //     item.addEventListener("click", function () {
  //       const row = this.closest(".table__row");
  //       row.classList.add("table__row_deletable");
  //       setActive(row);
  //     });
  //   });
  // }

  // добав обработчик на кнопку - редактирование контрагента
  let editBtns = document.querySelectorAll(".btn-edit");
  if (editBtns) {
    editBtns.forEach((item) => {
      item.addEventListener("click", function () {
        const row = this.closest(".table__row");
        editItem(row);
      });
    });
  }

  let saveBtns = document.querySelectorAll(".btn-save");
  if (saveBtns) {
    saveBtns.forEach((item) => {
      item.addEventListener("click", function () {
        // console.log("save");
        const row = this.closest(".table__row");
        saveItem(row);
      });
    });
  }
}
getMaxId(cartonListForRender);

function filterTable(search, arr) {
  let copy = [...arr];
  let res = copy.filter(function (obj) {
    return Object.keys(obj).some(function (key) {
      return (
        obj[key]
          .toString()
          .toLowerCase()
          .indexOf(search.toLowerCase().trim()) != -1
      );
    });
  });
  return res;
  // return filterTableActive(isActive, "isActive", res); //?????????????????????isActive
}

// function filterTableActive(isActive, param, arr) { //?????????????????????isActive
//   let copy = [...arr];
//   return copy.filter((oneCarton) => oneCarton[param] == isActive);
// }

//рендер подготовленного массива + фильтрация по всем колонкам.
function renderTable(arr) {
  //??????????????????????????????????????
  tableBody.innerHTML = ""; // очищаем тело таблицы
  let copyArr = [...arr]; // создаем копию массива

  // Фильтрация таблицы по всем столбцам:
  // if (cartonSearch.value.trim() !== "") {
  //   copyArr = filterTable(cartonSearch.value, copyArr);
  // }

  // Фильтрация массива по активности:
  // copyArr = filterTableActive(isActive, "isActive", copyArr);

  // if (faculty.value.trim() !== "") {
  //   copyArr = filterTable(faculty, "faculty", copyArr);
  // }

  // рендерим всю таблицу
  for (const cartonObj of copyArr) {
    const item = getRow(cartonObj); //??????????????????????????????????????????????
    tableBody.append(item); // добавление контрагента в таблицу
  }
  setBtnEvents();
}
// console.log(cartonListForRender);
const newArr = []
for (const carton of cartonListForRender) {
  newArr.push(preRender(carton));
}
// const Arr = [...cartonListForRender.forEach((carton) => {
  // return preRender(carton);
// })];
// let copyTableDataCopyObj = preRender(tableDataCopyObj);
renderTable(newArr);

// renderTable(cartonListForRender);
setBtnEvents();
setPopupEvent();

// // ---------------------------------- сортировка таблицы -----------------------------
// // Функция сортировки массива контрагентов, события кликов на соответствующие колонки:
// let sortDirectionId = true; // индикотор сортировки по id
// let sortDirectionName = true; // индикатор сортировки по имени
// let iconTransmorm = "rotate(0deg)"; // положения иконки сортировки
// const namecartonBtn = document.getElementById("namecartonBtn"); // кнопка сортировки - поле таблицы
// const namecartonBtnIcon = namecartonBtn.querySelector("svg"); // иконка сортировки по имени
// const idCartonBtn = document.getElementById("idCartonBtn"); // кнопка сортировки - поле таблицы
// const idCartonBtnIcon = idCartonBtn.querySelector("svg"); // иконка сортировки по id

// const sortArr = (arr, property, sortDirection, isActive) => {
//   // функция сортировки
//   arr.sort((a, b) =>
//     (sortDirection ? a[property] < b[property] : a[property] > b[property])
//       ? -1
//       : 1
//   );
//   renderTable(arr, isActive);
//   setPopupEvent();
// };

// // обработчик события сортировки:
// namecartonBtn.addEventListener("click", () => {
//   // сортировка по имени при клике
//   sortDirectionName = !sortDirectionName; // меняем индикатор сортировки
//   iconTransmorm = sortDirectionName ? "rotate(0deg)" : "rotate(180deg)"; // задаем угол поворота иконки
//   namecartonBtnIcon.style.transform = iconTransmorm; // меняем положение иконки
//   sortArr(cartonListForRender, "name", sortDirectionName, isActive); // сортируем массив
// });

// idCartonBtn.addEventListener("click", () => {
//   // сортировка по id при клике
//   sortDirectionId = !sortDirectionId;
//   iconTransmorm = sortDirectionId ? "rotate(0deg)" : "rotate(180deg)";
//   idCartonBtnIcon.style.transform = iconTransmorm;
//   sortArr(cartonListForRender, "idCarton", sortDirectionId, isActive);
// });

// // Фильтрация массива контрагентов при вводе текста инпут, ищет по всем столбцам
// cartonSearch.addEventListener("input", () => {
//   renderTable(cartonListForRender, isActive); //рендер таблицы контрагнетов
//   setPopupEvent(); // навесить заново события открытия и закрытия модльного окна
// });
// // ----------------------------------end сортировка таблицы -----------------------------

// ----------------- события на кнопки в таблице ------------------
function setNoActive(item) {
  const agreeBtn = document.querySelector("#btn-delete");
  const popup = agreeBtn.closest(".popup__content");
  const title = popup.querySelector(".popup__title");
  title.textContent = cartonListForRender.filter(
    (carton) => carton.idCarton == item.getAttribute("id")
  )[0].name;
  const id = item.getAttribute("id");

  agreeBtn.addEventListener("click", function (e) {
    cartonListForRender.filter(
      // смена активности в массиве контрагентов
      (carton) => carton.idCarton == id
    )[0].isActive = 0;

    item.remove();
    popupClose(e.target.closest(".popup"));

    options = {
      function: "noActive",
      table: "carton",
      update: "UPDATE",
      idCarton: id,
      isActive: "0",
    };
    fetchToDB(options); // смена активности в БД
  });
}

function setActive(item) {
  const agreeBtn = document.querySelector("#btn-revert");
  const popup = agreeBtn.closest(".popup__content");
  const title = popup.querySelector(".popup__title");
  title.textContent = cartonListForRender.filter(
    (carton) => carton.idCarton == item.getAttribute("id")
  )[0].name;
  const id = item.getAttribute("id");

  agreeBtn.addEventListener("click", function (e) {
    cartonListForRender.filter(
      (carton) => carton.idCarton == id
    )[0].isActive = 1;
    item.remove();
    popupClose(e.target.closest(".popup"));

    options = {
      function: "goActive",
      table: "carton",
      idCarton: id,
      isActive: "1",
    };
    fetchToDB(options);
  });
}

function editItem(item) {
  console.log(item);
  const id = item.getAttribute("id");
  const cartonObj = cartonListForRender.filter(
    (carton) => carton.idCarton == id
  );
  // console.log(cartonObj);
  const newItem = createRowForm(id, cartonObj);
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  item.replaceWith(newItem);
  setPopupEvent(); // требуется для корректной работы событий
}

function saveItem(item) {
  const id = item.querySelector(".table__column_1").innerText;
  const name = item
    .querySelector(".table__column_2")
    .querySelector(".table__input_name").value;
  const width = item
    .querySelector(".table__column_2")
    .querySelector(".table__input_width").value;
  const length = item
    .querySelector(".table__column_2")
    .querySelector(".table__input_length").value;
  const type = item
    .querySelector(".table__column_3")
    .querySelector("input").value;
  const coming = item
    .querySelector(".table__column_4")
    .querySelector("input").value;
  const expense = item
    .querySelector(".table__column_5")
    .querySelector("input").value;
  const price = item
    .querySelector(".table__column_6")
    .querySelector("input").value;
  const cost = item.querySelector(".table__column_7").innerText;
  const contractor = item
    .querySelector(".table__column_8")
    .querySelector("input").value;
  const carton = {
    idCarton: Number(id),
    name: `${name} ${width} x ${length}`,
    type: type,
    coming: coming,
    expense: expense,
    price: price,
    cost: cost,
    contractor: contractor,
  };
  // console.log(carton);

  //проверки на заполянность полей:
  // if (!Number.isInteger(carton.taxNumber)) {
  //   alert("Номер ИНН должен быть числом");
  //   return;
  // }

  if (
    !name ||
    !width ||
    !length ||
    !type ||
    !coming ||
    !expense ||
    !price ||
    !contractor
  ) {
    alert("Заполните все поля таблицы");
    return;
  }

  // компановка параметров для запроса к БД:
  options = {
    table: "carton",
    idCarton: id,
    name: name,
    widthCarton: Number(width),
    lengthCarton: Number(length),
    typeCarton: type,
    coming: Number(coming),
    expense: Number(expense),
    price: parseFloat(price),
    nameContractor: contractor,
  };

  console.log(options);

  // определяем надо обновить контрагента или добавить нового (по idCarton):
  const index = cartonListForRender.findIndex(
    (carton) => carton.idCarton == id
  );
  if (index !== -1) {
    cartonListForRender[index] = carton; // обновление текущего контрагента
    options.function = "update"; // определение типа запроса
  } else {
    cartonListForRender.push(carton); // добавление нового контрагента
    options.function = "create"; // определение типа запроса
  }

  const newItem = getRow(carton); // создаем строку с новым контрагентом!!!!!!!!!!!!!!!!!!!!!!!!
  item.replaceWith(newItem); // заменяем старую строку на новую
  setPopupEvent(); // требуется для корректной работы событий
  setBtnEvents();
  fetchToDB(options); // отправляем запрос к БД
}

// ----------------- end события на кнопки в таблице ------------------

// функция добавления сразу множества атрибутов:
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// ---------------------------создание формы для добавления/редактирования контрагента:-------------------------
function createRowForm(maxId, cartonObj) {
  console.log(cartonObj);
  const item = document.createElement("tr"),
    tableFormId = document.createElement("td"),
    tableFormName = document.createElement("td"),
    tableFormType = document.createElement("td"),
    tableFormComing = document.createElement("td"),
    tableFormExpense = document.createElement("td"),
    tableFormPrice = document.createElement("td"),
    tableFormCost = document.createElement("td"),
    tableFormContractor = document.createElement("td"),
    tableFormSaveCell = document.createElement("td"),
    tableFormEmptyCell = document.createElement("td"),
    tableFormInputName = document.createElement("input"),
    tableFormInputWidth = document.createElement("input"),
    tableFormInputLength = document.createElement("input"),
    tableFormInputType = document.createElement("input"),
    tableFormInputComing = document.createElement("input"),
    tableFormInputExpense = document.createElement("input"),
    tableFormInputPrice = document.createElement("input"),
    tableFormInputContractor = document.createElement("input");

  //присвоение классов созданным элементам:
  item.classList.add("table__row", "table__row_editable");

  tableFormId.classList.add("table__column", "table__column_1");
  tableFormName.classList.add("table__column", "table__column_2");
  tableFormType.classList.add("table__column", "table__column_3");
  tableFormComing.classList.add("table__column", "table__column_4");
  tableFormExpense.classList.add("table__column", "table__column_5");
  tableFormPrice.classList.add("table__column", "table__column_6");
  tableFormCost.classList.add("table__column", "table__column_7");
  tableFormContractor.classList.add("table__column", "table__column_8");
  tableFormSaveCell.classList.add(
    "table__column",
    "table__column_9",
    "table__small-btn"
  );
  tableFormEmptyCell.classList.add(
    "table__column",
    "table__column_10",
    "table__small-btn"
  );

  //присвоение классов созданным инпутам:
  tableFormInputName.classList.add("table__input", "table__input_name");
  tableFormInputWidth.classList.add("table__input", "table__input_width");
  tableFormInputLength.classList.add("table__input", "table__input_length");
  tableFormInputType.classList.add("table__input");
  tableFormInputComing.classList.add("table__input");
  tableFormInputExpense.classList.add("table__input");
  tableFormInputPrice.classList.add("table__input");
  tableFormInputContractor.classList.add("table__input");

  if (cartonObj) {
    console.log(cartonObj);
    tableFormInputName.value = cartonObj[0].name;
    tableFormInputWidth.value = cartonObj[0].widthCarton;
    tableFormInputLength.value = cartonObj[0].lengthCarton;
    tableFormInputType.value = cartonObj[0].typeCarton;
    tableFormInputComing.value = cartonObj[0].coming;
    tableFormInputExpense.value = cartonObj[0].expense;
    tableFormInputPrice.value = cartonObj[0].price;
    tableFormInputContractor.value = cartonObj[0].nameContractor;
    tableFormCost.innerText = cartonObj[0].price * cartonObj[0].coming;
  }

  //присвоение атрибутов созданным инпутам:
  setAttributes(tableFormInputName, {
    type: "text",
    name: "organization",
    value: "",
    required: true,
  });
  setAttributes(tableFormInputWidth, {
    type: "text",
    name: "Width",
    value: "",
    required: true,
  });
  setAttributes(tableFormInputLength, {
    type: "text",
    name: "Length",
    value: "",
    required: true,
  });
  setAttributes(tableFormInputType, {
    type: "text",
    name: "Type",
    value: "",
    required: true,
  });
  setAttributes(tableFormInputComing, {
    type: "text",
    name: "Coming",
    value: "",
    required: true,
  });
  setAttributes(tableFormInputExpense, {
    type: "text",
    name: "Expense",
    value: "",
    required: true,
  });
  setAttributes(tableFormInputPrice, {
    type: "text",
    name: "Price",
    value: "",
    required: true,
  });
  setAttributes(tableFormInputContractor, {
    type: "text",
    name: "Contractor",
    value: "",
    required: true,
  });
  // console.log("maxId: ", maxId);
  // console.log("cartonObj: ", cartonObj);
  // console.log("item: ", item);

  // присваеваем значения внутренним элементам формы:
  tableFormSaveCell.innerHTML = saveIcon;
  tableFormId.innerText = maxId;

  //присвоение инпутов ячейкам таблицы:
  tableFormName.append(tableFormInputName);
  tableFormName.append(tableFormInputWidth);
  tableFormName.append(tableFormInputLength);

  tableFormType.append(tableFormInputType);
  tableFormComing.append(tableFormInputComing);
  tableFormExpense.append(tableFormInputExpense);
  tableFormPrice.append(tableFormInputPrice);
  tableFormContractor.append(tableFormInputContractor);

  //добвление формы в строку:
  item.append(tableFormId);
  item.append(tableFormName);
  item.append(tableFormType);
  item.append(tableFormComing);
  item.append(tableFormExpense);
  item.append(tableFormPrice);
  item.append(tableFormCost);
  item.append(tableFormContractor);
  item.append(tableFormSaveCell);
  item.append(tableFormEmptyCell);

  // tableBody.append(item); // добавление контрагента в таблицу
  setBtnEvents();
  return item;
}
// ---------------------------end создание формы для добавления/редактирования контрагента:-------------------------

//--------------------------разное----------------------------

const inputSearch = document.querySelectorAll(".input_search");
if (inputSearch) {
  inputSearch.forEach((item) => {
    item.querySelector("input").addEventListener("input", function () {
      if (item.querySelector("input").value.trim() !== "") {
        item.classList.add("input_search_active");
        // console.log(1);
      }
    });
    document.addEventListener("click", function (e) {
      if (
        item.querySelector("input") == e.target &&
        item.querySelector("input").value.trim() == ""
      ) {
        item.classList.add("input_search_active");
      } else if (
        item.querySelector("input") !== e.target &&
        item.querySelector("input").value.trim() == ""
      ) {
        item.classList.remove("input_search_active");
      }
    });
  });
}

const inputFields = document.querySelectorAll(".input_search-field");

if (inputFields) {
  inputFields.forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.add("input_search-field_active");
    });
  });
}

const inputDate = document.querySelectorAll(".input_date");
if (inputDate) {
  inputDate.forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.add("input_date_active");
    });
  });
}

const selectField = document.querySelectorAll(".my-select");
const selectFieldMult = document.querySelectorAll(".my-select_multiple");

const selectList = document.querySelectorAll(".my-select__list");
const selectItem = document.querySelectorAll(".my-select__item");

if (selectFieldMult) {
  selectFieldMult.forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.toggle("my-select_multiple_open");
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".my-select_multiple")) {
      selectFieldMult.forEach((item) => {
        item.classList.remove("my-select_multiple_open");
      });
    }
  });
}

if (selectField) {
  selectField.forEach((item) => {
    item.addEventListener("click", function (e) {
      item.classList.toggle("my-select_open");
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".my-select")) {
      selectField.forEach((item) => {
        item.classList.remove("my-select_open");
      });
    } else {
    }
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", function (e) {
      const text = item.closest(".my-select").querySelector(".my-select__text");
      text.innerHTML = item.innerHTML;
      text.classList.add("my-select__text_active");
      // text.setAttribute("data-value", item.getAttribute("data-value"));
      e.stopPropagation();
      // console.log(item);
      item.closest(".my-select").classList.remove("my-select_open");
      item.closest(".my-select").classList.add("my-select_active");
    });
  });
}

const navLlink = document.querySelectorAll(".nav__link");
const thisPage = document.querySelector(".page").innerHTML;
if (navLlink) {
  navLlink.forEach((item) => {
    if (item.innerHTML.includes(thisPage)) {
      item.classList.add("nav__link_active");
    }
  });
}
//--------------------------end разное---------------------------

// --------------------пререндер:------------------------
function preRender(tableDataCopyObj) {
  //пререндер, приводи объект в нужный нам формат
  // console.log(tableDataCopyObj);
  const date = new Date(tableDataCopyObj.date).toLocaleDateString("ru-RU");
  const object = {
    date: date,
    name: `${tableDataCopyObj.name} ${tableDataCopyObj.widthCarton} x ${tableDataCopyObj.lengthCarton}`,
    typeCarton: tableDataCopyObj.typeCarton,
    coming: tableDataCopyObj.coming,
    expense: tableDataCopyObj.expense,
    price: tableDataCopyObj.price,
    cost: tableDataCopyObj.price * tableDataCopyObj.coming,
    nameContractor: tableDataCopyObj.nameContractor,
    emptyCell: "",
    emptyCell2: "",
  };

  // console.log(object);
  return object;
}

function setBtns() {
  let btn = null;
  return (btn = [
    {
      numberColumn: 9,
      class: "table__small-btn",
      button: editIcon,
    },
    {
      numberColumn: 10,
      class: "table__small-btn",
      button: deleteIcon,
    },
  ]);
}

setBtns();
// --------------------end пререндер:------------------------

//-------------------------- создание строки ------------------------------------
function getRow(copyTableDataCopyObj, inputs, btns) {
  console.log(copyTableDataCopyObj);
  // function getRow2(tableDataCopyObj, inputs, btns) {


  btns = setBtns();
  inputs = null;
  // tableDataCopy.forEach((tableDataCopyObj) => {
  const tableBodyRow = document.createElement("tr");
  tableBodyRow.classList.add("table__row");
  //надо найти id и присвоить его строке, можно поискать через связку контрагент + товар + длина + ширина + дата + тип + приход + цена
  tableBodyRow.setAttribute("id", copyTableDataCopyObj.idCarton); // добавляем атрибут id для каждой строки

  let colNumber = 0; // счетчик столбцов
  for (let key in copyTableDataCopyObj) {
    colNumber++; // инкремент счетчика столбцов
    const tableColumn = document.createElement("td");
    tableColumn.classList.add(`table__column`, `table__column_${colNumber}`);
    tableColumn.textContent = copyTableDataCopyObj[key];
    tableBodyRow.append(tableColumn);

    if (inputs) {
      // если есть инпуты:
      inputs.forEach((el) => {
        if (colNumber == el.numberColumn) {
          const input = document.createElement("input");
          input.classList.add("table__cell-frame");
          input.setAttribute("type", "number");
          input.setAttribute("value", copyTableDataCopyObj[key]);
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
  // console.log(tableBodyRow);
  return tableBodyRow;

  // });
}
//-------------------------- end создание строки ------------------------------------

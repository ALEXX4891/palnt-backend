// --------------------------simplebar:---------------------------------------
// function simplebar() {
  const simpleBar = new SimpleBar(document.querySelector(".my-simplebar-1"), {
    scrollbarMaxSize: 80,
    autoHide: false,
    forceVisible: true,
  });
  simpleBar.getScrollElement().scrollTo(0,0);
// }
// simplebar();

// --------------------------end simplebar:---------------------------------------

//--------------------------приложение----------------------------
// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).

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

//--------------------------старье----------------------------
// const tableHeader = [
//   "ФИО",
//   "Факультет",
//   "Дата рождения (возраст)",
//   "Годы обучения (курс)",
//   "Удаление",
// ];

// const tableClass = ["table", "caption-top", "table-striped", "table-hover"],
//   tableBtnClass = ["btn", "btn-outline-primary", "btn-th"],
//   errorMsg = document.querySelector(".validation-error"),
//   filterCancelBtn = document.querySelector(".btn-cancel");
//--------------------------end старье----------------------------

//--------------------------переделать----------------------------

// очищаем поля фильтра
// filterCancelBtn.addEventListener("click", function () {
//   fio.value = "";
//   faculty.value = "";
//   birthDateAge.value = "";
//   studyStart.value = "";
//   renderTable(contractorListForRender);
// });
//--------------------------end переделать----------------------------

const tableBody = document.querySelector(".table__body_contractors");
const tableBodyWrapper = document.querySelector(".table-body-wrapper");
const contractorSearch = document.getElementById("contractorsSearch");
const toggleBtn = document.querySelector(".toggle__checkbox");

// contractorSearch.addEventListener("input", function () {

//   console.log(contractorSearch.value);
// })
//--------------------------старье----------------------------

// tableWrapper = document.getElementById("table"),
//   table = document.createElement("table"),
//   tableCaption = document.createElement("caption"),
//   tableHead = document.createElement("thead"),
//   tableHeadRow = document.createElement("tr"),
//   tableHeaderCol1 = document.createElement("th"),
//   tableHeaderCol2 = document.createElement("th"),
//   tableHeaderCol3 = document.createElement("th"),
//   tableHeaderCol4 = document.createElement("th"),
//   tableHeaderCol5 = document.createElement("th"),
//   tableHeaderFio = document.createElement("button"),
//   tableHeaderFaculty = document.createElement("button"),
//   tableHeaderBirthDateAge = document.createElement("button"),
//   tableHeaderstudyStart = document.createElement("button"),
//   tableFilterBody = document.createElement("tbody"),
//   tableBody = document.createElement("tbody");

// for (let i = 0; i < tableClass.length; i++) {
//   table.classList.add(tableClass[i]); // добавляем классы таблице
// }

// tableHeaderFio.textContent = tableHeader[0];
// tableHeaderFaculty.textContent = tableHeader[1];
// tableHeaderBirthDateAge.textContent = tableHeader[2];
// tableHeaderstudyStart.textContent = tableHeader[3];
// tableHeaderCol5.textContent = tableHeader[4];

// tableHeaderCol5.classList.add("delete-btn-header");

// tableCaption.textContent = "Список контрагентов:";

// for (let i = 0; i < tableBtnClass.length; i++) {
//   tableHeaderFio.classList.add(tableBtnClass[i]);
//   tableHeaderFaculty.classList.add(tableBtnClass[i]);
//   tableHeaderBirthDateAge.classList.add(tableBtnClass[i]);
//   tableHeaderstudyStart.classList.add(tableBtnClass[i]);
// }

// tableHeaderCol1.append(tableHeaderFio);
// tableHeaderCol2.append(tableHeaderFaculty);
// tableHeaderCol3.append(tableHeaderBirthDateAge);
// tableHeaderCol4.append(tableHeaderstudyStart);
// tableHeadRow.append(
//   tableHeaderCol1,
//   tableHeaderCol2,
//   tableHeaderCol3,
//   tableHeaderCol4,
//   tableHeaderCol5
// );
// tableHead.append(tableHeadRow);
// table.append(tableHead, tableCaption);
// tableWrapper.append(table);

// добавляем строку для фильтрации:
// const filterHeadRow = document.createElement("tr"),
//   filterCol1 = document.createElement("td"),
//   filterCol2 = document.createElement("td"),
//   filterCol3 = document.createElement("td"),
//   filterCol4 = document.createElement("td"),
//   filterCol5 = document.createElement("td"),
//   filterBody = document.createElement("tbody");

// filterCol1.innerHTML =
//   '<input type="text" id="fio" class="form-control" placeholder="Фильтр по ФИО" required id="inputName">';
// filterCol2.innerHTML =
//   '<input type="text" id="faculty" class="form-control" placeholder="Фильтр по факультету" required id="inputName">';
// filterCol3.innerHTML =
//   '<input type="text" id="birthDateAge" class="form-control" placeholder="Фильтр по возрасту" required id="inputName">';
// filterCol4.innerHTML =
//   '<input type="text" id="studyStart" class="form-control" placeholder="Фильтр по годам обучения" required id="inputName">';
// filterCol5.innerHTML =
//   '<button id="delete-all" class="btn btn-outline-primary col-md-3 col-sm-6 btn-th">Удалить всех</button>';

// filterHeadRow.append(
//   filterCol1,
//   filterCol2,
//   filterCol3,
//   filterCol4,
//   filterCol5
// );
// tableFilterBody.append(filterHeadRow);
// table.append(tableFilterBody);

// let fio = document.getElementById("fio");
// let faculty = document.getElementById("faculty");
// let birthDateAge = document.getElementById("birthDateAge");
// let studyStart = document.getElementById("studyStart");
//--------------------------end старье----------------------------

//--------------------------Запрос к БД----------------------------
// Загружаем список контрагентов с БД:
let responce;
let infoList;
// let options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     table: "contractor",
//     all: "*",
//     select: "SELECT",
// idContractor: "idContractor",
// isActive: "isActive",
// name: "name",
// taxNumber: "taxNumber",
// address: "address",
// telephone: "telephone",
// email: "email",

// create: "CREATE",
// update: "UPDATE",
// where: "WHERE",
// insert: "INSERT INTO",
// delete: "DELETE FROM",
// orderby: "ORDER BY",
// limit: "LIMIT",
// select: "SELECT",
// from: "FROM",
// innerjoin: "INNER JOIN",
// leftjoin: "LEFT JOIN",
// rightjoin: "RIGHT JOIN",
// on: "ON",
// groupby: "GROUP BY",
// having: "HAVING",
//   }),
// }

let options = {
  // опции для получения списка всех контрагентов
  function: "getAll",
  table: "contractor",
  all: "*",
};

// console.log(JSON.stringify(options));
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

// copyContractorList = [...activContractors];

// выбираем только активных контрагентов:
// console.log(contractorList);
let copyContractorList = [...infoList];
let isActive = 1; // признак содержания таблицы
let contractorListForRender = [];

//поиск максимального id в списке контрагентов:
let maxId = 0;
function getMaxId(arr) {
  let copy = [...arr];
  const ids = copy.map((object) => {
    return object.idContractor;
  });
  maxId = Math.max(...ids);
  return maxId;
}

// Добавляем событие на кнопку "Добавить контрагента":
const addContractorBtn = document.getElementById("addContractorBtn");
addContractorBtn.onclick = function () {
  maxId += 1;
  const item = createRowForm(maxId);
  item.scrollIntoView(); // переход к созданной строке
};

//функция переключения активности таблицы, так-же скрывает кнопку "добавить контрагента":
function toggleBtnFunc() {
  if (toggleBtn.checked) {
    isActive = 0;
    addContractorBtn.parentElement.style.display = "none"; // скрываем кнопку
    tableBodyWrapper.style.height = "calc(100vh - 300px)"; // увеличиваем высоту таблицы
    tableBodyWrapper.style.marginBottom = "0"; // убираем отступ снизу таблицы
    getMaxId(contractorListForRender); // поиск максимального id в списке контрагентов
    simpleBar.getScrollElement().scrollTo(0,0);
  }
  if (!toggleBtn.checked) {
    isActive = 1;
    addContractorBtn.parentElement.style.display = "block"; // показываем кнопку
    tableBodyWrapper.style.height = "calc(100vh - 360px)"; // уменьшаем высоту таблицы
    tableBodyWrapper.style.marginBottom = "30px"; // добавляем отступ снизу таблицы
    getMaxId(contractorListForRender); // поиск максимального id в списке контрагентов
    simpleBar.getScrollElement().scrollTo(0,0);
  }
}

//логика фильтрации активных и не активных контрагентов:
toggleBtn.addEventListener("click", function () {
  toggleBtnFunc(); //проверить выбранную активность контрагентов
  renderTable(contractorListForRender, isActive); //рендер таблицы контрагнетов
  setPopupEvent(); // навесить заново события открытия и закрытия модльного окна
});

// Этап 3. Создайте функцию вывода одного контрагента в таблицу, по аналогии с тем,
// как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент
//  с информацией и пользователе.У функции должен быть один аргумент - объект контрагента.

function getRow(contractorObj, isActive = 1) {
  const item = document.createElement("tr"),
    tableDataId = document.createElement("td"),
    tableDataName = document.createElement("td"),
    tableDataTaxNumber = document.createElement("td"),
    tableDataAddress = document.createElement("td"),
    tableDataPhone = document.createElement("td"),
    tableDataEmail = document.createElement("td"),
    tableDataDeleteCell = document.createElement("td"),
    tableDataEditCell = document.createElement("td"),
    tableDataReverCell = document.createElement("td"),
    tableDataSaveCell = document.createElement("td"),
    tableDataEmptyCell = document.createElement("td");

  item.classList.add("table__row");
  tableDataId.classList.add("table__column", "table__column_1");
  tableDataName.classList.add("table__column", "table__column_2");
  tableDataTaxNumber.classList.add("table__column", "table__column_3");
  tableDataAddress.classList.add("table__column", "table__column_4");
  tableDataPhone.classList.add("table__column", "table__column_5");
  tableDataEmail.classList.add("table__column", "table__column_6");
  tableDataEditCell.classList.add(
    "table__column",
    "table__column_7",
    "table__small-btn"
  );
  tableDataDeleteCell.classList.add(
    "table__column",
    "table__column_8",
    "table__small-btn"
  );

  tableDataReverCell.classList.add(
    "table__column",
    "table__column_7",
    "table__small-btn"
  );
  tableDataSaveCell.classList.add(
    "table__column",
    "table__column_7",
    "table__small-btn"
  );
  tableDataEmptyCell.classList.add(
    "table__column",
    "table__column_8",
    "table__small-btn"
  );

  tableDataId.textContent = contractorObj.idContractor;
  tableDataName.textContent = contractorObj.name;
  tableDataTaxNumber.textContent = contractorObj.taxNumber;
  tableDataAddress.textContent = contractorObj.address;
  tableDataPhone.textContent = contractorObj.telephone;
  tableDataEmail.textContent = contractorObj.email;

  //создаем кнопку удаления контрагента:
  tableDataDeleteCell.innerHTML = deleteIcon;
  tableDataEditCell.innerHTML = editIcon;
  tableDataReverCell.innerHTML = revertIcon;
  tableDataSaveCell.innerHTML = saveIcon;

  // присваеваем id контрагента кнопкам:
  tableDataDeleteCell.setAttribute("id", contractorObj.idContractor);
  tableDataEditCell.setAttribute("id", contractorObj.idContractor);
  tableDataReverCell.setAttribute("id", contractorObj.idContractor);
  tableDataSaveCell.setAttribute("id", contractorObj.idContractor);

  // добавляем обработчик на кнопку - удаление контрагента
  tableDataDeleteCell
  .querySelector("svg")
  .addEventListener("click", function () {
    item.classList.add("table__row_deletable");
    setNoActive({ contractorObj, element: item });
  });

  // добавляем обработчик на кнопку - редактирование контрагента
  tableDataReverCell
    .querySelector("svg")
    .addEventListener("click", function () {
      item.classList.add("table__row_deletable");
      setActive({ contractorObj, element: item });
    });

  // добавляем обработчик на кнопку - редактирование контрагента
  tableDataEditCell
  .querySelector("svg")
  .addEventListener("click", function () {
    editItem({ contractorObj, element: item });
  });

  // добавляем обработчик на кнопку - сохранение контрагента
  tableDataSaveCell
  .querySelector("svg")
  .addEventListener("click", function () {
    saveItem({ contractorObj, element: item });
  });

  // присваеваем id контрагента элементу и добавляем информацию в таблицу:
  item.setAttribute("id", contractorObj.idContractor);
  item.append(tableDataId);
  item.append(tableDataName);
  item.append(tableDataTaxNumber);
  item.append(tableDataAddress);
  item.append(tableDataPhone);
  item.append(tableDataEmail);
  if (isActive == 1) {
    item.append(tableDataEditCell);
    item.append(tableDataDeleteCell);
  } else {
    item.append(tableDataReverCell);
    item.append(tableDataEmptyCell);
  }

  return item;
}

//Логика:
// 1) получаем массив-0 всех контрагентов
// 2) при первой отрисовке фильтруем массив-0 контрагентов по активности = 1, получаем массив-1, рендер.
// 3) при переключении тогла фильтруем массив-0 контрагентов по активности = 0, получаем массив-2, рендер.
// 4) при фильтрации массива по поиску работаем с массивом-1 или массивом-2, проверяем положение тогла
// 5) при переключении тогла работаем с массивом-1 или массивом-2, проверяем наличие фильтра по поиску
// 6)
// 7)
// 8)
// 9)
// 10)

// Этап 4. Создайте функцию отрисовки всех контрагентов.
// Аргументом функции будет массив контрагентов.Функция должна использовать
// ранее созданную функцию создания одной записи для контрагента.Цикл поможет вам создать
// список контрагентов.Каждый раз при изменении списка контрагента вы будете вызывать
// эту функцию для отрисовки таблицы.

//подготовка массива для рендера.
function preRender(arr) {
  for (const contractorObj of arr) {
    // let birthday = new Date(contractorObj.birthday)
    //   .toJSON()
    //   .split("T")[0]
    //   .split("-")
    //   .reverse()
    //   .join(".");

    let contractorObjForRender = {
      idContractor: contractorObj.idContractor,
      name: contractorObj.name,
      taxNumber: contractorObj.taxNumber,
      address: contractorObj.address,
      telephone: contractorObj.telephone,
      email: contractorObj.email,
      isActive: contractorObj.isActive,
      // fio:
      //   studentObj.surname + " " + studentObj.name + " " + studentObj.lastname,
      // faculty: studentObj.faculty,
      // birthDateAge: `{birthday} ({getAge(studentObj.birthday)})`,
      // studyStart: `{studentObj.studyStart} - {
      //   parseInt(studentObj.studyStart) + 4
      // } ({getCource(studentObj.studyStart)})`,
      // id: studentObj.id,
    };
    contractorListForRender.push(contractorObjForRender);
  }
}

preRender(copyContractorList);

getMaxId(contractorListForRender);

// функция фильтрации массива:!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function filterTable(col, param, arr) {
//   return arr.filter((oneContractor) =>
//     oneContractor[param].toLowerCase().includes(col.value.trim().toLowerCase())
//   );
// }

function filterTable(search, isActive, arr) {
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
  return filterTableActive(isActive, "isActive", res);
}

function filterTableActive(isActive, param, arr) {
  let copy = [...arr];
  return copy.filter((oneContractor) => oneContractor[param] == isActive);
}

//рендер подготовленного массива + фильтрация по всем колонкам.
function renderTable(arr, isActive) {
  tableBody.innerHTML = ""; // очищаем тело таблицы
  let copyArr = [...arr]; // создаем копию массива

  // Фильтрация таблицы по всем столбцам:
  if (contractorSearch.value.trim() !== "") {
    copyArr = filterTable(contractorSearch.value, isActive, copyArr);
  }

  // Фильтрация массива по активности:
  copyArr = filterTableActive(isActive, "isActive", copyArr);

  // if (faculty.value.trim() !== "") {
  //   copyArr = filterTable(faculty, "faculty", copyArr);
  // }

  // рендерим всю таблицу
  for (const contractorObj of copyArr) {
    const item = getRow(contractorObj, isActive);
    tableBody.append(item); // добавление контрагента в таблицу
  }
}

renderTable(contractorListForRender, isActive);
setPopupEvent();

// Этап 5. К форме добавления контрагента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными контрагентов в массив контрагентов и запустите функцию отрисовки таблицы контрагентов, созданную на этапе 4.

// const studentForm = document.getElementById("studentForm");

// studentForm.addEventListener("submit", async function (event) {
//   event.preventDefault(); // отменяем перезагрузку страницы

//   const inputName = document.getElementById("inputName"),
//     inputLastname = document.getElementById("inputLastname"),
//     inputSurname = document.getElementById("inputSurname"),
//     inputBirthDate = document.getElementById("inputBirthDate"),
//     inputStudyStart = document.getElementById("inputStudyStart"),
//     inputFaculty = document.getElementById("inputFaculty");

//   // Валидация
//   if (inputName.value.trim() == "") {
//     errorMsg.textContent = "Имя не введено!";
//     return;
//   }

//   if (inputLastname.value.trim() == "") {
//     errorMsg.textContent = "Отчество не введено!";
//     return;
//   }

//   if (inputSurname.value.trim() == "") {
//     errorMsg.textContent = "Фамилия не введена!";
//     return;
//   }

//   if (inputBirthDate.value == "") {
//     errorMsg.textContent = "Дата рождения не введена!";
//     return;
//   }

//   const responce = await fetch("http://localhost:3000/api/students", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       name: inputName.value,
//       surname: inputSurname.value,
//       lastname: inputLastname.value,
//       birthday: inputBirthDate.valueAsDate,
//       studyStart: inputStudyStart.value,
//       faculty: inputFaculty.value,
//     }),
//   });

//   let newStudent = await responce.json();

//   preRender(copyStudentsList); //пререндер - в массив объектов по 4 элемента
//   renderTable(contractorListForRender); //отрисовываем таблицу

//   // отчистка формы, после добавления контрагента в массив
//   inputName.value = "";
//   inputSurname.value = "";
//   inputLastname.value = "";
//   inputBirthDate.value = "";
//   inputStudyStart.value = "";
//   inputFaculty.value = "";
//   errorMsg.textContent = "";
// });

// Функция сортировки массива контрагентов, события кликов на соответствующие колонки:
let sortDirectionId = true; // индикотор сортировки по id
let sortDirectionName = true; // индикатор сортировки по имени
let iconTransmorm = "rotate(0deg)"; // положения иконки сортировки
const nameContractorBtn = document.getElementById("nameContractorBtn"); // кнопка сортировки - поле таблицы
const nameContractorBtnIcon = nameContractorBtn.querySelector("svg"); // иконка сортировки по имени
const idContractorBtn = document.getElementById("idContractorBtn"); // кнопка сортировки - поле таблицы
const idContractorBtnIcon = idContractorBtn.querySelector("svg"); // иконка сортировки по id

const sortArr = (arr, property, sortDirection, isActive) => {
  // функция сортировки
  arr.sort((a, b) =>
    (sortDirection ? a[property] < b[property] : a[property] > b[property])
      ? -1
      : 1
  );
  renderTable(arr, isActive);
  setPopupEvent();
};

// обработчик события сортировки:
nameContractorBtn.addEventListener("click", () => {
  // сортировка по имени при клике
  sortDirectionName = !sortDirectionName; // меняем индикатор сортировки
  iconTransmorm = sortDirectionName ? "rotate(0deg)" : "rotate(180deg)"; // задаем угол поворота иконки
  nameContractorBtnIcon.style.transform = iconTransmorm; // меняем положение иконки
  sortArr(contractorListForRender, "name", sortDirectionName, isActive); // сортируем массив
});

idContractorBtn.addEventListener("click", () => {
  // сортировка по id при клике
  sortDirectionId = !sortDirectionId;
  iconTransmorm = sortDirectionId ? "rotate(0deg)" : "rotate(180deg)";
  idContractorBtnIcon.style.transform = iconTransmorm;
  sortArr(contractorListForRender, "idContractor", sortDirectionId, isActive);
});

// Фильтрация массива контрагентов при вводе текста инпут, ищет по всем столбцам
contractorSearch.addEventListener("input", () => {
  renderTable(contractorListForRender, isActive); //рендер таблицы контрагнетов
  setPopupEvent(); // навесить заново события открытия и закрытия модльного окна
});

// ----------------- события на кнопки в таблице ------------------
function setNoActive({ contractorObj, element: item }) {
  const agree = document.querySelector("#btn-delete");
  const element = item;
  const contractort = contractorObj;
  agree.addEventListener("click", function (e) {
    contractorListForRender.filter(
      (contractor) => contractor.idContractor == contractort.idContractor
    )[0].isActive = 0;
    element.remove();
    popupClose(e.target.closest(".popup"));

    options = {
      function: "noActive",
      table: "contractor",
      update: "UPDATE",
      idContractor: contractorObj.idContractor,
      isActive: "0",
    };
    fetchToDB(options);
  });
}

function setActive({ contractorObj, element: item }) {
  const agree = document.querySelector("#btn-revert");
  const element = item;
  const contractort = contractorObj;
  agree.addEventListener("click", function (e) {
    contractorListForRender.filter(
      (contractor) => contractor.idContractor == contractort.idContractor
    )[0].isActive = 1;
    element.remove();
    popupClose(e.target.closest(".popup"));

    options = {
      function: "goActive",
      table: "contractor",
      idContractor: contractorObj.idContractor,
      isActive: "1",
    };
    fetchToDB(options);
  });
}

function editItem({ contractorObj, element: item }) {
  const idContractor = item.getAttribute("id");
  const newItem = createRowForm(idContractor, contractorObj);
  item.replaceWith(newItem);
  setPopupEvent(); // требуется для корректной работы событий
}

function saveItem({ element: item }) {
  const id = item.querySelector(".table__column_1").innerText;
  const name = item
    .querySelector(".table__column_2")
    .querySelector("input").value;
  const taxNumber = item
    .querySelector(".table__column_3")
    .querySelector("input").value;
  const address = item
    .querySelector(".table__column_4")
    .querySelector("input").value;
  const phone = item
    .querySelector(".table__column_5")
    .querySelector("input").value;
  const email = item
    .querySelector(".table__column_6")
    .querySelector("input").value;
  const contractor = {
    idContractor: Number(id),
    name: name,
    taxNumber: Number(taxNumber),
    address: address,
    telephone: phone,
    email: email,
    isActive: 1,
  };

  //проверки на заполянность полей:
  if (!Number.isInteger(contractor.taxNumber)) {
    alert("Номер ИНН должен быть числом");
    return;
  }

  if (
    !contractor.name ||
    !contractor.taxNumber ||
    !contractor.address ||
    !contractor.telephone ||
    !contractor.email
  ) {
    alert("Заполните все поля таблицы");
    return;
  }

  // компановка параметров для запроса к БД:
  options = {
    table: "contractor",
    idContractor: contractor.idContractor,
    name: contractor.name,
    taxNumber: contractor.taxNumber,
    address: contractor.address,
    telephone: contractor.telephone,
    email: contractor.email,
  };

  // определяем надо обновить контрагента или добавить нового (по idContractor):
  const index = contractorListForRender.findIndex(
    (contractor) => contractor.idContractor == id
  );
  if (index !== -1) {
    contractorListForRender[index] = contractor; // обновление текущего контрагента
    options.function = "update"; // определение типа запроса
  } else {
    contractorListForRender.push(contractor); // добавление нового контрагента
    options.function = "create"; // определение типа запроса
  }

  const newItem = getRow(contractor); // создаем строку с новым контрагентом
  item.replaceWith(newItem); // заменяем старую строку на новую
  setPopupEvent(); // требуется для корректной работы событий
  fetchToDB(options); // отправляем запрос к БД
}

// ----------------- end события на кнопки в таблице ------------------

// функция добавления сразу множества атрибутов:
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// функция создания формы для добавления/редактирования контрагента:
function createRowForm(maxId, contractorObj) {
  const item = document.createElement("tr"),
    tableFormId = document.createElement("td"),
    tableFormName = document.createElement("td"),
    tableFormTaxNumber = document.createElement("td"),
    tableFormAddress = document.createElement("td"),
    tableFormPhone = document.createElement("td"),
    tableFormEmail = document.createElement("td"),
    tableFormSaveCell = document.createElement("td"),
    tableFormEmptyCell = document.createElement("td"),
    // tableFormInputId = document.createElement("input"),
    tableFormInputName = document.createElement("input"),
    tableFormInputTaxNumber = document.createElement("input"),
    tableFormInputAddress = document.createElement("input"),
    tableFormInputPhone = document.createElement("input"),
    tableFormInputEmail = document.createElement("input");

  //присвоение классов созданным элементам:
  item.classList.add("table__row", "table__row_editable");
  tableFormId.classList.add("table__column", "table__column_1");
  tableFormName.classList.add("table__column", "table__column_2");
  tableFormTaxNumber.classList.add("table__column", "table__column_3");
  tableFormAddress.classList.add("table__column", "table__column_4");
  tableFormPhone.classList.add("table__column", "table__column_5");
  tableFormEmail.classList.add("table__column", "table__column_6");
  tableFormSaveCell.classList.add(
    "table__column",
    "table__column_7",
    "table__small-btn"
  );
  tableFormEmptyCell.classList.add(
    "table__column",
    "table__column_8",
    "table__small-btn"
  );

  //присвоение классов созданным инпутам:
  // tableFormInputId.classList.add("table__input");
  tableFormInputName.classList.add("table__input");
  tableFormInputTaxNumber.classList.add("table__input");
  tableFormInputAddress.classList.add("table__input");
  tableFormInputPhone.classList.add("table__input");
  tableFormInputEmail.classList.add("table__input");

  if (contractorObj) {
    tableFormInputName.value = contractorObj.name;
    tableFormInputTaxNumber.value = contractorObj.taxNumber;
    tableFormInputAddress.value = contractorObj.address;
    tableFormInputPhone.value = contractorObj.telephone;
    tableFormInputEmail.value = contractorObj.email;
  }

  //присвоение атрибутов созданным инпутам:
  setAttributes(tableFormInputName, {
    type: "text",
    name: "organization",
    value: "",
    required: true,
    placeholder: "Заполните название",
  });
  setAttributes(tableFormInputTaxNumber, {
    type: "text",
    name: "taxNumber",
    value: "",
    required: true,
    placeholder: "Заполните ИНН",
  });
  setAttributes(tableFormInputAddress, {
    type: "text",
    name: "address",
    value: "",
    required: true,
    placeholder: "Заполните адрес",
  });
  setAttributes(tableFormInputPhone, {
    type: "text",
    name: "phone",
    value: "",
    required: true,
    placeholder: "Заполните телефон",
  });
  setAttributes(tableFormInputEmail, {
    type: "text",
    name: "email",
    value: "",
    required: true,
    placeholder: "Заполните почту",
  });

  // присваеваем значения внутренним элементам формы:
  tableFormSaveCell.innerHTML = saveIcon;
  // tableFormSaveCell.setAttribute("id", contractorObj.idContractor);

  // добавляем обработчик на кнопку - сохранение контрагента
  tableFormSaveCell.addEventListener("click", function () {
    saveItem({ element: item });
  });

  // getMaxId()
  tableFormId.innerText = maxId;

  //присвоение инпутов ячейкам таблицы:
  tableFormName.append(tableFormInputName);
  tableFormTaxNumber.append(tableFormInputTaxNumber);
  tableFormAddress.append(tableFormInputAddress);
  tableFormPhone.append(tableFormInputPhone);
  tableFormEmail.append(tableFormInputEmail);

  //добвление формы в строку:
  item.append(tableFormId);
  item.append(tableFormName);
  item.append(tableFormTaxNumber);
  item.append(tableFormAddress);
  item.append(tableFormPhone);
  item.append(tableFormEmail);
  item.append(tableFormSaveCell);
  item.append(tableFormEmptyCell);

  tableBody.append(item); // добавление контрагента в таблицу
  return item;
}

//--------------------------разное----------------------------


const inputSearch = document.querySelectorAll(".input_search");
if (inputSearch) {
  inputSearch.forEach((item) => {
    item.querySelector("input").addEventListener("input", function () {
      if (item.querySelector("input").value.trim() !== "") {
        item.classList.add("input_search_active");
        console.log(1);
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

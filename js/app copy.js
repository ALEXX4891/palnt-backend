//приложение

const tableBody = document.querySelector(".table__body");
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

const deleteCell = document.createElement('td');
deleteCell.classList.add('table__column', 'table__column_8', 'table__small-btn');
deleteCell.innerHTML = deleteIcon;
// tableBody.append(deleteCell);
// deleteCell.onclick = onDelete();

// let div = document.createElement('div');
// div.innerHTML = 'Hello, World!';
// div.onclick = function() {
//     alert(111);
// };



const saveIcon = `<svg class="btn-save" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M6 4.5C5.60217 4.5 5.22064 4.65804 4.93934 4.93934C4.65804 5.22064 4.5 5.60217 4.5 6V18C4.5 18.3978 4.65804 18.7794 4.93934 19.0607C5.22064 19.342 5.60217 19.5 6 19.5V14.25C6 13.6533 6.23705 13.081 6.65901 12.659C7.08097 12.2371 7.65326 12 8.25 12H15.75C16.3467 12 16.919 12.2371 17.341 12.659C17.7629 13.081 18 13.6533 18 14.25V19.5C18.3978 19.5 18.7794 19.342 19.0607 19.0607C19.342 18.7794 19.5 18.3978 19.5 18V8.4315C19.4999 8.03371 19.3418 7.65224 19.0605 7.371L16.629 4.9395C16.3478 4.65818 15.9663 4.50008 15.5685 4.5H15V6.75C15 7.34674 14.7629 7.91903 14.341 8.34099C13.919 8.76295 13.3467 9 12.75 9H9.75C9.15326 9 8.58097 8.76295 8.15901 8.34099C7.73705 7.91903 7.5 7.34674 7.5 6.75V4.5H6ZM9 4.5V6.75C9 6.94891 9.07902 7.13968 9.21967 7.28033C9.36032 7.42098 9.55109 7.5 9.75 7.5H12.75C12.9489 7.5 13.1397 7.42098 13.2803 7.28033C13.421 7.13968 13.5 6.94891 13.5 6.75V4.5H9ZM16.5 19.5V14.25C16.5 14.0511 16.421 13.8603 16.2803 13.7197C16.1397 13.579 15.9489 13.5 15.75 13.5H8.25C8.05109 13.5 7.86032 13.579 7.71967 13.7197C7.57902 13.8603 7.5 14.0511 7.5 14.25V19.5H16.5ZM3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H15.5685C16.3641 3.00017 17.127 3.31635 17.6895 3.879L20.121 6.3105C20.6836 6.87298 20.9998 7.63591 21 8.4315V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6Z"
    fill="#225F0D" fill-opacity="0.75" />
</svg>`;

const revertIcon = `<svg class="popup-link btn-revert" href="#popup-revert" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 5.35386H14.4615C15.9304 5.35386 17.3392 5.93738 18.3778 6.97604C19.4165 8.0147 20 9.42343 20 10.8923C20 12.3612 19.4165 13.7699 18.3778 14.8086C17.3392 15.8473 15.9304 16.4308 14.4615 16.4308H10.3077" stroke="#225F0D" stroke-opacity="0.75" stroke-width="2.30769" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M6.15385 9.50769L2 5.35384L6.15385 1.2" stroke="#225F0D" stroke-opacity="0.75" stroke-width="2.30769" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`;

function editRow() {}

function onDelete() {
// function onDelete({ studentObj, element }) {
  // const row = this.closest(".table__row");
  // row.classList.add("table__row_deletable");
  // const id = row.querySelector(".table__column_1").innerHTML;
  // row.remove();

  const row = popupLink.closest(".table__row");
  row.classList.add("table__row_deletable");
  const id = row.querySelector(".table__column_1").innerHTML;
  console.log(id);
  const popupName = popupLink.getAttribute("href").replace("#", "");
  const curentPopup = document.getElementById(popupName); //получаем id попап-окна
  popupOpen(curentPopup);
  e.preventDefault();


  // if (!confirm("Вы уверены?")) {
  //   return;
  // }
  // element.remove();
  // fetch(`http://localhost:3000/api/students/${studentObj.id}`, {
  //   method: "DELETE",
  // });
}

function saveRow() {}

function revertRow() {}

function renderActiveContractors(item) {
  
  if (item.isActive) {
    // console.log(item);
    const row = document.createElement("tr");
    row.classList.add("table__row");
    row.appendChild(deleteCell);
    row.innerHTML = `
    <td class="table__column table__column_1">${item.idContractor}</td>
    <td class="table__column table__column_2">${item.name}</td>
    <td class="table__column table__column_3">${item.taxNumber}</td>
    <td class="table__column table__column_4">${item.address}</td>
    <td class="table__column table__column_5">${item.telephone}</td>
    <td class="table__column table__column_6">${item.email}</td>
    <td class="table__column table__column_7 table__small-btn">${editIcon}</td>
    >${deleteCell}`;
    
    console.log(row);
    
    tableBody.append(row);
    
    
    // const deleteBtn = row.querySelector(".btn-delete");
    // console.log(deleteBtn);
    // deleteBtn.addEventListener("click", delRow);
  }
}

function renderArchivedContractors(item) {
  
  if (!item.isActive) {
    const row = document.createElement("tr");
    row.classList.add("table__row");
    tableBody.append(row);
    row.innerHTML = `<td class="table__column table__column_1">${item.idContractor}</td>
      <td class="table__column table__column_2">${item.name}</td>
      <td class="table__column table__column_3">${item.taxNumber}</td>
      <td class="table__column table__column_4">${item.address}</td>
      <td class="table__column table__column_5">${item.telephone}</td>
      <td class="table__column table__column_6">${item.email}</td>
      <td class="table__column table__column_7 table__small-btn">
      ${revertIcon}
      </td>
      <td class="table__column table__column_8 table__small-btn">  
      </td>`;
  }
}

function addEventEdit(item) {
  item.addEventListener("click", renderEditableRow(item))
}

function addEventRevert(item) {
  // item.addEventListener("click", renderArchivedContractors(item))
}

function addEventSave(item) {
  // item.addEventListener("click", renderActiveContractors(item))
}



function renderEditableRow(item) {
  const row = item.closest(".table__row");
  row.classList.add("table__row_editable");

  const idContractor = row.querySelector(".table__column_1").innerHTML;
  const name = row.querySelector(".table__column_2").innerHTML;
  const taxNumber = row.querySelector(".table__column_3").innerHTML;
  const address = row.querySelector(".table__column_4").innerHTML;
  const telephone = row.querySelector(".table__column_5").innerHTML;
  const email = row.querySelector(".table__column_6").innerHTML;

  row.innerHTML = "";

  // tableBody.append(row);
  row.innerHTML = `<tr class="table__row table__row_editable">
  <td class="table__column table__column_1">
    ${idContractor}
  </td>
  <td class="table__column table__column_2">
    <input class="table__input" type="text" name="organization" value="${name}"
      required>
  </td>
  <td class="table__column table__column_3">
    <input class="table__input" type="number" name="inn" value="${taxNumber}" required>
  </td>
  <td class="table__column table__column_4">
    <input class="table__input" type="text" name="address"
      value="${address}" required>
  </td>
  <td class="table__column table__column_5">
    <input class="table__input" type="text" name="phone" value="${telephone}" required>
  </td>
  <td class="table__column table__column_6">
    <input class="table__input" type="email" name="email" value="${email}" required>
  </td>
  <td class="table__column table__column_7 table__small-btn">
  ${saveIcon}
  </td>
  <td class="table__column table__column_8 table__small-btn">
  </td>
</tr>`;
}


// // посмотреть пожзе:
// function renderContractors(item) {
//   if (item.isActive) {
//     renderActiveContractors(item);
//   } else {
//     renderArchivedContractors(item);
//   }
// }

// // посмотреть пожзе:
// function addRow() {
//   const row = document.createElement("tr");
//   row.classList.add("table__row");
//   tableBody.append(row);
//   const column1 = document.createElement("td");
//   column1.classList.add("table__column", "table__column_1");
//   row.append(column1);
//   const column2 = document.createElement("td");
//   column2.classList.add("table__column", "table__column_2");
//   row.append(column2);
//   const column3 = document.createElement("td");
//   column3.classList.add("table__column", "table__column_3");
//   row.append(column3);
//   const column4 = document.createElement("td");
//   column4.classList.add("table__column", "table__column_4");
//   row.append(column4);
//   const column5 = document.createElement("td");
//   column5.classList.add("table__column", "table__column_5");
//   row.append(column5);
//   const column6 = document.createElement("td");
//   column6.classList.add("table__column", "table__column_6");
//   row.append(column6);
//   const column7 = document.createElement("td");
//   column7.classList.add("table__column", "table__column_7");
//   row.append(column7);
//   const column8 = document.createElement("td");
//   column8.classList.add("table__column", "table__column_8");
//   row.append(column8);
// }

// function deleteRow() {
//   if (tableBody.rows.length > 1) {
//     tableBody.deleteRow(tableBody.rows.length - 1);
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   fetch("main.php")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       data.forEach((item) => {
//         renderActiveContractors(item);
//       });
//     });
// });

let responce;
let contractorList;

async function getInfoFromDB() {
  responce = await fetch("main.php");
  contractorList = await responce.json();
  if (!contractorList.length) {
    alert("Данные на сервере отсутсуют");
    contractorList = [];
  }
}

// await getInfoFromDB(); // требуется подключить скрипт как модуль, иначе await не работает!!!

// let copyContractorList = [...contractorList];
// let contractorListForRender = [];

copyContractorList.forEach((item) => {
  renderActiveContractors(item);
});


const tr_test = document.createElement("tr"); // так встявляется как элемент
tr_test.insertAdjacentHTML("beforeend", saveIcon)
// const tr_test = document.createElement("tr").insertAdjacentHTML("beforeend", saveIcon)
// вставить кнопку "сохранить":
// tableBody.prepend(saveIcon); // так встявляется как текст
// tableBody.prepend(tr_test);

// преключение между активными и архивными контрагентами:
const toggleBtn = document.querySelector(".toggle__checkbox"); 
toggleBtn.addEventListener("click", function () {
  tableBody.innerHTML = "";
  fetch("main.php")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((item) => {
        if (toggleBtn.checked) {
          renderArchivedContractors(item);
        }
        if (!toggleBtn.checked) {
          renderActiveContractors(item);
        }
      });
    })
    .then(() => {
      const editBtns = document.querySelectorAll(".btn-edit");
      editBtns.forEach((item) => {
        item.addEventListener("click", function (e) {
          addEventEdit(item)
        })      
      })
    });
});

// .then(() => {
//   const editBtns = document.querySelectorAll(".btn-edit");
//   editBtns.forEach((item) => {
//     item.addEventListener("click", function (e) {
//       e.preventDefault();





//       const btnSaveCell = document.createElement("td");
//       btnSaveCell.classList.add("table__column", "table__column_7");
//       btnSaveCell.innerHTML = `<svg class="btn-save" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M6 4.5C5.60217 4.5 5.22064 4.65804 4.93934 4.93934C4.65804 5.22064 4.5 5.60217 4.5 6V18C4.5 18.3978 4.65804 18.7794 4.93934 19.0607C5.22064 19.342 5.60217 19.5 6 19.5V14.25C6 13.6533 6.23705 13.081 6.65901 12.659C7.08097 12.2371 7.65326 12 8.25 12H15.75C16.3467 12 16.919 12.2371 17.341 12.659C17.7629 13.081 18 13.6533 18 14.25V19.5C18.3978 19.5 18.7794 19.342 19.0607 19.0607C19.342 18.7794 19.5 18.3978 19.5 18V8.4315C19.4999 8.03371 19.3418 7.65224 19.0605 7.371L16.629 4.9395C16.3478 4.65818 15.9663 4.50008 15.5685 4.5H15V6.75C15 7.34674 14.7629 7.91903 14.341 8.34099C13.919 8.76295 13.3467 9 12.75 9H9.75C9.15326 9 8.58097 8.76295 8.15901 8.34099C7.73705 7.91903 7.5 7.34674 7.5 6.75V4.5H6ZM9 4.5V6.75C9 6.94891 9.07902 7.13968 9.21967 7.28033C9.36032 7.42098 9.55109 7.5 9.75 7.5H12.75C12.9489 7.5 13.1397 7.42098 13.2803 7.28033C13.421 7.13968 13.5 6.94891 13.5 6.75V4.5H9ZM16.5 19.5V14.25C16.5 14.0511 16.421 13.8603 16.2803 13.7197C16.1397 13.579 15.9489 13.5 15.75 13.5H8.25C8.05109 13.5 7.86032 13.579 7.71967 13.7197C7.57902 13.8603 7.5 14.0511 7.5 14.25V19.5H16.5ZM3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H15.5685C16.3641 3.00017 17.127 3.31635 17.6895 3.879L20.121 6.3105C20.6836 6.87298 20.9998 7.63591 21 8.4315V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6Z"
//                               fill="#225F0D" fill-opacity="0.75" />
//                           </svg>`;
//       row.append(btnSaveCell);

//       const btnSave = document.querySelectorAll(".btn-save");
//       btnSave.forEach((btn) => {
//         btn.addEventListener("click", function (e) {
//           e.preventDefault();
//           const row = btn.closest(".table__row");
//           const idContractor = id;
//           console.log(idContractor);
//           const name = row.querySelector(
//             ".table__input[name='name']"
//           ).value;
//           const taxNumber = row.querySelector(
//             ".table__input[name='taxNumber']"
//           ).value;
//           const address = row.querySelector(
//             ".table__input[name='address']"
//           ).value;
//           const telephone = row.querySelector(
//             ".table__input[name='telephone']"
//           ).value;
//           const email = row.querySelector(
//             ".table__input[name='email']"
//           ).value;
//           row.classList.remove("table__row_editable");
//           row.innerHTML = "";
//           row.innerHTML = `<td class="table__column table__column_1">${idContractor}</td>
//           <td class="table__column table__column_2">${name}</td>
//           <td class="table__column table__column_3">${taxNumber}</td>
//           <td class="table__column table__column_4">${address}</td>
//           <td class="table__column table__column_5">${telephone}</td>
//           <td class="table__column table__column_6">${email}</td>
//           <td class="table__column table__column_7">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M18.6665 20H3.99984V5.33333H12.8132L14.1465 4H3.99984C3.64622 4 3.30708 4.14048 3.05703 4.39052C2.80698 4.64057 2.6665 4.97971 2.6665 5.33333V20C2.6665 20.3536 2.80698 20.6928 3.05703 20.9428C3.30708 21.1929 3.64622 21.3333 3.99984 21.3333H18.6665C19.0201 21.3333 19.3593 21.1929 19.6093 20.9428C19.8594 20.6928 19.9998 20.3536 19.9998 20V10L18.6665 11.3333V20Z"
//                 fill="#225F0D" fill-opacity="0.75" />
//               <path
//                 d="M22.3531 3.89338L20.1065 1.64671C20.0068 1.54673 19.8883 1.46741 19.7579 1.41328C19.6275 1.35916 19.4877 1.3313 19.3465 1.3313C19.2053 1.3313 19.0655 1.35916 18.935 1.41328C18.8046 1.46741 18.6862 1.54673 18.5865 1.64671L9.44648 10.84L8.70648 14.0467C8.67495 14.2022 8.67826 14.3626 8.71618 14.5167C8.7541 14.6707 8.82567 14.8143 8.92576 14.9374C9.02585 15.0604 9.15196 15.1597 9.29502 15.2282C9.43808 15.2967 9.59454 15.3326 9.75314 15.3334C9.83512 15.3424 9.91783 15.3424 9.99981 15.3334L13.2331 14.62L22.3531 5.41338C22.4531 5.31367 22.5324 5.19522 22.5866 5.0648C22.6407 4.93439 22.6686 4.79458 22.6686 4.65338C22.6686 4.51218 22.6407 4.37237 22.5866 4.24195C22.5324 4.11154 22.4531 3.99308 22.3531 3.89338ZM12.5398 13.3867L10.0998 13.9267L10.6665 11.5067L17.5465 4.58004L19.4265 6.46004L12.5398 13.3867ZM20.1798 5.70671L18.2998 3.82671L19.3331 2.77338L21.2265 4.66671L20.1798 5.70671Z"
//                 fill="#225F0D" fill-opacity="0.75" />
//             </svg>
//           </td>
//           <td class="table__column table__column_8">
//             <svg class="popup-link" href="#popup" width="24" height="24" viewBox="0 0 24 24" fill="none"
//               xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M20.25 5.40002H16.5V4.65002C16.5 4.05329 16.2629 3.48099 15.841 3.05903C15.419 2.63708 14.8467 2.40002 14.25 2.40002H9.75C9.15326 2.40002 8.58097 2.63708 8.15901 3.05903C7.73705 3.48099 7.5 4.05329 7.5 4.65002V5.40002H3.75C3.55109 5.40002 3.36032 5.47904 3.21967 5.61969C3.07902 5.76035 3 5.95111 3 6.15002C3 6.34894 3.07902 6.5397 3.21967 6.68035C3.36032 6.82101 3.55109 6.90002 3.75 6.90002H4.5V20.4C4.5 20.7978 4.65804 21.1794 4.93934 21.4607C5.22064 21.742 5.60217 21.9 6 21.9H18C18.3978 21.9 18.7794 21.742 19.0607 21.4607C19.342 21.1794 19.5 20.7978 19.5 20.4V6.90002H20.25C20.4489 6.90002 20.6397 6.82101 20.7803 6.68035C20.921 6.5397 21 6.34894 21 6.15002C21 5.95111 20.921 5.76035 20.7803 5.61969C20.6397 5.47904 20.4489 5.40002 20.25 5.40002ZM9 4.65002C9 4.45111 9.07902 4.26035 9.21967 4.11969C9.36032 3.97904 9.55109 3.90002 9.75 3.90002H14.25C14.4489 3.90002 14.6397 3.97904 14.7803 4.11969C14.921 4.26035 15 4.45111 15 4.65002V5.40002H9V4.65002ZM18 20.4H6V6.90002H18V20.4ZM10.5 10.65V16.65C10.5 16.8489 10.421 17.0397 10.2803 17.1804C10.1397 17.321 9.94891 17.4 9.75 17.4C9.55109 17.4 9.36032 17.321 9.21967 17.1804C9.07902 17.0397 9 16.8489 9 16.65V10.65C9 10.4511 9.07902 10.2603 9.21967 10.1197C9.36032 9.97904 9.55109 9.90002 9.75 9.90002C9.94891 9.90002 10.1397 9.97904 10.2803 10.1197C10.421 10.2603 10.5 10.4511 10.5 10.65ZM15 10.65V16.65C15 16.8489 14.921 17.0397 14.7803 17.1804C14.6397 17.321 14.4489 17.4 14.25 17.4C14.0511 17.4 13.8603 17.321 13.7197 17.1804C13.579 17.0397 13.5 16.8489 13.5 16.65V10.65C13.5 10.4511 13.579 10.2603 13.7197 10.1197C13.8603 9.97904 14.0511 9.90002 14.25 9.90002C14.4489 9.90002 14.6397 9.97904 14.7803 10.1197C14.921 10.2603 15 10.4511 15 10.65Z"
//                 fill="#890000" />
//             </svg>
//           </td>`;
//           // const btnEdit = row.querySelector(".btn-edit");
//           // const btnDelete = row.querySelector(".btn-delete");
//           // btnEdit.innerHTML = editBtnValue;
//           // btnDelete.innerHTML = deleteBtnValue;
//           // btnEdit.addEventListener("click", function (e) {
//           //   e.preventDefault();
//           //   row.classList.add("table__row_editable");
//           //   row.innerHTML = `<td class="table__column table__column_1">${idContractor}</td>
//           //   <td class="table__column table__column_2">${name}</td>
//           //   <td class="table__column table__column_3">${taxNumber}</td>
//           //   <td class="table__column table__column_4">${address}</td>
//           //   <td class="table__column table__column_5">${telephone}</td>
//           //   <td class="table__column table__column_6">${email}</td>
//           //   <td class="table__column table__column_7">
//           //     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           //       <path
//           //         d="M18.6665 20H3.99984V5.33333H12.8132L14.1465 4H3.99984C3.64622 4 3.30708 4.14048 3.05703 4.39052C2.80698 4.64057 2.6665 4.97971 2.6665 5.33333V20C2.6665 20.3536 2.80698 20.6928 3.05703 20.9428C3.30708 21.1929 3.64622 21.3333 3.99984 21.3333H18.6665C19.0201 21.3333 19.3593 21.1929 19.6093 20.9428C19.8594 20.6928 19.9998 20.3536 19.9998 20V10L18.6665 11.3333V20Z"
//           //         fill="#225F0D" fill-opacity="0.75" />
//           //       <path
//           //         d="M22.3531 3.89338L20.1065 1.64671C20.0068 1.54673 19.8883 1.46741 19.7579 1.41328C19.6275 1.35916 19.4877 1.3313 19.3465 1.3313C19.2053 1.3313 19.0655 1.35916 18.935 1.41328C18.8046 1.46741 18.6862 1.54673 18.5865 1.64671L9.44648 10.84L8.70648 14.0467C8.67495 14.2022 8.67826 14.3626 8.71618 14.5167C8.7541 14.6707 8.82567 14.8143 8.92576 14.9374C9.02585 15.0604 9.15196 15.1597 9.29502 15.2282C9.43808 15.2967 9.59454 15.3326 9.75314 15.3334C9.83512 15.3424 9.91783 15.3424 9.99981 15.3334L13.2331 14.62L22.3531 5.41338C22.4531 5.31367 22.5324 5.19522 22.5866 5.0648C22.6407 4.93439 22.6686 4.79458 22.6686 4.65338C22.6686 4.51218 22.6407 4.37237 22.5866 4.24195C22.5324 4.11154 22.4531 3.99308 22.3531 3.89338ZM12.5398 13.3867L10.0998 13.9267L10.6665 11.5067L17.5465 4.58004L19.4265 6.46004L12.5398 13.3867ZM20.1798 5.70671L18.2998 3.82671L19.3331 2.77338L21.2265 4.66671L20.1798 5.70671Z"
//           //         fill="#225F0D" fill-opacity="0.75" />
//           //     </svg>
//           //   </td>
//           //   <td class="table__column table__column_8">
//           //     <svg class="popup-link" href="#popup" width="24" height="24" viewBox="0 0 24 24" fill="none"
//           //       xmlns="http://www.w3.org/2000/svg">
//           //       <path
//           //         d="M20.25 5.40002H16.5V4.65002C16.5 4.05329 16.2629 3.48099 15.841 3.05903C15.419 2.63708 14.8467 2.40002 14.25 2.40002H9.75C9.15326 2.40002 8.58097 2.63708 8.15901 3.05903C7.73705 3.48099 7.5 4.05329 7.5 4.65002V5.40002H3.75C3.55109 5.40002 3.36032 5.47904 3.21967 5.61969C3.07902 5.76035 3 5.95111 3 6.15002C3 6.34894 3.07902 6.5397 3.21967 6.68035C3.36032 6.82101 3.55109 6.90002 3.75 6.90002H4.5V20.4C4.5 20.7978 4.65804 21.1794 4.93934 21.4607C5.22064 21.742 5.60217 21.9 6 21.9H18C18.3978 21.9 18.7794 21.742 19.0607 21.4607C19.342 21.1794 19.5 20.7978 19.5 20.4V6.90002H20.25C20.4489 6.90002 20.6397 6.82101 20.7803 6.68035C20.921 6.5397 21 6.34894 21 6.15002C21 5.95111 20.921 5.76035 20.7803 5.61969C20.6397 5.47904 20.4489 5.40002 20.25 5.40002ZM9 4.65002C9 4.45111 9.07902 4.26035 9.21967 4.11969C9.36032 3.97904 9.55109 3.90002 9.75 3.90002H14.25C14.4489 3.90002 14.6397 3.97904 14.7803 4.11969C14.921 4.26035 15 4.45111 15 4.65002V5.40002H9V4.65002ZM18 20.4H6V6.90002H18V20.4ZM10.5 10.65V16.65C10.5 16.8489 10.421 17.0397 10.2803 17.1804C10.1397 17.321 9.94891 17.4 9.75 17.4C9.55109 17.4 9.36032 17.321 9.21967 17.1804C9.07902 17.0397 9 16.8489 9 16.65V10.65C9 10.4511 9.07902 10.2603 9.21967 10.1197C9.36032 9.97904 9.55109 9.90002 9.75 9.90002C9.94891 9.90002 10.1397 9.97904 10.2803 10.1197C10.421 10.2603 10.5 10.4511 10.5 10.65ZM15 10.65V16.65C15 16.8489 14.921 17.0397 14.7803 17.1804C14.6397 17.321 14.4489 17.4 14.25 17.4C14.0511 17.4 13.8603 17.321 13.7197 17.1804C13.579 17.0397 13.5 16.8489 13.5 16.65V10.65C13.5 10.4511 13.579 10.2603 13.7197 10.1197C13.8603 9.97904 14.0511 9.90002 14.25 9.90002C14.4489 9.90002 14.6397 9.97904 14.7803 10.1197C14.921 10.2603 15 10.4511 15 10.65Z"
//           //         fill="#890000" />
//           //     </svg>
//           //   </td>`;
//           // });
//         });
//       });

//       const btnDeleteCell = document.createElement("td");
//       btnDeleteCell.classList.add("table__column", "table__column_8");
//       row.append(btnDeleteCell);
//       row.classList.add("table__row_editable");

//       // const submitBtn = document.createElement("button");
//       // submitBtn.classList.add("form__submit-btn");
//       // submitBtn.setAttribute("type", "submit");
//       // form.append(submitBtn);
//       // submitBtn.innerHTML = editBtnValue;
//       // const cancelBtn = document.createElement("button");
//       // cancelBtn.classList.add("form__cancel-btn");
//       // cancelBtn.setAttribute("type", "button");
//       // form.append(cancelBtn);
//       // cancelBtn.innerHTML = deleteBtnValue;
//       // form.addEventListener("submit", function (e) {
//       //   e.preventDefault();
//       //   const idContractor = document.querySelector(
//       //     ".table__input[name='idContractor']"
//       //   ).value;
//       //   const name = document.querySelector(
//       //     ".table__input[name='name']"
//       //   ).value;
//       //   const taxNumber = document.querySelector(
//       //     ".table__input[name='taxNumber']"
//       //   ).value;
//       //   const address = document.querySelector(
//       //     ".table__input[name='address']"
//       //   ).value;
//       //   const telephone = document.querySelector(
//       //     ".table__input[name='telephone']"
//       //   ).value;
//       //   const email = document.querySelector(
//       //     ".table__input[name='email']"
//       //   ).value;
//       // fetch("index.php", {
//       //   method: "POST",
//       //   body: JSON.stringify({
//       //     idContractor,
//       //     name,
//       //     taxNumber,
//       //     address,
//       //     telephone,
//       //     email,
//       //   }),
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       // });
//       // });
//     });
//   });
// });

/* <tr class="table__row">
  <td class="table__column table__column_1">1</td>
  <td class="table__column table__column_2">ООО « Длинное большое название»</td>
  <td class="table__column table__column_3">123456789</td>
  <td class="table__column table__column_4">
    г. Тюмень. ул. Фармана Салманова 123
  </td>
  <td class="table__column table__column_5">+7 (999) 999 99 99</td>
  <td class="table__column table__column_6">example@gmail.com</td>
  <td class="table__column table__column_7 table__small-btn"></td>
  <td class="table__column table__column_8 table__small-btn">
    <svg
      class="popup-link"
      href="#popup"
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 5.35386H14.4615C15.9304 5.35386 17.3392 5.93738 18.3778 6.97604C19.4165 8.0147 20 9.42343 20 10.8923C20 12.3612 19.4165 13.7699 18.3778 14.8086C17.3392 15.8473 15.9304 16.4308 14.4615 16.4308H10.3077"
        stroke="#225F0D"
        stroke-opacity="0.75"
        stroke-width="2.30769"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M6.15385 9.50769L2 5.35384L6.15385 1.2"
        stroke="#225F0D"
        stroke-opacity="0.75"
        stroke-width="2.30769"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </td>
</tr>; */

// import * as flsFunctions from "./modules/functions.js";

// flsFunctions.isWebp();

//пример импорта библиотеки swiper из node_modules:
// import Swiper, { Navigation, Pagination } from "swiper";

// const swiper = new Swiper(".swiper", {
//   modules: [Navigation, Pagination],
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//   },
// })

//кастомный select
// const element1 = document.querySelector("select");
// const choices1 = new Choices(element1, {
//   // renderChoiceLimit: 3,
//   // maxItemCount: 3,
//   itemSelectText: "",
//   searchEnabled: false,
//   shouldSort: false,
//   noResultsText: 'ни чего не найдено',
//   placeholder: true,
// });

const fieldInput1 = document.querySelector("#field-input-1");
const btn1 = document.querySelector("#btn-1");

if (fieldInput1) {
  fieldInput1.addEventListener("input", function () {
    if (fieldInput1.value.length > 0) {
      btn1.classList.remove("btn_disabled");
    } else {
      btn1.classList.add("btn_disabled");
    }
  });
}

const inputSearch = document.querySelectorAll(".input_search");
if (inputSearch) {
  inputSearch.forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.add("input_search_active");
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

// const popupCloseIcon = document.querySelectorAll(".popup-close");
// if (popupCloseIcon.length > 0) {
//   for (let index = 0; index < popupCloseIcon.length; index++) {
//     const el = popupCloseIcon[index];
//     el.addEventListener("click", function (e) {
//       popupClose(el.closest(".popup")); //ближайший родитель класса popup
//       e.preventDefault();
//     });
//   }
// }

const navLlink = document.querySelectorAll(".nav__link");
const thisPage = document.querySelector(".page").innerHTML;
if (navLlink) {
  navLlink.forEach((item) => {
    if (item.innerHTML.includes(thisPage)) {
      item.classList.add("nav__link_active");
    }
  });
}

// setTimeout(function () {
//   document.querySelector("main").classList.add("main_active");
// }, 200);

// --------------------------simplebar:---------------------------------------
if (document.querySelector(".my-simplebar-1")) {
  const simpleBar1 = new SimpleBar(document.querySelector(".my-simplebar-1"), {
    scrollbarMaxSize: 85,
    autoHide: false,
    forceVisible: true,
  });
}

if (document.querySelector(".my-simplebar-2")) {
  const simpleBar2 = new SimpleBar(document.querySelector(".my-simplebar-2"), {
    scrollbarMaxSize: 85,
    autoHide: false,
    forceVisible: true,
  });
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

const btnVariant = document.querySelectorAll(".btn-variant");
if (btnVariant) {
  btnVariant.forEach((item) => {
    item.addEventListener("click", function () {
      // window.location.href = item.getAttribute("href");
      window.location.href = "calculating-done.html";
    });
  });
}

const btnCancel = document.querySelectorAll(".btn-cancel");
if (btnCancel) {
  btnCancel.forEach((item) => {
    item.addEventListener("click", function () {
      window.location.href = "calculating.html";
    });
  });
}
// --------------------------end simplebar:---------------------------------------

// --------------------popup:------------------------

const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");
// const btn = document.querySelector(".project-btn");
const popupLinks = document.querySelectorAll(".popup-link");

let unlock = true;
const timeout = 800;

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

// if (popupLinks.length > 0) {
//   for (let index = 0; index < popupLinks.length; index++) {
//     const popupLink = popupLinks[index];
//     popupLink.addEventListener("click", function (e) {
//       const row = popupLink.closest(".table__row");
//       row.classList.add("table__row_deletable");
//       const id = row.querySelector(".table__column_1").innerHTML;
//       console.log(id);
//       const popupName = popupLink.getAttribute("href").replace("#", "");
//       const curentPopup = document.getElementById(popupName); //получаем id попап-окна
//       popupOpen(curentPopup);
//       e.preventDefault();
//     });
//   }
// }

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

// const popupCloseIcon = document.querySelectorAll(".popup-close");
// if (popupCloseIcon.length > 0) {
//   for (let index = 0; index < popupCloseIcon.length; index++) {
//     const el = popupCloseIcon[index];
//     el.addEventListener("click", function (e) {
//       const row = document.querySelector(".table__row_deletable");
//       row.classList.remove("table__row_deletable");
//       popupClose(el.closest(".popup")); //ближайший родитель класса popup
//       e.preventDefault();
//     });
//   }
// }

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

// function popupOpen(curentPopup) {
//   if (curentPopup && unlock) {
//     const popupActive = document.querySelector(".popup.open");
//     if (popupActive) {
//       // закрываем текущий открытый попап, если он есть
//       popupClose(popupActive, false);
//     } else {
//       bodyLock();
//     }
//     // console.log(curentPopup);
//     curentPopup.classList.add("open");
//     curentPopup.addEventListener("click", function (e) {
//       if (!e.target.closest(".popup__content")) {
//         // если клик был по области вокруг попапа то ничего не делаем и закрываем попап
//         popupClose(e.target.closest(".popup"));
//         const row = document.querySelector(".table__row_deletable");
//         if (row) {
//           row.classList.remove("table__row_deletable");
//         }
//       }
//     });
//   }
// }

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

// добавляем боди padding-right при открытии попапа, на ширину скролл-бара

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

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

// --------------------end popup:------------------------

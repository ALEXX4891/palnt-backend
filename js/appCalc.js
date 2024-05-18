function simplebar() {
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

// 1) вытаскиваем всех контрагентов для селекта
// 2) вытаскиваем все типы картона для селекта
// 3) создаем таблицу с необходимым количеством разделителей
// 4) формируем из БД таблицу остатков картона

// 5) программа должна предложить несколько вариантов расчета материалов для нарезки разделителей



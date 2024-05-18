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
}
simplebar();
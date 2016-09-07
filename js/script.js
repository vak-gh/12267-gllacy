var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".callback-form");
var close = popup.querySelector(".callback-close");
var nameField = popup.querySelector("[id=callback-name]");
var email = popup.querySelector("[id=callback-email]");
var storage = localStorage.getItem("name");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click",
  function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-content-show");
    if (storage) {
      nameField.value = storage;
      email.focus();
    }
    else {
      nameField.focus();
    }
  });


close.addEventListener("click",
  function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    localStorage.setItem("name", nameField.value);

  });


popup.addEventListener("submit",
  function(event) {

    if (!nameField.value || !email.value) {
      event.preventDefault();
      console.log("Нужно ввести имя и почту");
      popup.classList.add("modal-error");
    }
    else {
      localStorage.setItem("name", nameField.value);
    }
  });

window.addEventListener("keydown", function (event)
  {
    if (event.keyCode === 27) {
      if (popup.classicList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
        localStorage.setItem("name", nameField.value);
      }
    }
  }
);

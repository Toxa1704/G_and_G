
document.getElementById("myForm").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const sms = document.getElementById("sms").value.trim();
  const error = document.getElementById("error");

  error.textContent = ""; 
  if (name.length < 2) {
    error.textContent = "Ім'я повинно містити щонайменше 2 символи.";
    return;
  }
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    error.textContent = "Введіть коректний email.";
    return;
  }
  if (sms.length < 5) {
    error.textContent = "Повідомлення занадто коротке.";
    return;
  }
  const params = new URLSearchParams({ name, email, sms });
  window.open("result.html?" + params.toString(), "_blank");
});

const btnsBuy = document.querySelectorAll(".table-button");
const popupWrapper = document.querySelector(".popup-wrapper");
const closeBtn = document.querySelector(".close-popup");
const page = document.querySelector(".page-wrapper")

btnsBuy.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    popupWrapper.style.display = "flex";
    page.classList.add("blur");
  });
});

closeBtn.addEventListener("click", () => {
  popupWrapper.style.display = "none";
  page.classList.remove("blur");
});

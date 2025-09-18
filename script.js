
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); 
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const sms = document.getElementById("sms").value.trim();
  const error = document.getElementById("error");

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
  error.textContent = ""; 
  console.log(name);
  console.log(email);
  console.log(sms);
  const params = new URLSearchParams({ name, email, sms });
  window.open("result.html?" + params.toString(), "_blank");
});
const btnBuy = document.getElementsByClassName("table-button")[0];
const popupWrapper = document.getElementsByClassName("popup-wrapper")[0];
const closeBtn = document.getElementsByClassName("close-popup")[0];


btnBuy.addEventListener("click", () => {
  popupWrapper.style.display = "flex"; 
});


closeBtn.addEventListener("click", () => {
  popupWrapper.style.display = "none";
});


popupWrapper.addEventListener("click", (e) => {
  if (e.target === popupWrapper) {
    popupWrapper.style.display = "none";
  }
});
console.log(btnBay);
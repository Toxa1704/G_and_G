import axios from '/axios';
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
  const apiUrl = "https://g-and-g-pi.vercel.app/test"
  const parameters = {
  name,
  email,
  sms
};
console.log(parameters)
  axios.get(apiUrl,{})
  .then(response => {
    console.log(response.data); 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
//     axios.post('https://api.example.com/data')
//   .then(response => {
//     console.log(response.data); 
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
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

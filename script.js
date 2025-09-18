document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const sms = document.getElementById("message").value.trim();
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
  const apiUrl = "https://jsonplaceholder.typicode.com/posts/1"
  const parameters = {
  name,
  email,
  sms
};
  axios.get(apiUrl,{params: parameters})
  .then(response => {
    console.log(response.data); 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
//   axios.post(apiUrl,{params: parameters})
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
    console.log(2)
    popupWrapper.style.display = "flex";
    page.classList.add("blur");
  });
});
closeBtn.addEventListener("click", () => {
    console.log(3)
  popupWrapper.style.display = "none";
  page.classList.remove("blur");
});
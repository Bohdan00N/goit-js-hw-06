const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const formElements = e.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  if (mail === "" || password === "") {
    alert("Все поля должны быть заполнены");
  }
  const formData = {
    mail,
    password,
  };
  console.log(formData);
  e.target.reset();
}
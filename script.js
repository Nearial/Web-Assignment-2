document.querySelector("#basic-form").addEventListener("submit", (event) => {
  event.preventDefault();

  let today = new Date();

  let nameDiv = document.querySelector("#name");
  let emailDiv = document.querySelector("#email");
  let msgDiv = document.querySelector("#msg");

  if (today.getDay() >= 1 && today.getDay() <= 4) {
    if (
      emailDiv.value.includes("cph-") &&
      emailDiv.value.includes("cphbusiness.dk")
    ) {
      let msgObj = {
        name: nameDiv.value.trim(),
        email: emailDiv.value.trim(),
        msgDiv: msgDiv.value.trim(),
      };

      console.log(msgObj);
    } else {
      alert("Please use a cphbusiness mail");
    }
  } else {
    alert("You can only submit on mondays, tuesdays, wednesdays, thursdays.");
  }
});

window.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("#submit").click();
  }
});

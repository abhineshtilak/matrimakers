const form = document.getElementById("callbackForm");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    ritual: document.getElementById("ritual").value,
    area: document.getElementById("area").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    notes: document.getElementById("notes").value
  };

  fetch("https://script.google.com/macros/s/AKfycbzYtipb9BuhcnTvMzhu9rc5_ryYH43ZWETD4ycFZTqo2clbSegufPA6aFTF8GqUoTDtVA/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(result => {

    alert("Thank you. We will call you shortly.");

    form.reset();

  })
  .catch(error => {

    alert("Something went wrong. Please try again.");

    console.error(error);

  });

});
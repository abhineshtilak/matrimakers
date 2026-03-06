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

  fetch("https://script.google.com/macros/s/AKfycbxkW-23u4Qa4ZPOHA6JJzMOALVsnAfiUhdvMQPn97WKwRSc_4EF2rbTeGQmmvKxfdRZug/exec", {
    method: "POST",
    mode: "no-cors",   // IMPORTANT
    body: JSON.stringify(data)
  });

  alert("Thank you. We will call you shortly.");

  form.reset();

});
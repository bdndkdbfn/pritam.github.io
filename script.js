document.getElementById("submit").addEventListener("click", function() {
  const name = document.getElementById("name").value.trim();
  const enquiry = document.getElementById("enquiry").value.trim();
  const response = document.getElementById("response");

  if (!name || !enquiry) {
    response.textContent = "Please fill in all fields.";
    response.style.color = "red";
  } else {
    response.textContent = `Thank you, ${name}! Your enquiry has been submitted.`;
    response.style.color = "green";
  }
});



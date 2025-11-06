alert("JavaScript connected successfully!");
// Wait until page fully loads
document.addEventListener("DOMContentLoaded", function () {

  const nameInput = document.getElementById("name");
  const enquiryInput = document.getElementById("enquiry");
  const submitBtn = document.getElementById("submit");
  const responseBox = document.getElementById("response");

  submitBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const enquiry = enquiryInput.value.trim();

    if (name === "" || enquiry === "") {
      responseBox.textContent = "Please fill in all fields.";
      responseBox.style.color = "red";
      return;
    }

    // Show confirmation message
    responseBox.style.color = "green";
    responseBox.textContent = `Thank you, ${name}! Your enquiry has been submitted.`;

    // Clear the form
    nameInput.value = "";
    enquiryInput.value = "";
  });
});

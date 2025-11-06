document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submit");
  const nameInput = document.getElementById("name");
  const enquiryInput = document.getElementById("enquiry");
  const responseBox = document.getElementById("response");

  submitBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const enquiry = enquiryInput.value.trim();

    if (!name || !enquiry) {
      responseBox.textContent = "Please fill in all fields.";
      responseBox.style.color = "red";
    } else {
      responseBox.textContent = `Thank you, ${name}! Your enquiry has been submitted.`;
      responseBox.style.color = "green";

      // Optional: clear fields after submit
      nameInput.value = "";
      enquiryInput.value = "";
    }
  });
});

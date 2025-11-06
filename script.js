document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const enquiryInput = document.getElementById("enquiry");
  const submitBtn = document.getElementById("submit");
  const responseBox = document.getElementById("response");

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault(); // stop form from reloading the page

    const name = nameInput.value.trim();
    const enquiry = enquiryInput.value.trim();

    if (name === "" || enquiry === "") {
      responseBox.textContent = "⚠️ Please fill in all fields.";
      responseBox.style.color = "red";
      return;
    }

    responseBox.textContent = `✅ Thank you, ${name}! Your enquiry has been submitted.`;
    responseBox.style.color = "green";

    nameInput.value = "";
    enquiryInput.value = "";
  });
});

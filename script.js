// script.js

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("enquiryForm");
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const responseBox = document.getElementById("response");

  if (!form) {
    console.error("Form with id 'enquiryForm' not found!");
    return;
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page reload

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || message === "") {
      responseBox.innerHTML = "<p style='color:red;'>Please fill all fields!</p>";
      return;
    }

    // Show the enquiry on the screen
    responseBox.innerHTML = `
      <h4>✅ Enquiry Received</h4>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p style="color:green;">Thank you for your message!</p>
    `;

    // Clear inputs
    nameInput.value = "";
    messageInput.value = "";
  });
});

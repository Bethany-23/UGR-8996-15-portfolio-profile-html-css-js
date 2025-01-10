document.addEventListener("DOMContentLoaded", () => {
  // Form Validation
  const form = document.querySelector(".form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault(); // Prevent form submission for validation
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const comment = document.querySelector("#comment").value.trim();

      if (!name) {
        alert("Please enter your name.");
        return;
      }
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (!comment) {
        alert("Please enter your comment or suggestion.");
        return;
      }

      alert("Form submitted successfully!");
      form.reset(); // Reset form fields after successful submission
    });
  }

  // Social Links Copy to Clipboard
  const socialLinks = document.querySelectorAll(".contac2 ul li a");
  socialLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); // Prevent default link behavior
      const textToCopy = link.textContent.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert(`Copied "${textToCopy}" to clipboard!`);
      });
    });
  });

  // Burger Menu Functionality
  const burger = document.createElement("div");
  burger.classList.add("burger");

  for (let i = 0; i < 3; i++) {
    const line = document.createElement("div");
    burger.appendChild(line);
  }

  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".li1");

  // Append burger to the navbar
  navbar.appendChild(burger);

  // Toggle active class for the burger and nav menu
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});

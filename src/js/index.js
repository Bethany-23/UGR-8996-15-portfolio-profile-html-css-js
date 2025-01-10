

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.createElement("div");
  burger.classList.add("burger");

  // Create lines for the burger menu
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

  // Optional: Close menu when a link is clicked
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      burger.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("video");
  const audio = document.querySelector("audio");

  // Play audio when video plays
  video.addEventListener("play", () => {
      audio.currentTime = video.currentTime; // Sync audio to video
      audio.play();
  });

  // Pause audio when video pauses
  video.addEventListener("pause", () => {
      audio.pause();
  });

  // Sync audio when video seeks
  video.addEventListener("timeupdate", () => {
      if (Math.abs(audio.currentTime - video.currentTime) > 0.3) {
          audio.currentTime = video.currentTime;
      }
  });

  // Pause video if audio ends
  audio.addEventListener("ended", () => {
      video.pause();
  });
});

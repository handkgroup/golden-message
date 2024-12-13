document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const mainFvHeight = document.querySelector(".main-fv").offsetHeight;

  window.addEventListener("scroll", () => {
    // This will check if the page is scrolled down beyond the main-fv section
    if (window.pageYOffset > mainFvHeight) {
      header.classList.add("sticky");
      header.classList.remove("non-sticky");
    } else {
      header.classList.add("non-sticky");
      header.classList.remove("sticky");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Sections to animate
  const sectionsToAnimate = [
    '.main-fv',
    '.news',
    '.about-section',
    '.service-section',
    '.special-section'
  ];

  // Observe each section
  sectionsToAnimate.forEach(selector => {
    const section = document.querySelector(selector);
    if (section) {
      // Set initial styles
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    }
  });

  // Keep existing observers for news components
  document.querySelectorAll(".news-title").forEach((el) => observer.observe(el));
  document.querySelectorAll(".news-content").forEach((el) => observer.observe(el));
  document.querySelectorAll(".dark-btn").forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const typingElements = document.querySelectorAll(".typing");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const loaderText = document.querySelector(".loader p");
  
  // Hide text initially
  loaderText.style.opacity = "0";
  
  setTimeout(() => {
    loaderText.style.opacity = "1";
    loaderText.style.animation = "textColor 0.5s forwards";
    
    typingElements.forEach((element) => {
      const finalText = element.textContent.trim();
      element.textContent = "";
      
      const textArray = [...finalText];
      const spans = textArray.map((char) => {
        const span = document.createElement("span");
        if (char === " " || char === "." || char.match(/\p{Emoji}/u)) {
          span.textContent = char;
          span.isLocked = true;
          if (char === " ") {
            span.style.marginRight = "0.25em";
          }
        }
        element.appendChild(span);
        return span;
      });
      
      const glitchInterval = setInterval(() => {
        spans.forEach((span) => {
          if (!span.isLocked) {
            span.textContent =
              characters[Math.floor(Math.random() * characters.length)];
          }
        });
      }, 20);
      
      spans.forEach((span, i) => {
        if (!span.isLocked) {
          setTimeout(() => {
            span.isLocked = true;
            span.textContent = textArray[i];
          }, 150 + (i * 20));
        }
      });
      
      setTimeout(() => {
        clearInterval(glitchInterval);
      }, 150 + (finalText.length * 20));

      // Text slides out with black background
      setTimeout(() => {
        loaderText.style.animation = "slideOutText 0.4s ease-in-out forwards";
      }, 2000); // Same timing as background slide out
    });
  }, 400);
});

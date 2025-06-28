// Auto Type Effect for Portfolio Page
  const words = ["Website Developer", "Frontend Developer", "Backend Developer"];
  const el = document.querySelector(".auto-type");

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let wait = 2000;

  function type() {
    const current = words[wordIndex];
    let typed = current.substring(0, charIndex);
    el.textContent = typed;

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, wait);
    }
  }

  document.addEventListener("DOMContentLoaded", type);

  
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header .navbar a");

  window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });



// Hamburger Menu Toggle for Mobile Navigation
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    document.querySelectorAll(".navbar a").forEach(link =>
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
      })
    );
  });


  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    if (!name || !email || !phone || !message) {
      alert("Please fill out all fields.");
      return;
    }

    alert("Message submitted successfully!");

    // Reset the form
    form.reset();
  });


  const scrollBtn = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    }
    
    else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
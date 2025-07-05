  document.addEventListener('DOMContentLoaded', () => {
    const hireMeButtons = document.getElementsByClassName("hire-me");
    const contactSection = document.getElementById("contact");

    // Add scroll-to-contact behavior
    Array.from(hireMeButtons).forEach(button => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: "smooth" });
      });
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        let activeSectionFound = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSectionFound = true;

            // Remove active from all nav items
            navLinks.forEach((link) =>
              link.parentElement.classList.remove('active')
            );

            // Add active class to the current section link
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(
              `.nav-links a[href="#${id}"]`
            );
            if (activeLink) {
              activeLink.parentElement.classList.add('active');
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Fallback for scroll to top (home section)
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        navLinks.forEach((link) =>
          link.parentElement.classList.remove('active')
        );
        const homeLink = document.querySelector('.nav-links a[href="#home"]');
        if (homeLink) {
          homeLink.parentElement.classList.add('active');
        }
      }
    });
  });

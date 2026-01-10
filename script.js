window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(section => {
    const rect = section.getBoundingClientRect();
    const offset = rect.top / window.innerHeight;
    section.style.transform = `translateY(${offset * 40}px)`;
    section.style.opacity = 1 - Math.abs(offset);
  });
});
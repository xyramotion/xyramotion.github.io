gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".hero h1", {
  opacity: 0,
  y: 80,
  duration: 1.3
});

gsap.from(".hero p", {
  opacity: 0,
  y: 40,
  delay: 0.4
});

// IMAGES
gsap.utils.toArray(".section img").forEach(img => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 80%",
    },
    opacity: 0,
    y: 120,
    duration: 1.2
  });
});

// HEADINGS
gsap.utils.toArray("h2").forEach(text => {
  gsap.from(text, {
    scrollTrigger: {
      trigger: text,
      start: "top 85%",
    },
    opacity: 0,
    y: 60,
    duration: 1
  });
});

// CONTACT LINKS
gsap.from(".contact-links a", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 1
});
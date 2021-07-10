

const showBtn = document.querySelector(".show-menu");
const mobileMenu = document.querySelector(".mobile-list");
const hideBtn = document.querySelector(".hide-menu");

showBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show-menu");
});

hideBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show-menu");
});

const allBandes = document.querySelectorAll(".bande");
const tl = gsap.timeline();

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave() {
        const done = this.async();

        tl.to(allBandes, { scaleX: 1, stagger: 0.05 });

        await delay(800);
        done();
      },
      enter() {
        window.scrollTo(0, 0);
        tl.to(allBandes, { scaleX: 0, stagger: 0.05 });
      },
      once() {
        tl.to(".anim-nav", { autoAlpha: 1, y: 0, stagger: 0.2 });
        tl.fromTo(
          ".anim-header",
          { autoAlpha: 0, x: 50, duration: 0.5 },
          { autoAlpha: 1, x: 0 }
        ).fromTo(
          ".anim-text",
          { autoAlpha: 0, x: -50, duration: 0.5 },
          { autoAlpha: 1, x: 0 },
          "-=.5"
        );
      },
    },
  ],
});





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
const TLAnim = new TimelineMax();


 
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

        TLAnim.to(allBandes, { width: "100%", stagger: 0.05 });

        await delay(800);
        done();
      },
      enter() {
        TLAnim.to(allBandes, { width: "0%", stagger: 0.05 });
      },
      once() {
         TLAnim.to(".anim-nav", { autoAlpha: 1, y: 0, stagger: 0.2 })
        TLAnim.fromTo(
          ".anim-header",
          { autoAlpha: 0, x: 50, duration: 0.5 },
          { autoAlpha: 1, x: 0 }
        ).fromTo(
          ".anim-text",
          { autoAlpha: 0, x: -50, duration: 0.5 },
          { autoAlpha: 1, x: 0 },
          "-=.5"
        );
   

      }
     
    },
  ],
});

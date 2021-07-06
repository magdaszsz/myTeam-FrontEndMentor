const showBtn = document.querySelector('.show-menu');
const mobileMenu = document.querySelector('.mobile-list');
const hideBtn = document.querySelector('.hide-menu')

showBtn.addEventListener('click', () => {
  mobileMenu.classList.add('show-menu');
})

hideBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show-menu');
})

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
    },
  ],
});
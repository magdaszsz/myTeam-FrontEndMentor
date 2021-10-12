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

barba.hooks.afterEnter((data) => {
  const dirCards = document.querySelectorAll(".directors-card");
  const dirBtns = document.querySelectorAll(".directors-card-btn");

  dirCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("toggle")) {
        e.currentTarget.classList.toggle("flip");
      }
    });
  });

  // const form = document.querySelector("form");
  // const userName = document.getElementById("name");
  // const title = document.getElementById("title");
  // const company = document.getElementById("company-name");
  // const text = document.getElementById("textarea");
  // const email = document.getElementById("email");
  // const allInputs = document.querySelectorAll(".unserInput");

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   checkInputs();
  // });

  //  function isEmail(email) {
  //    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //      email
  //    );
  //  }

  const checkInputs = () => {
    const userNameValue = userName.value.trim();
    const titleValue = title.value.trim();
    const companyValue = company.value.trim();
    const textValue = text.value.trim();
    //const emailValue = email.value.trim();

    if (userNameValue === "") {
      setError(userName, "Name field cannot be empty");
    } else {
      setSuccess(userName);
    }

    if (titleValue === "") {
      setError(title, "Title field cannot be empty");
    } else {
      setSuccess(title);
    }

    if (companyValue === "") {
      setError(company, "Company field cannot be empty");
    } else {
      setSuccess(company);
    }

    if (textValue === "") {
      setError(text, "Message field cannot be empty");
    } else {
      setSuccess(text);
    }

    //  if (emailValue === "") {
    //    setError(email, "Email field cannot be empty");
    //  } else if (!isEmail(emailValue)) {
    //    setError(email, "Please enter a valid email");
    //  } else {
    //    setSuccess(email);
    //  }
  };

  function setError(input, message) {
    const inputWrapper = input.parentElement;
    const small = inputWrapper.querySelector("small");
    inputWrapper.className = "input-wrapper error";
    small.innerText = message;
  }

  function setSuccess(input) {
    const inputWrapper = input.parentElement;
    inputWrapper.className = "input-wrapper success";
  }
});

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
        tl.to(".styled-content", { autoAlpha: 1 })
          .to(".anim-nav", { autoAlpha: 1, y: 0, stagger: 0.2 })
          .fromTo(
            ".anim-header",
            { autoAlpha: 0, x: 50, duration: 0.5 },
            { autoAlpha: 1, x: 0 }
          )
          .fromTo(
            ".anim-text",
            { autoAlpha: 0, x: -50, duration: 0.5 },
            { autoAlpha: 1, x: 0 },
            "<"
          );
      },
    },
  ],
});

// const form = document.querySelector('form');
// const userName = document.getElementById('name');
// const title = document.getElementById('title');
// const company = document.getElementById('company-name');
// const text = document.getElementById('textarea');
// const email = document.getElementById('email');
// const allInputs = document.querySelectorAll('.unserInput');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
// checkInputs();

// })

// function isEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
// }

// const checkInputs = () => {
//   const userNameValue = userName.value.trim();
//   const titleValue = title.value.trim();
//   const companyValue = company.value.trim();
//   const textValue = text.value.trim();
//   const emailValue = email.value.trim();

//   if(userNameValue === '') {
//     setError(userName, 'Name field cannot be empty')
//   } else {
//     setSuccess(userName)
//   }

//   if(titleValue === '') {
//     setError(title, 'Title field cannot be empty')
//   } else {
//     setSuccess(title)
//   }

//   if(companyValue === '') {
//     setError(company, 'Company field cannot be empty')
//   } else {
//     setSuccess(company)
//   }

//   if(textValue === '') {
//     setError(text, 'Message field cannot be empty')
//   } else {
//     setSuccess(text)
//   }

//   if(emailValue === '') {
//     setError(email, 'Email field cannot be empty')
//   } else if(!isEmail(emailValue)) {
//     setError(email, 'Please enter a valid email')
//   } else {
//     setSuccess(email)
//   }
// }

// function setError(input, message) {
//   const inputWrapper = input.parentElement;
//   const small = inputWrapper.querySelector("small");
//   inputWrapper.className = "input-wrapper error";
//   small.innerText = message;
// }

// function setSuccess(input) {
//   const inputWrapper = input.parentElement;
//   inputWrapper.className = "input-wrapper success";
// }

// FLIPPING CARDS

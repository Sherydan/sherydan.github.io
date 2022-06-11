/* COPY PASTE MODE ON HERE */

(function () {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  /**
   * Intro type effect
   */
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
    });
  }
})();

function sendMail() {
  Email.send({
    SecureToken: "34c9d075-e1a2-44bc-be32-80c5f6e4f09f",
    To: "tobar.luis.c@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New mail from portfolio",
    Body: "Name: " + document.getElementById("name").value 
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Message: " + document.getElementById("message").value,
  }).then((message) => alert("Message sent"));
  
}


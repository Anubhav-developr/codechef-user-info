(() => {
  "use strict";

  const form = document.querySelector("#finder-form");
  const input = document.querySelector("#username-input");
  const message = document.querySelector("#form-message");
  const inputState = document.querySelector("#input-state");
  const header = document.querySelector("#site-header");
  const revealElements = document.querySelectorAll(".reveal");

  if (!form || !input || !message) return;

  const CODECHEF_PROFILE_BASE = "https://www.codechef.com/users/";

  function validateUsername(value) {
    const username = value.trim();

    if (!username) {
      return {
        valid: false,
        message: "Please enter a CodeChef username."
      };
    }

    if (username.length > 50) {
      return {
        valid: false,
        message: "Username is too long."
      };
    }

    return {
      valid: true,
      username
    };
  }

  function showMessage(text, type = "") {
    message.textContent = text;
    message.className = `form-message ${type}`.trim();
  }

  function clearMessage() {
    message.textContent = "";
    message.className = "form-message";
  }

  function redirectToCodeChef(username) {
    const encodedUsername = encodeURIComponent(username);
    window.location.href = `${CODECHEF_PROFILE_BASE}${encodedUsername}`;
  }

  function handleSearch(event) {
    event.preventDefault();

    const result = validateUsername(input.value);

    if (!result.valid) {
      showMessage(result.message, "error");
      input.classList.add("input-error");
      input.focus();
      return;
    }

    input.classList.remove("input-error");
    inputState.textContent = "✓";
    showMessage(`Opening CodeChef profile for @${result.username}…`, "loading");

    window.setTimeout(() => {
      redirectToCodeChef(result.username);
    }, 420);
  }

  form.addEventListener("submit", handleSearch);

  input.addEventListener("input", () => {
    input.classList.remove("input-error");
    inputState.textContent = input.value.trim() ? "✓" : "↵";

    if (message.classList.contains("error")) {
      clearMessage();
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("scrolled", window.scrollY > 12);
    },
    { passive: true }
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px"
    }
  );

  revealElements.forEach((element) => observer.observe(element));
})();
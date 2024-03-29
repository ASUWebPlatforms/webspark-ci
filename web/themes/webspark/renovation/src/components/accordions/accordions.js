// Allow Accordion items to be opened from the URL
(function() {
  const toggler = (url, state) => {
    if (url.indexOf("#") !== -1) {
      const sectionName = url.split("#").at(-1);
      const link = document.getElementById(sectionName);

      if (link) {
        const section = link.closest(".accordion-item");
        const content = section.querySelector(".accordion-body");

        link.setAttribute("aria-expanded", state);

        if (state) {
          content.classList.add("show");
        } else {
          content.classList.remove("show");
        }
      }
    }
  };

  window.addEventListener("hashchange", (event) => {
    toggler(event.oldURL, false);
    toggler(event.newURL, true);
  });

  window.addEventListener("DOMContentLoaded", () => {
    toggler(window.location.href, true);
  });
})();

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


// finds Accordions configured to have first accordion panel open by default
document.addEventListener('DOMContentLoaded', function() {
  // Select div elements with class "accordion" and data-first-expanded attribute equal to 1
  var accordionElements = document.querySelectorAll('div.accordion[data-first-expanded="1"]');

  // Iterate through the selected elements
  accordionElements.forEach(function(accordionElement) {
    // Find the first child div with class "accordion-item"
    var accordionItem = accordionElement.querySelector('div.accordion-item');

    // Check if an accordion item is found
    if (accordionItem) {
      // Find a tag inside accordionItem with id starting with "accordion-header-"
      var headerTag = accordionItem.querySelector('[id^="accordion-header-"]');
      // Find a tag inside accordionItem with id starting with "accordion-content-"
      var contentTag = accordionItem.querySelector('[id^="accordion-content-"]');

      // Check if the header tag is found
      if (headerTag) {
        // Remove the class "collapsed" from the header tag
        headerTag.classList.remove('collapsed');
        // Find and update the aria-expanded attribute
        if (headerTag.getAttribute('aria-expanded') === 'false') {
          headerTag.setAttribute('aria-expanded', 'true');
        }
      }
      // Check if the content tag is found
      if (contentTag) {
        // Add the class "show" to the content tag
        contentTag.classList.add('show');
      }
    }
  });
});

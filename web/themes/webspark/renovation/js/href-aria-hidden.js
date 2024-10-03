(function () {
  document.addEventListener("DOMContentLoaded", (event) => {
    const aWithoutHref = document.querySelectorAll('a[href="#"]');
    const aWithoutHrefNoHref = document.querySelectorAll('a:not([href])');
    aWithoutHref.forEach((a) => {
      a.setAttribute("aria-hidden", "true");
      a.setAttribute("tabindex", "-1");
    });
    aWithoutHrefNoHref.forEach((a) => {
      a.setAttribute("aria-hidden", "true");
      a.setAttribute("tabindex", "-1");
    });
  });
})();

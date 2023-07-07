(function ($, Drupal, drupalSettings) {
  /**
   * Drupal Behavior for managing the Anchor Menu functionality.
   */
  Drupal.behaviors.anchorMenu = {
    attach: function (context, settings) {
      if ($(context).find('#uds-anchor-menu').length) {
        let links = $('.webspark-anchor-link-data');

        if (!links.length) {
          return;
        }

        let section = $('.uds-anchor-menu-wrapper h4').text().toLowerCase().trim();

        // Iterates over each link and creates a new navigation link with the appropriate data attributes.
        links.each(function (i, item) {
          let icon = $(item).siblings('.anchor-link-icon').html();
          let title = $(item).data('title');
          let href = $(item).attr('id');
          let data_title = title.toLowerCase();

          $('#uds-anchor-menu .nav').append('<a class="nav-link" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="internal link" data-ga-region="main content" data-ga-component="" data-ga-section="' + section + '" data-ga-text="' + data_title + '" href="#' + href + '">' + icon + title + '</a>');
        });

        // Adds an ID to the header.
        $('#ws2HeaderContainer header').attr('id', 'global-header');

        // Stores the reference to the navbar.
        let navbar = document.getElementById('uds-anchor-menu');

        // We use setTimeout to compensate header built by react
        setTimeout(function () {
          let globalHeader = document.getElementById('global-header');

          // Compensate for a fixed admin toolbar.
          let offset = getAnchorMenuTop();

          initializeAnchorMenu(globalHeader, navbar, offset);
        }, 100);

        $('.uds-anchor-menu').show();

        let $toolbarIconMenu = $('.toolbar-icon-menu');
        $toolbarIconMenu.on('click', function (event) {
          setTimeout(() => {
            navbar.style.top = getAnchorMenuTop() + 'px';
          }, 100);
        });

        window.addEventListener('resize', () => {
          navbar.style.top = getAnchorMenuTop() + 'px';
        });

      }
    },
  };


  /**
   * This function initializes the anchor menu. It sets up scroll and click events
   * on the anchor links, makes the navbar sticky on scroll, and adjusts the header
   * and navbar positions based on scroll direction and position.
   *
   * @param globalHeader The global header element.
   * @param navbar The navbar element.
   * @param offset Offset value for adjusting header and navbar positions.
   */
  function initializeAnchorMenu(globalHeader, navbar, offset) {
    const anchors = navbar.getElementsByClassName('nav-link');
    const navbarInitialPosition = navbar.getBoundingClientRect().top + window.scrollY;
    const anchorTargets = new Map();
    let previousScrollPosition = window.scrollY;

    // Cache the anchor target elements by mapping them as a key/pair so don't have to
    // parse the dom on every scroll event
    for (anchor of anchors) {
      const targetId = anchor.getAttribute('href').replace('#', '');
      const target = document.getElementById(targetId);
      anchorTargets.set(anchor, target);
    }

    // Event listener for window scroll event
    window.addEventListener('scroll', function () {
      const navbarY = navbar.getBoundingClientRect().top;
      const headerHeight = globalHeader.offsetHeight;

      // If scrolling DOWN
      if (
        window.scrollY > previousScrollPosition &&
        !navbar.classList.contains('uds-anchor-menu-sticky')
      ) {
        if (navbarY > offset && navbarY < headerHeight + offset) {
          if (window.innerWidth > 610) { globalHeader.style.top = -(headerHeight - navbarY) + 'px'; }

        } else if (navbarY <= offset) {
          if (window.innerWidth > 610) { globalHeader.style.top = -globalHeader.offsetHeight + 'px'; }

          navbar.classList.add('uds-anchor-menu-sticky');
          navbar.style.top = getAnchorMenuTop() + 'px';
        }
      }
      // If scrolling UP
      if (
        window.scrollY < previousScrollPosition &&
        window.scrollY < (navbarInitialPosition)
      ) {
        navbar.classList.remove('uds-anchor-menu-sticky');
        if (globalHeader.getBoundingClientRect().top < offset) {
          globalHeader.style.top = getGlobalHeaderTop() + 'px';
        }
      }

      for (let [anchor, target] of anchorTargets) {
        const offsets = navbar.offsetHeight;

        if (
          target.getBoundingClientRect().top < offsets &&
          target.getBoundingClientRect().top + target.offsetHeight > offsets
        ) {
          anchor.classList.add('active');
        } else {
          anchor.classList.remove('active');
        }
      }

      previousScrollPosition = window.scrollY;
    });

    // Event listener for anchor click event
    for (let [anchor, anchorTarget] of anchorTargets) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Compensate for height of navbar so content appears below it
        let scrollBy =
          anchorTarget.getBoundingClientRect().top - navbar.offsetHeight - offset;

        // If window hasn't been scrolled, compensate for header shrinking.
        const approximateHeaderSize = 65;
        if (window.scrollY === 0) {
          scrollBy += approximateHeaderSize;
        }

        // If navbar hasn't been stickied yet, that means global header is still in view, so compensate for header height
        if (!navbar.classList.contains('uds-anchor-menu-sticky')) {
          if (window.scrollY > 0) {
            scrollBy += 24;
          }
          scrollBy -= globalHeader.offsetHeight;
        }

        window.scrollBy({
          top: scrollBy,
          behavior: 'smooth',
        });

        // Remove active class from other anchor in navbar, and add it to the clicked anchor
        const active = navbar.querySelector('.nav-link.active');

        if (active) {
          active.classList.remove('active');
        }

        e.target.classList.add('active');
      });
    }
  }

  /**
   * Calculate the position where the Anchor menu should be rendered.
   *
   * @returns {number|*}
   */
  function getAnchorMenuTop() {
    const $toolbarBar = $('#toolbar-bar');
    const $toolbarItemAdministrationTray = $('#toolbar-item-administration-tray');
    const $globalHeader = $('#global-header');
    const $navbar = $('#uds-anchor-menu');
    let anchorMenuTop = (window.innerWidth < 610) ? $globalHeader.height() : 0;

    // If the toolbar exists, add its height to anchorMenuTop
    if ($toolbarBar.length) {
      anchorMenuTop += $toolbarBar.height();
    }

    // If navbar exists and has specific classes, and admin tray is active and
    // not vertical, add the height of the admin tray
    if (
      $navbar.length &&
      $navbar.hasClass('uds-anchor-menu-sticky') &&
      $toolbarItemAdministrationTray.hasClass('is-active') &&
      !$toolbarItemAdministrationTray.hasClass('toolbar-tray-vertical')
    ) {
      anchorMenuTop += $toolbarItemAdministrationTray.height();
    }

    return anchorMenuTop;
  }

  /**
   * Calculate the position where the global header should be rendered.
   *
   * @returns {number|*}
   */
  function getGlobalHeaderTop() {
    const $toolbarBar = $('#toolbar-bar');
    const $toolbarItemAdministrationTray = $('#toolbar-item-administration-tray');
    let headerPosition = 0;

    // If the toolbar exists, add its height to the header position
    if ($toolbarBar.length) {
      headerPosition += $toolbarBar.height();
    }

    // If the admin tray is active and not in a vertical state, add the height
    // to the header position
    if (
      $toolbarItemAdministrationTray.hasClass('is-active') &&
      !$toolbarItemAdministrationTray.hasClass('toolbar-tray-vertical')
    ) {
      headerPosition += $toolbarItemAdministrationTray.height();
    }

    return headerPosition;
  }
})(jQuery, Drupal, drupalSettings);

(function ($, Drupal, drupalSettings) {
  /**
   * Drupal Behavior for managing the Anchor Menu functionality.
   * This behavior initiates when the DOM is loaded and initializes the anchor menu,
   * adds an ID to the header, sets the navbar position, and shows the anchor menu.
   */
  Drupal.behaviors.anchorMenu = {
    attach: function (context, settings) {
      if ($(context).find('#uds-anchor-menu').length) {
        // Grabs the links for the anchor menu and a section text for data attributes.
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

          $('#uds-anchor-menu .nav').append('<a class="nav-link" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="internal link" data-ga-region="main content" data-ga-component="" data-ga-section="' + section + '" data-ga-text="' + data_title + '" href="#' + href + '">' + icon + '</span>' + title + '</a>');
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
   * This function calculates and returns the position where the Anchor menu
   * should be rendered based on various conditions.
   *
   * @returns {number|*} The calculated height for the Anchor menu position
   */
  function getAnchorMenuTop() {
    // Grabbing toolbar, administration tray, and global header elements
    let $toolbarBar = $('#toolbar-bar');
    let $toolbarItemAdministrationTray = $('#toolbar-item-administration-tray');
    let $globalHeader = $('#global-header');

    // On mobile devices the Anchor Menu must be rendered after the global header.
    if (window.innerWidth < 610) return $globalHeader.height();

    // If the toolbar doesn't exist, return 0
    if (!$toolbarBar.length) return 0;

    // Grabbing navbar element
    let $navbar = $('#uds-anchor-menu');

    // If navbar exists and has specific classes, and administration tray is active and not vertical,
    // return the combined height of the administration tray and toolbar
    if ($navbar.length && $navbar.hasClass('uds-anchor-menu-sticky')
      && $toolbarItemAdministrationTray.hasClass('is-active')
      && !$toolbarItemAdministrationTray.hasClass('toolbar-tray-vertical')) {
      return $toolbarItemAdministrationTray.height() + $toolbarBar.height();
    } else {
      // If none of the above conditions are met, return the height of the toolbar
      return $toolbarBar.height();
    }
  }

  /**
   * This function calculates and returns the position where the global header
   * should be rendered.
   *
   * @returns {number|*} The calculated height for the global header position
   */
  function getGlobalHeaderTop() {
    // Grabbing toolbar and administration tray elements
    let $toolbarBar = $('#toolbar-bar');
    let $toolbarItemAdministrationTray = $('#toolbar-item-administration-tray');

    // If the toolbar doesn't exist, return 0
    if (!$toolbarBar.length) return 0;

    // If administration tray is active and not in a vertical state,
    // return the combined height of the administration tray and toolbar
    if ($toolbarItemAdministrationTray.hasClass('is-active') && !$toolbarItemAdministrationTray.hasClass('toolbar-tray-vertical')) {
      return $toolbarItemAdministrationTray.height() + $toolbarBar.height();
    }

    // If none of the above conditions are met, return the height of the toolbar
    return $toolbarBar.height();
  }
})(jQuery, Drupal, drupalSettings);

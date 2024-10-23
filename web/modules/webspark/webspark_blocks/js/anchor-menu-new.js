(function ($, Drupal, drupalSettings, once) {
  Drupal.behaviors.anchorMenu = {
    attach: function (context, settings) {
      // Find the anchor menu on the page
      const $anchorMenuEl = $('#uds-anchor-menu');
      if (!$anchorMenuEl.length) {
        // Find the links
        const $links = $('.webspark-anchor-link-data');
        if (!$links.length) {
          return;
        }

        // Grab the nav menu
        const anchorMenuNav = $anchorMenuEl.find('nav');
        // Find and manipulate the heading to use for GA tracking
        const heading = $('.uds-anchor-menu-wrapper').find('h2').text().toLowerCase().trim();

        // Create the anchor menu items
        $(once('append-anchor-menu-items', $links, context)).each(function (i, item) {
          const icon = $(item).siblings('.anchor-link-icon').html();
          const title = $(item).data('title');
          const href = $(item).attr('id');
          const data_title = title.toLowerCase();
          const markup = `<a class="nav-link" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="internal link" data-ga-region="main content" data-ga-component="" data-ga-section="${heading}" data-ga-text="${data_title}" href="#${href}"><span>${icon}</span>${title}</a>`;

          anchorMenuNav.append(markup);
        });

        // If the user is an admin, we clear the anchor menu items to not duplicate links
        // if (drupalSettings.is_admin) {
        //   $(once('clear-anchor-menu-items', anchorMenuNav, context)).each(function() {
        //     anchorMenuNav.empty();
        //   });
        // }

        // We use setTimeout to compensate header built by react
        // Initialize the anchor menu
        setTimeout(function () {
          initializeAnchorMenu();
          // Show the anchor menu... why is it hidden to start?
          $anchorMenuEl.show();
        }, 100);

        // Handle the anchor menu when the Drupal toolbar is present
        // This is specific to the Manage item though, should it apply to any of them?
        const $toolbarIconMenu = $('.toolbar-icon-menu');
        $toolbarIconMenu.on('click', () => {
          setTimeout(() => {
            $anchorMenuEl.css('top', `${getAnchorMenuTop()}px`);
          }, 100);
        });

        $(window).on('resize', () => {
          $anchorMenuEl.css('top', `${getAnchorMenuTop()}px`);
        });
      }
    },
  };

  /**
   * This functions has the ability to calculate
   * the position where the Anchor menu must be rendered.
   *
   * NOTE: should this be located in the behaviour?
   *
   * @param $el
   * @returns int The top position where the Anchor menu must be rendered.
   */
  function getAnchorMenuTop($el) {
    const $toolbarBar = $('#toolbar-bar');
    const $toolbarItemAdministrationTray = $('#toolbar-item-administration-tray');
    const $globalHeader = $('#asuHeader');

    // Mobile view
    if ($(window).width() < 610 || !$toolbarBar.length) {
      return $globalHeader.height();
    }

    if (
      $el?.length &&
      $el.hasClass('uds-anchor-menu-sticky') &&
      $toolbarItemAdministrationTray.hasClass('is-active') &&
      !$toolbarItemAdministrationTray.hasClass('toolbar-tray-vertical')
    ) {
      // If the Administration toolbar and the Secondary Administration toolbar are rendered
      // the Anchor menu must be rendered after the Secondary Administration toolbar.
      return $toolbarItemAdministrationTray.height() +
        $toolbarBar.height() +
        $globalHeader.height();
    } else {
      // If the Administration toolbar is rendered and the Secondary Administration toolbar is not rendered
      // or when the Secondary toolbar is a sidebar the Anchor menu must be rendered after the Administration toolbar.
      return $toolbarBar.height();
    }
  }
})(jQuery, Drupal, drupalSettings, once);

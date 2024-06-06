(function ($, Drupal, drupalSettings, once) {
  Drupal.behaviors.webSparkWebDir = {
    attach: function (context, settings) {
      var componentLoaded =
        typeof webdirUI !== "undefined" &&
        typeof webdirUI.initSearchPage !== "undefined";

      if (!componentLoaded) {
        return;
      }

      const elements = once("webSparkWebDir", ".webdir-container", context);

      $loggedIn = drupalSettings.user.uid !== 0;

      elements.forEach((value, index) => {
        props = {
          searchType: value.dataset.searchType,
          API_URL: value.dataset.searchUrl.replace(/\/$/, "") + "/",
          searchApiVersion:
            value.dataset.searchApiVersion.replace(/^\/|\/$/g, "") + "/",
          loggedIn: $loggedIn,
          peopleSearch: value.dataset.peopleSearch,
          ids: value.dataset.asuriteIds,
          deptIds: value.dataset.deptIds,
          filters: {
            employee: value.dataset.filterEmployee,
            expertise: value.dataset.filterExpertise,
            title: value.dataset.filterTitle,
            campuses: value.dataset.filterCampuses,
          },
          display: {
            defaultSort: value.dataset.defaultSort,
            usePager: value.dataset.usePager,
            profilesPerPage: value.dataset.profilesPerPage,
            doNotDisplayProfiles: value.dataset.doNotDisplayProfiles,
          },
          alphaFilter: value.dataset.alphaFilter,
          appPathFolder: value.dataset.appPathFolder,
        };

        webdirUI.initWebDirectory({
          targetSelector: "#" + value.id,
          props: props,
        });
      });
      // Allow off-canvas dialog to load all items.
      setTimeout(function (){
        const offCanvas = document.querySelector('#drupal-off-canvas-wrapper');

        if (offCanvas !== null) {
          $(this).toggleFilters();
        }
      }, 3000);
    },
  };
})(jQuery, Drupal, drupalSettings, once);

jQuery.fn.extend({
  toggleFilters: function() {
    const componentType = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-component-type"]');
    if (componentType?.options[componentType.selectedIndex].value === 'departments') {
      const defaultSort = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-default-sort"]');
      const titleFilterBlock = document.querySelector('.form-item-settings-block-form-field-filter-title-0-value');
      const campusFilterBlock = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-campus-0"]');
      const expertiseFilterBlock = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-expertise-0"]');
      const employeeTypeFilterBlock = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-employee-0"]');
      const peopleListBlock = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-people-list-0"]');
      const displaySettingsBlock = document.querySelector('[data-drupal-selector="edit-settings-block-form-group-display-settings"]');
      const alphaFilterBlock = document.querySelector('.form-item-settings-block-form-field-webdir-disable-alpha-value');
      let initTitleFilterValue = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-title-0-value"]').value;
      let initCampusFilterChecked = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-campus-0"]').querySelectorAll('ul.jstree-container-ul li a.jstree-clicked');
      let initExpertiseFilterChecked = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-expertise-0"]').querySelectorAll('ul.jstree-container-ul li a.jstree-clicked');
      let initEmployeeTypeFilterChecked = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-employee-0"]').querySelectorAll('ul.jstree-container-ul li a.jstree-clicked');
      let initAlphaFilterCheckboxState = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-webdir-disable-alpha-value"]').checked;
      // Initially hide filters if default sort is 'webdir_customized'.
      if (defaultSort?.options[defaultSort.selectedIndex].value === 'webdir_customized') {
        // If webdir_customized is initially selected,
        // initAlphaFilterCheckboxState should be false by default.
        initAlphaFilterCheckboxState = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-webdir-disable-alpha-value"]').checked = false;
        hide();
      }

      // Update initTitleFilterValue if changed.
      document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-title-0-value"]')?.addEventListener('change', function () {
        initTitleFilterValue = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-title-0-value"]').value
      });
      // Update initCampusFilterChecked if clicked.
      document.querySelector('#campus-tree-options')?.addEventListener('click', function () {
        initCampusFilterChecked = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-campus-0"]').querySelectorAll('ul.jstree-container-ul li a.jstree-clicked');
      });
      // Update initExpertiseFilterChecked if clicked.
      document.querySelector('#expertise-tree-options')?.addEventListener('click', function () {
        initExpertiseFilterChecked = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-expertise-0"] ul').querySelectorAll('ul.jstree-container-ul li a.jstree-clicked');
      });
      // Update initEmployeeTypeFilterChecked if clicked.
      document.querySelector('#employee-type-tree-options')?.addEventListener('click', function () {
        initEmployeeTypeFilterChecked = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-employee-0"]  ul').querySelectorAll('ul.jstree-container-ul li a.jstree-clicked');
      });

      // Update initAlphaFilterState if changed.
      document.querySelector('[data-drupal-selector="edit-settings-block-form-field-webdir-disable-alpha-value"]')?.addEventListener( 'change', function () {
        initAlphaFilterCheckboxState = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-webdir-disable-alpha-value"]').checked
      })
      // Hide/Show filters if input changes.
      document.querySelector('[data-drupal-selector="edit-settings-block-form-field-default-sort"]').addEventListener('input', function () {
        if (defaultSort?.options[defaultSort.selectedIndex].value === 'webdir_customized') {
          hide();
        } else {
          show(initTitleFilterValue, initCampusFilterChecked, initExpertiseFilterChecked, initEmployeeTypeFilterChecked, initAlphaFilterCheckboxState);
        }
      });

      function hide() {
        let titleFilterValue = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-title-0-value"]');
        // Blank out title filter value.
        titleFilterValue.value = '';
        // Hide title filter.
        titleFilterBlock.style.display = 'none';

        // Blank out campus filter checked.
        campusFilterBlock.querySelectorAll('ul.jstree-container-ul li a.jstree-clicked').forEach(element => {
          element.classList.remove('jstree-clicked');
          element.setAttribute('aria-selected', 'false');
        });
        // Hide campus filter.
        campusFilterBlock.style.display = 'none';

        // Blank out expertise filter checked.
        expertiseFilterBlock.querySelectorAll('ul.jstree-container-ul li a.jstree-clicked').forEach(element => {
          element.classList.remove('jstree-clicked');
          element.setAttribute('aria-selected', 'false');
        });
        // Hide expertise filter.
        expertiseFilterBlock.style.display = 'none';

        // Blank out employee type filter checked.
        employeeTypeFilterBlock.querySelectorAll('ul.jstree-container-ul li a.jstree-clicked').forEach(element => {
          element.classList.remove('jstree-clicked');
          element.setAttribute('aria-selected', 'false');
        });
        // Hide employee type filter.
        employeeTypeFilterBlock.style.display = 'none';

        // Hide people list.
        peopleListBlock.style.display = 'none';

        // Add disclaimer about filters not being applied for webdir_customized.
        const disclaimer = document.createElement('div');
        const classesToAdd = ['alert', 'alert-danger'];
        disclaimer.id = 'filter-disclaimer';
        disclaimer.classList.add(...classesToAdd);
        disclaimer.innerHTML = '<small><strong class="text-danger">Please note: </strong>Filter settings do not apply to the Web Directory customized sort option.</small>';
        if (document.getElementById('filter-disclaimer') === null) {
          displaySettingsBlock.parentNode.insertBefore(disclaimer, displaySettingsBlock);
        }

        // Disable alpha filter.
        document.querySelector('[data-drupal-selector="edit-settings-block-form-field-webdir-disable-alpha-value"]').checked = true;
        // Hide alpha filter.
        alphaFilterBlock.style.display = 'none';
      }

      function show(initTitleFilterValue, initCampusFilterChecked, initExpertiseFilterChecked, initEmployeeTypeFilterChecked, initAlphaFilterState) {
        // Set title filter value.
        document.querySelector('[data-drupal-selector="edit-settings-block-form-field-filter-title-0-value"]').value = initTitleFilterValue;
        // Show title filter.
        titleFilterBlock.style.display = '';

        // Set campus filter checked.
        initCampusFilterChecked?.forEach(element => {
          element.classList.add('jstree-clicked');
          element.setAttribute('aria-selected', 'true');
        });
        // Show campus filter.
        campusFilterBlock.style.display = '';

        // Set expertise filter checked.
        initExpertiseFilterChecked?.forEach(element => {
          element.classList.add('jstree-clicked');
          element.setAttribute('aria-selected', 'true');
        });
        // Show expertise filter.
        expertiseFilterBlock.style.display = '';

        // Set employee type filter checked.
        initEmployeeTypeFilterChecked?.forEach(element => {
          element.classList.add('jstree-clicked');
          element.setAttribute('aria-selected', 'true');
        });
        // Show employee type filter.
        employeeTypeFilterBlock.style.display = '';

        // Show people list.
        peopleListBlock.style.display = '';

        // Remove disclaimer.
        document.getElementById('filter-disclaimer')?.remove();

        // Set alpha filter checkbox.
        document.querySelector('[data-drupal-selector="edit-settings-block-form-field-webdir-disable-alpha-value"]').checked = initAlphaFilterState;
        // Show alpha filter.
        alphaFilterBlock.style.display = '';
      }
    }
  }
});

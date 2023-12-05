(function ($, Drupal, drupalSettings, once) {
  Drupal.behaviors.cardArrangementAlert = {
    attach: function (context, settings) {
      //Init variables
      const selectCountColumn =  document.querySelector('[name="settings[block_form][field_card_arrangement_display]"]');
      const displayOrientation = document.querySelector('[name="settings[block_form][field_display_orientation]"]');
      const displayDiv = document.querySelector('[data-drupal-selector="edit-settings-block-form-field-display-orientation-wrapper"]');


      //Get the element in order to identify Ranking cards
      const element = document.querySelector('[name*="[field_card_ranking_image_size]"]');
      if (element) {
        _showDisplayOrientation('none');
      } else {
        _showDisplayOrientation();
      }


      _removedColumnsOptions();
      displayOrientation.addEventListener('change', _removedColumnsOptions);

      //Remove opctions in Columns to Display select
      function _removedColumnsOptions() {
        if (displayOrientation && displayOrientation.value === 'horizontal') {
          settings.columns_values.forEach(option => {
            const key = Object.keys(option)[0];
            for (let i = selectCountColumn.options.length - 1; i >= 0; i--) {
              if (selectCountColumn.options[i].value === key) {
                selectCountColumn.remove(i);
              }
            }
          });
        } else {
          settings.columns_values.forEach(option => {
            const key = Object.keys(option)[0];
            const value = option[key];
            if (!Array.from(selectCountColumn.options).some(option => option.value === key)) {
              const newOption = document.createElement('option');
              newOption.value = key;
              newOption.text = value;
              selectCountColumn.add(newOption);
            }
          })
        }
        selectCountColumn.value = "''";
      }

      //Show or not Display orientation select
      function _showDisplayOrientation(value = '') {
        if (displayDiv) {
          displayDiv.style.display = value
        }
        if (value !== '') {
          displayOrientation.value = 'vertical';
        }
      }
    }
  }
})(jQuery, Drupal, drupalSettings, once);
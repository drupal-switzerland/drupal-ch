Drupal.behaviors.themekitCasesListing = {
  attach(context) {
    const FILTER_ACTIVE_CLASS = 'active-filter';
    const { body } = document;
    const view = context.classList && context.classList.contains('view-cases-listing')
      ? context
      : context.querySelector('.view-cases-listing');
    if (!view) return;

    const toggleFiltersButton = view.querySelector('.toggle-filters');
    if (!toggleFiltersButton) return;

    const form = view.querySelector('.views-exposed-form');
    if (!form) return;

    const filtersArray = form.querySelectorAll('.form-checkbox');
    if (!filtersArray.length) return;

    toggleFiltersButton.addEventListener('click', () => {
      body.classList.toggle(FILTER_ACTIVE_CLASS);
    });

    const handleFilters = () => {
      const activeFilters = [...filtersArray].filter((input) => input.checked);
      if (activeFilters.length > 0) {
        body.classList.add(FILTER_ACTIVE_CLASS);
      }
    };

    handleFilters();
    form.addEventListener('submit', handleFilters);
  },
};

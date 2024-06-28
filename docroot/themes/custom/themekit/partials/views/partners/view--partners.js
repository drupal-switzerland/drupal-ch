Drupal.behaviors.themekitPartners = {
  attach(context) {
    const view = (context.classList && context.classList.contains('view-display-id-randomized')) ? context : context.querySelector('.view-display-id-randomized');
    if (!view) return;
    const itemsToShow = 7;
    const randomIndex = [];
    const wrapper = view.querySelector('.view-content');
    const items = view.querySelectorAll('.views-row');
    if (!items) return;
    const itemsRange = items.length;
    if (itemsRange > itemsToShow) {
      while (randomIndex.length !== itemsToShow) {
        const randomNumber = Math.floor(Math.random() * itemsRange);
        if (!randomIndex.includes(randomNumber)) {
          randomIndex.push(randomNumber);
        }
      }
      items.forEach((item, index) => {
        if (!randomIndex.includes(index)) {
          item.remove();
        }
      });
    }
    wrapper.classList.add('processed');
  },
};

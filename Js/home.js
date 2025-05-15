const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.opacity = 1;
  });

  item.addEventListener('mouseout', () => {
    item.style.opacity = 0.8;
  });
});

window.onload = function() {
  // Get the performance navigation entries for the current document
  var navigationEntries = window.performance.getEntriesByType('navigation');

  // Check if the first entry type is 'reload'
  if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
      // Redirect to the desired page only when the page is reloaded
      window.location.href = 'splash.html';
  }
};

document.querySelector('.svg').addEventListener('keydown', function(event) {
    const nodes = document.querySelectorAll('.svg [tabindex="0"]');
    let currentIndex = Array.from(nodes).findIndex(node => node === document.activeElement);

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        currentIndex = currentIndex === nodes.length - 1 ? 0 : currentIndex + 1;
        nodes[currentIndex].focus();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        currentIndex = currentIndex <= 0 ? nodes.length - 1 : currentIndex - 1;
        nodes[currentIndex].focus();
    } else if (event.key === 'Enter') {
        let activeElement = document.activeElement;
        let href = activeElement.getAttribute('href');
        if (href) {
            window.location.href = href;
        }
    }
});

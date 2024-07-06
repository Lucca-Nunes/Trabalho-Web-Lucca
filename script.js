document.addEventListener('DOMContentLoaded', (event) => {
    const ratingElements = document.querySelectorAll('.rating span');

    ratingElements.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            const siblings = star.parentNode.children;


            for (let sibling of siblings) {
                sibling.classList.remove('selected');
            }


            star.classList.add('selected');
            let previousSibling = star.previousElementSibling;

            while (previousSibling) {
                previousSibling.classList.add('selected');
                previousSibling = previousSibling.previousElementSibling;
            }
        });
    });
});
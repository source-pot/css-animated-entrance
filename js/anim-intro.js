
const finishPreview = event => {
    document.body.classList.replace('page--preview-active', 'page');
    event.preventDefault();
    event.stopPropagation();
};

(() => {
    document
        .querySelector('.welcome-message__enter-button')
        .addEventListener('click', finishPreview);
})();

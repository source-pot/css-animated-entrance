
const qs = selector => document.querySelector(selector);

const finishPreview = event => {
    document.body.classList.replace('page--preview-active', 'page');
    event.preventDefault();
    event.stopPropagation();
};

(() => {
    qs('.welcome-message__enter-button').addEventListener('click', finishPreview);
})();

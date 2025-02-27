import dom from './dom.js';

const events = (() => {
    const body = document.querySelector('body');

    body.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {

        }
        else if (e.target.classList.contains('delete')) {

        }
        else if (e.target.classList.contains('empty-card') || e.target.classList.contains('empty-card-icon')) {
            dom.loadTasksForm('add');
        }
        else if (e.target.classList.contains('indicator') || e.target.classList.contains('form-checkbox')) {

        }
        else if (e.target.classList.contains('form-button')) {
            e.preventDefault();
            dom.submitForm();
        }
    });
})();

export default events;
import dom from './dom.js';
import tasks from './tasks.js';

const events = (() => {
    const body = document.querySelector('body');

    body.addEventListener('click', (e) => {
        if (e.target.classList.contains('empty-card') || e.target.classList.contains('empty-card-icon')) {
            dom.loadTasksForm('add');
        }
        else if (e.target.classList.contains('edit')) {
            const card = e.target.parentNode.parentNode;
            dom.loadTasksForm('edit', card.getAttribute('data-tag-id'), card.getAttribute('data-task-id'));
        }
        else if (e.target.classList.contains('delete')) {

        }
        else if (e.target.classList.contains('tags-button')) {
            dom.loadTagsForm('add');
        }
        else if (e.target.classList.contains('edit-tag')) {
            const tag = e.target.parentNode;
            dom.loadTagsForm('edit', tag.getAttribute('data-tag-id'));
        }
        else if (e.target.classList.contains('delete-tag')) {

        }
        else if (e.target.classList.contains('tag-icon') || e.target.classList.contains('tag-title')) {
            const tagIndex = e.target.parentNode.getAttribute('data-tag-id');
            tasks.filterTasks(tagIndex);
        }
        else if (e.target.classList.contains('tags-form-button')) {
            e.preventDefault();

            dom.submitTagsForm()
        }
        else if (e.target.classList.contains('indicator') || e.target.classList.contains('form-checkbox')) {

        }
        else if (e.target.classList.contains('form-close')) {
            dom.closeForm();
        }
        else if (e.target.classList.contains('form-button')) {
            e.preventDefault();
            console.log('lol');
            dom.submitTasksForm();
        }
    });
})();

export default events;
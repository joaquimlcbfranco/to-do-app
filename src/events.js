import dom from './dom.js';
import tags from './tags.js';
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
            const card = e.target.parentNode.parentNode;
            tasks.deleteTask(card.getAttribute('data-tag-id'), card.getAttribute('data-task-id'));
            dom.displayTasks();
        }
        else if (e.target.classList.contains('tags-button')) {
            dom.loadTagsForm('add');
        }
        else if (e.target.classList.contains('edit-tag')) {
            const tag = e.target.parentNode;
            dom.loadTagsForm('edit', tag.getAttribute('data-tag-id'));
        }
        else if (e.target.classList.contains('delete-tag')) {
            const tag = e.target.parentNode;
            console.log(tag);
            tags.deleteTag(+tag.getAttribute('data-tag-id'));
            dom.displayTags();
            dom.displayTasks();
        }
        else if (e.target.classList.contains('tag-title')) {
            const tagIndex = e.target.parentNode.getAttribute('data-tag-id');
            tasks.filterTasks(tagIndex);
            dom.highlightElement(e.target.parentNode);
        }
        else if (e.target.classList.contains('home')) {
            const tagIndex = e.target.parentNode.getAttribute('data-tag-id');
            tasks.filterTasks('home');
            dom.highlightNav(e.target.parentNode);
        }
        else if (e.target.classList.contains('today')) {
            const tagIndex = e.target.parentNode.getAttribute('data-tag-id');
            tasks.filterTasks('other', 'today');
            dom.highlightNav(e.target.parentNode);
        }
        else if (e.target.classList.contains('week')) {
            const navIndex = e.target.parentNode.getAttribute('data-tag-id');
            tasks.filterTasks('other', 'week');
            dom.highlightNav(e.target.parentNode);
        }
        else if (e.target.classList.contains('month')) {
            const tagIndex = e.target.parentNode.getAttribute('data-tag-id');
            tasks.filterTasks('other', 'month');
            dom.highlightNav(e.target.parentNode);
        }
        else if (e.target.classList.contains('tags-form-button')) {
            e.preventDefault();
            dom.resetHighlights();
            dom.submitTagsForm();
        }
        else if (e.target.classList.contains('indicator') || e.target.classList.contains('checkbox-span')) {
            const tagIndex = e.target.parentNode.parentNode.parentNode.getAttribute('data-tag-id');
            const taskIndex = e.target.parentNode.parentNode.parentNode.getAttribute('data-task-id');
            tasks.markDone(e.target.parentNode.parentNode.parentNode, tagIndex, taskIndex);
        }
        else if (e.target.classList.contains('form-close')) {
            dom.closeForm();
        }
        else if (e.target.classList.contains('form-button')) {
            e.preventDefault();
            dom.resetHighlights();
            dom.submitTasksForm();
        }
    });
})();

export default events;
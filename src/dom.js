import tasks from './tasks.js'
import tags from './tags.js'
import { formatDistance } from 'date-fns'

const dom = (() => {
    const body = document.querySelector('body');

    const userDetails = document.querySelector('user-details');

    const navRows = document.querySelector('nav-buttons > nav-row');

    const tagsContainer = document.querySelector('.tags');

    const headerDetails = document.querySelector('.header-details');
    const cardsContainer = document.querySelector('.cards');

    const displayTags = () => {
        if (tagsContainer.querySelectorAll('.tag-row').length) {
            const tagRows = tagsContainer.querySelectorAll('.tag-row');
            tagRows.forEach((row) => {
                tagsContainer.removeChild(row);
            });
        }

        const tagButton = tagsContainer.querySelector('button');
        tagsContainer.removeChild(tagButton);

        for (let tagIndex = 0; tagIndex < tags.tagList.length; tagIndex++) {
            const tagRow = document.createElement('div');
            const tagSpan = document.createElement('span');
            const tagTitle = document.createElement('p');
            const editButton = document.createElement('span');
            const deleteButton = document.createElement('span');
    
            tagRow.classList.add('tag-row');
            tagRow.setAttribute('data-tag-id', tagIndex);
            tagSpan.classList.add('material-symbols-outlined', 'tag-icon');
            tagSpan.textContent = 'tag';
            tagTitle.textContent = tags.tagList[tagIndex].title;
            tagTitle.id = tags.tagList[tagIndex].title.toLowerCase();
            tagTitle.classList.add('tag-title');
            editButton.classList.add('edit-tag', 'material-symbols-outlined');
            editButton.textContent = 'edit';
            deleteButton.classList.add('delete-tag', 'material-symbols-outlined');
            deleteButton.textContent = 'delete';
    
            tagsContainer.appendChild(tagRow);
            tagRow.appendChild(tagSpan);
            tagRow.appendChild(tagTitle);
            if (tagTitle.id != 'general') {
                tagSpan.style.color = `${tags.tagList[tagIndex].color}`;
                tagRow.appendChild(editButton);
                tagRow.appendChild(deleteButton);
            }
        }
        
        const button = document.createElement('button');
        
        button.type = 'button';
        button.textContent = '+';
        button.classList.add('tags-button');

        tagsContainer.appendChild(button);
    }

    const displayTasks = (list = tags.tagList) => {
        while (cardsContainer.firstChild) {
            cardsContainer.removeChild(cardsContainer.firstChild);
        }

        for (let tagIndex = 0; tagIndex < list.length; tagIndex++) {
            for (let taskIndex = 0; taskIndex < list[tagIndex].tasks.length; taskIndex++) {
                const task = list[tagIndex].tasks[taskIndex];
                
                const card = document.createElement('div');
                card.style.borderLeft = `10px solid ${list[tagIndex].color}`

                const cardTitle = document.createElement('h4');

                const cardDate = document.createElement('p');

                const cardButtons = document.createElement('div');
                const checkboxLabel = document.createElement('label');
                const checkboxInput = document.createElement('input');
                const checkboxSpan = document.createElement('span');
                const checkboxIndicator = document.createElement('i');
                const editButton = document.createElement('span');
                const deleteButton = document.createElement('span');

                card.classList.add('card');
                card.setAttribute('data-task-id', taskIndex);
                card.setAttribute('data-tag-id', tagIndex);

                cardTitle.classList.add('card-title');
                cardTitle.textContent = task.title;

                cardDate.classList.add('card-tags');
                cardDate.textContent = task.dueDate == '' ? '' : formatDistance(task.dueDate, new Date(), { addSuffix: true });
                if (task.dueDate != '' && new Date(task.dueDate) < new Date()) cardDate.style.color = 'rgb(235, 109, 123)';

                cardButtons.classList.add('card-buttons');
                checkboxLabel.classList.add('checkbox');
                checkboxInput.id = 'form-checkbox';
                checkboxInput.type = 'checkbox';
                checkboxSpan.classList.add('checkbox-span');
                checkboxIndicator.classList.add('indicator');
                editButton.classList.add('material-symbols-outlined');
                editButton.classList.add('edit');
                editButton.textContent = 'edit';
                deleteButton.classList.add('material-symbols-outlined');
                deleteButton.classList.add('delete');
                deleteButton.textContent = 'delete';

                cardsContainer.appendChild(card);

                card.appendChild(cardTitle);
                card.appendChild(cardDate);

                card.appendChild(cardButtons);
                cardButtons.appendChild(checkboxLabel);
                checkboxLabel.appendChild(checkboxInput);
                checkboxLabel.appendChild(checkboxSpan);
                checkboxLabel.appendChild(checkboxIndicator);
                cardButtons.appendChild(editButton);
                cardButtons.appendChild(deleteButton);
            }
        }

        const emptyCard = document.createElement('div');
        const newCard = document.createElement('span');

        emptyCard.classList.add('empty-card');
        newCard.classList.add('material-icons');
        newCard.classList.add('empty-card-icon');
        newCard.innerHTML = '&#xe145;';

        cardsContainer.appendChild(emptyCard);
        emptyCard.appendChild(newCard);
    }

    const loadTagsForm = (formType, tagIndex = '') => {
        const dialog = document.createElement('dialog');
        const wrapper = document.createElement('div');
        const form = document.createElement('form');

        const closeButton = document.createElement('button');

        const titleLabel = document.createElement('label');
        const titleSpan1 = document.createElement('span');
        const titleText = document.createElement('p');
        const titleSpan2 = document.createElement('span');
        const formTitle = document.createElement('input');

        const colorLabel = document.createElement('label');
        const colorSpan1 = document.createElement('span');
        const colorText = document.createElement('p');
        const colorSpan2 = document.createElement('span')
        const formColor = document.createElement('input');

        const submitButton = document.createElement('button');

        wrapper.classList.add('wrapper');

        form.classList.add('dialog-form');
        form.setAttribute('data-tag-id', tagIndex);

        closeButton.classList.add('form-close');
        closeButton.setAttribute('type', 'button');

        titleText.textContent = 'Title';
        formTitle.id = 'form-title';
        formTitle.type = 'text'
        formTitle.required = true;
        formTitle.placeholder = 'required';


        colorText.textContent = 'Color';
        formColor.id = 'form-color';
        formColor.type = 'color';

        submitButton.textContent = 'Submit';
        submitButton.classList.add('tags-form-button');
        submitButton.setAttribute('type', 'submit');

        body.appendChild(dialog);
        dialog.appendChild(wrapper);
        wrapper.appendChild(form);

        form.appendChild(closeButton);

        form.appendChild(titleLabel);
        titleLabel.appendChild(titleSpan1);
        titleLabel.appendChild(titleText);
        titleLabel.appendChild(titleSpan2);
        form.appendChild(formTitle);

        form.appendChild(colorLabel);
        colorLabel.appendChild(colorSpan1);
        colorLabel.appendChild(colorText);
        colorLabel.appendChild(colorSpan2);
        form.appendChild(formColor);

        form.appendChild(submitButton);

        dialog.showModal();

        if (formType === 'add') {
            const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            formColor.value = hex;
        }

        else if (formType === 'edit') {
            formTitle.value = tags.tagList[tagIndex].title;
            formColor.value = tags.tagList[tagIndex].color
        }
    }

    const loadTasksForm = (formType, tagIndex = 0, taskIndex = '') => {
        const dialog = document.createElement('dialog');
        const wrapper = document.createElement('div');
        const form = document.createElement('form');

        const closeButton = document.createElement('button');

        const titleLabel = document.createElement('label');
        const titleSpan1 = document.createElement('span');
        const titleText = document.createElement('p');
        const titleSpan2 = document.createElement('span');
        const formTitle = document.createElement('input');

        const notesLabel = document.createElement('label');
        const notesSpan1 = document.createElement('span');
        const notesText = document.createElement('p');
        const notesSpan2 = document.createElement('span');
        const formNotes = document.createElement('textarea');

        const dateLabel = document.createElement('label');
        const dateSpan1 = document.createElement('span');
        const dateText = document.createElement('p');
        const dateSpan2 = document.createElement('span');
        const formDate = document.createElement('input');

        const tagLabel = document.createElement('label');
        const tagSpan1 = document.createElement('span');
        const tagText = document.createElement('p'); 
        const tagSpan2 = document.createElement('span');
        const formTag = document.createElement('select');

        const submitButton = document.createElement('button');

        wrapper.classList.add('wrapper');

        form.classList.add('dialog-form');
        form.setAttribute('data-tag-id', tagIndex);
        form.setAttribute('data-task-id', taskIndex);

        closeButton.classList.add('form-close');
        closeButton.setAttribute('type', 'button');

        titleText.textContent = 'Title';
        formTitle.id = 'form-title';
        formTitle.type = 'text'
        formTitle.required = true;
        formTitle.placeholder = 'required';

        notesText.textContent = 'Notes';
        formNotes.id = 'form-notes';

        dateText.textContent = 'Date';
        formDate.id = 'form-date';
        formDate.type = 'datetime-local';

        tagText.textContent = 'Tag';
        formTag.id = 'form-tag';

        submitButton.textContent = 'Submit';
        submitButton.classList.add('form-button');
        submitButton.setAttribute('type', 'submit');

        body.appendChild(dialog);
        dialog.appendChild(wrapper);
        wrapper.appendChild(form);

        form.appendChild(closeButton);

        form.appendChild(titleLabel);
        titleLabel.appendChild(titleSpan1);
        titleLabel.appendChild(titleText);
        titleLabel.appendChild(titleSpan2);
        form.appendChild(formTitle);


        form.appendChild(notesLabel);
        notesLabel.appendChild(notesSpan1);
        notesLabel.appendChild(notesText);
        notesLabel.appendChild(notesSpan2);
        form.appendChild(formNotes);

        form.appendChild(dateLabel);
        dateLabel.appendChild(dateSpan1);
        dateLabel.appendChild(dateText);
        dateLabel.appendChild(dateSpan2);
        form.appendChild(formDate);


        form.appendChild(tagLabel);
        tagLabel.appendChild(tagSpan1);
        tagLabel.appendChild(tagSpan2);
        form.appendChild(formTag);
        for (let i = 0; i < tags.tagList.length; i++) {
            const formOption = document.createElement('option');
            formOption.value = tags.tagList[i].title.toLowerCase();
            formOption.textContent = tags.tagList[i].title;
            formOption.setAttribute('data-tag-id', i);
            formTag.appendChild(formOption);
        }

        form.appendChild(submitButton);

        dialog.showModal();

        if (formType === 'edit') {
            formTitle.value = tags.tagList[tagIndex].tasks[taskIndex].title;
            formNotes.value = tags.tagList[tagIndex].tasks[taskIndex].notes;
            formDate.value = tags.tagList[tagIndex].tasks[taskIndex].dueDate;
            formTag.disabled = true;
        }
    }

    const closeForm = () => {
        const dialog = document.querySelector('dialog[open]');
        dialog.close();
    }

    const submitTagsForm = () => {
        const form = document.querySelector('dialog[open] > .wrapper > .dialog-form');
        const tagIndex = form.getAttribute('data-tag-id');

        const title = form.querySelector('#form-title');
        if (title.value == '') {
            title.style.color = 'rgb(255, 101, 119)';
            title.style.border = '1px solid rgb(255, 101, 119)';
            return;
        }
        else {
            title.style.color = 'rgba(0, 0, 0, 1)';
            title.style.border = 'none';
        }

        const color = form.querySelector('#form-color');

        if (tagIndex === '') {
            tags.addTag(title.value, color.value);
            closeForm();
        }
        else {
            tags.editTag(tagIndex, title.value, color.value);
            closeForm();
        }

        displayTags();
        displayTasks();
    }

    const submitTasksForm = () => {
        const form = document.querySelector('dialog[open] > .wrapper > .dialog-form');
        const tagIndex = form.getAttribute('data-tag-id');
        const taskIndex = form.getAttribute('data-task-id');

        const title = form.querySelector('#form-title');
        if (title.value == '') {
            title.style.color = 'rgb(255, 101, 119)';
            title.style.border = '1px solid rgb(255, 101, 119)';
            return;
        }
        else {
            title.style.color = 'rgba(0, 0, 0, 1)';
            title.style.border = 'none';
        }

        const select = form.querySelector('select');

        const notes = form.querySelector('form > #form-notes');
        notes.style.color = 'rgb(0, 0 ,0)';

        const dueDate = form.querySelector('form > #form-date');

        if (taskIndex == '') {
            const newTagIndex = select.selectedOptions[0].getAttribute('data-tag-id'); 
            tasks.addTask(+newTagIndex, title.value, notes.value, dueDate.value, false);
            closeForm();
        }
        else if (taskIndex != '') {
            tasks.editTask(+tagIndex, taskIndex, title.value, notes.value, dueDate.value);
            closeForm();
        }

        displayTasks();
    }

    const highlightElement = (element) => {
        const tagRows = document.querySelectorAll('.tag-row');
        const navRows = document.querySelectorAll('.nav-row');
        navRows.forEach((navRow) => {
            navRow.style.opacity = 1;
        })
        tagRows.forEach((tagRow) => {
            if (tagRow != element) {
                tagRow.style.opacity = 0.5;
                tagRow.removeAttribute('data-tag-selected');
            }
            else {
                tagRow.style.opacity = 1;
                tagRow.setAttribute('data-tag-selected', '');
            }
        });
    }

    const highlightNav = (element) => {
        const tagRows = document.querySelectorAll('.tag-row');
        const navRows = document.querySelectorAll('.nav-row');
        tagRows.forEach((tagRow) => {
            tagRow.style.opacity = 1;
        })
        navRows.forEach((navRow) => {
            if (navRow != element) {
                navRow.style.opacity = 0.5;
                navRow.removeAttribute('data-tag-selected');
            }
            else {
                navRow.style.opacity = 1;
                navRow.setAttribute('data-tag-selected', '');
            }
        });
    }

    const resetHighlights = () => {
        const tagRows = document.querySelectorAll('.tag-row');
        const navRows = document.querySelectorAll('.nav-row');
        tagRows.forEach((tagRow) => {
            tagRow.removeAttribute('data-tag-selected');
            tagRow.style.opacity = 1;
        })
        navRows.forEach((navRow) => {
            navRow.removeAttribute('data-tag-selected');
            navRow.style.opacity = 1;
        })
        
    }

    return {
        displayTasks,
        displayTags,
        loadTasksForm,
        loadTagsForm,
        submitTasksForm,
        submitTagsForm,
        closeForm,
        highlightElement,
        highlightNav,
        resetHighlights,
    }
})();

export default dom
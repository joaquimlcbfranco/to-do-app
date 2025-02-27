import tags from './tags.js'
import tasks from './tasks.js'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const dom = (() => {
    const body = document.querySelector('body');

    const userDetails = document.querySelector('user-details');

    const navRows = document.querySelector('nav-buttons > nav-row');

    const tagsContainer = document.querySelector('.tags');

    const headerDetails = document.querySelector('.header-details');
    const cardsContainer = document.querySelector('.cards');
    const emptyCard = document.querySelector('.empty-card');

    const displayTags = () => {
        const tagRows = tagsContainer.querySelectorAll('.tag-row');
        tagRows.forEach((row) => {
            tagsContainer.removeChild(row);
        });

        const tagButton = tagsContainer.querySelector('button');
        tagsContainer.removeChild(tagButton);

        
        const tagRow = document.createElement('div');
        const tagSpan = document.createElement('span');
        const tagTitle = document.createElement('p');
        const editButton = document.createElement('span');
        const deleteButton = document.createElement('span');

        tagRow.classList.add('tag-row');
        tagSpan.classList.add('material-symbols-outlined');
        tagSpan.textContent = 'tag';
        tagTitle.textContent = 'General';
        tagTitle.id = 'general';
        editButton.classList.add('edit-tag', 'material-symbols-outlined');
        editButton.textContent = 'edit';
        deleteButton.classList.add('delete-tag', 'material-symbols-outlined');
        deleteButton.textContent = 'delete';

        tagsContainer.appendChild(tagRow);
        tagRow.appendChild(tagSpan);
        tagRow.appendChild(tagTitle);
        if (tagTitle.id != 'general') {
            tagRow.appendChild(editButton);
            tagRow.appendChild(deleteButton);
        }



        const button = document.createElement('button');
        
        button.type = 'button';
        button.textContent = '+';
        button.classList.add('tags-button');

        tagsContainer.appendChild(button);
    }

    const displayTasks = () => {
        while (cardsContainer.firstChild) {
            cardsContainer.removeChild(cardsContainer.firstChild);
        }

        for (let tagIndex = 0; tagIndex < tags.tagList.length; tagIndex++) {
            for (let taskIndex = 0; taskIndex < tags.tagList[tagIndex].tasks.length; taskIndex++) {
                const task = tags.tagList[tagIndex].tasks[taskIndex];
                
                const card = document.createElement('div');

                const cardTitle = document.createElement('h4');
                const cardDescription = document.createElement('p');

                const cardTags = document.createElement('div');
                const cardPriority = document.createElement('p');
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

                cardDescription.classList.add('card-description');
                cardDescription.textContent = task.description;

                cardTags.classList.add('card-tags');
                cardPriority.textContent = task.priority;
                if (task.priority === 'low') {
                    cardPriority.style.backgroundColor = 'rgb(195, 240, 214)';
                }
                else if (task.priority === 'medium') {
                    cardPriority.style.backgroundColor = 'rgb(241, 254, 202)';
                }
                else if (task.priority === 'high') {
                    cardPriority.style.backgroundColor = 'rgb(255, 208, 168)';
                }
                else if (task.priority === 'critical') {
                    cardPriority.style.backgroundColor = 'rgb(255, 101, 119)';
                }

                cardDate.textContent = formatDistance(task.dueDate, new Date(), { addSuffix: true });

                cardButtons.classList.add('card-buttons');
                checkboxLabel.classList.add('checkbox');
                checkboxInput.id = 'form-checkbox';
                checkboxInput.type = 'checkbox';
                checkboxIndicator.classList.add('indicator');
                editButton.classList.add('material-symbols-outlined');
                editButton.classList.add('edit');
                editButton.textContent = 'edit';
                deleteButton.classList.add('material-symbols-outlined');
                deleteButton.classList.add('delete');
                deleteButton.textContent = 'delete';

                cardsContainer.appendChild(card);

                card.appendChild(cardTitle);
                card.appendChild(cardDescription);

                card.appendChild(cardTags);
                cardTags.appendChild(cardPriority);
                cardTags.appendChild(cardDate);

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

    const loadTagsForm = (formType, tagIndex = 0, taskIndex = '') => {
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
        form.setAttribute('data-task-id', taskIndex);

        closeButton.classList.add('form-close');
        closeButton.setAttribute('type', 'button');

        titleText.textContent = 'Title';
        formTitle.id = 'form-title';
        formTitle.type = 'text'

        colorText.textContent = 'Color';
        formColor.id = 'form-color';
        formColor.type = 'color';

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

        form.appendChild(colorLabel);
        colorLabel.appendChild(colorSpan1);
        colorLabel.appendChild(colorText);
        colorLabel.appendChild(colorSpan2);
        form.appendChild(formColor);

        form.appendChild(submitButton);

        dialog.showModal();

        if (formType === 'add') {
            const red = Math.random() * (255 - 0);
            const green = Math.random() * (255 - 0);
            const blue = Math.random() * (255 - 0);
            formColor.value = `rgb(${red}, ${green}, ${blue})`;
        }

        else if (formType === 'edit') {
            formTitle.value = projects.tagList[tagIndex].title;
            formColor.value = projects.tagList[tagIndex].color
        }
    }

    const loadTasksForm = (formType, tagIndex = '', taskIndex = '') => {
        const dialog = document.createElement('dialog');
        const wrapper = document.createElement('div');
        const form = document.createElement('form');

        const closeButton = document.createElement('button');

        const titleLabel = document.createElement('label');
        const titleSpan1 = document.createElement('span');
        const titleText = document.createElement('p');
        const titleSpan2 = document.createElement('span');
        const formTitle = document.createElement('input');

        const descriptionLabel = document.createElement('label');
        const descriptionSpan1 = document.createElement('span');
        const descriptionText = document.createElement('p');
        const descriptionSpan2 = document.createElement('span');
        const formDescription = document.createElement('input');

        const notesLabel = document.createElement('label');
        const notesSpan1 = document.createElement('span');
        const notesText = document.createElement('p');
        const notesSpan2 = document.createElement('span');
        const formNotes = document.createElement('textarea');

        const priorityLabel = document.createElement('label');
        const prioritySpan1 = document.createElement('span');
        const priorityText = document.createElement('p');
        const prioritySpan2 = document.createElement('span');
        const prioritySelect = document.createElement('select');
        const none = document.createElement('option');
        const lowPriority = document.createElement('option');
        const mediumPriority = document.createElement('option');
        const highPriority = document.createElement('option');
        const criticalPriority = document.createElement('option');

        const dateLabel = document.createElement('label');
        const dateSpan1 = document.createElement('span');
        const dateText = document.createElement('p');
        const dateSpan2 = document.createElement('span');
        const formDate = document.createElement('input');

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

        descriptionText.textContent = 'Description';
        formDescription.id = 'form-description';
        formDescription.type = 'text'
        formDescription.setAttribute('maxlength', '50');

        notesText.textContent = 'Notes';
        formNotes.id = 'form-notes';

        priorityText.textContent = 'Priority';
        prioritySelect.id = 'form-select';
        none.setAttribute('value', 'none');
        none.textContent = '';
        lowPriority.setAttribute('value', 'low');
        lowPriority.textContent = 'Low';
        mediumPriority.setAttribute('value', 'medium');
        mediumPriority.textContent = 'Medium';
        highPriority.setAttribute('value', 'high');
        highPriority.textContent = 'High';
        criticalPriority.setAttribute('value', 'critical');
        criticalPriority.textContent = 'Critical';

        dateText.textContent = 'Date';
        formDate.id = 'form-date';
        formDate.type = 'date';

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

        form.appendChild(descriptionLabel);
        descriptionLabel.appendChild(descriptionSpan1);
        descriptionLabel.appendChild(descriptionText);
        descriptionLabel.appendChild(descriptionSpan2);
        form.appendChild(formDescription);


        form.appendChild(notesLabel);
        notesLabel.appendChild(notesSpan1);
        notesLabel.appendChild(notesText);
        notesLabel.appendChild(notesSpan2);
        form.appendChild(formNotes);

        form.appendChild(priorityLabel);
        priorityLabel.appendChild(prioritySpan1);
        priorityLabel.appendChild(priorityText);
        priorityLabel.appendChild(prioritySpan2);
        form.appendChild(prioritySelect);
        prioritySelect.appendChild(none);
        prioritySelect.appendChild(lowPriority);
        prioritySelect.appendChild(mediumPriority);
        prioritySelect.appendChild(highPriority);
        prioritySelect.appendChild(criticalPriority);

        form.appendChild(dateLabel);
        dateLabel.appendChild(dateSpan1);
        dateLabel.appendChild(dateText);
        dateLabel.appendChild(dateSpan2);
        form.appendChild(formDate);

        form.appendChild(submitButton);

        dialog.showModal();

        if (formType === 'add') {
            prioritySelect.value = 'none';
        }

        else if (formType === 'edit') {
            formTitle.value = tags.tagList[tagIndex].tasks[taskIndex].title;
            formDescription.value = tags.tagList[tagIndex].tasks[taskIndex].description;
            formNotes.value = tags.tagList[tagIndex].tasks[taskIndex].notes;
            prioritySelect.value = tags.tagList[tagIndex].tasks[taskIndex].priority;
            formDate.value = tags.tagList[tagIndex].tasks[taskIndex].dueDate;
        }
    }

    const closeForm = () => {
        const dialog = document.querySelector('dialog[open]');
        dialog.close();
    }

    const submitForm = () => {
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

        const description = form.querySelector('form > #form-description');
        description.style.color = 'rgb(0, 0 ,0)';

        const notes = form.querySelector('form > #form-notes');
        description.style.color = 'rgb(0, 0 ,0)';

        const priority = form.querySelector('form > #form-select');
        if (priority.value != 'none' && priority.value != 'low' && priority.value != 'medium' && priority.value != 'high' && priority.value != 'critical') {
            priority.style.color = 'rgb(255, 101, 119)';
            priority.style.border = '1px solid rgb(255, 101, 119)';
            console.log('entered');
            return;
        }
        else {
            priority.style.color = 'rgba(0, 0, 0, 1)';
            priority.style.border = 'none';
        }

        const dueDate = form.querySelector('form > #form-date');
        try {
            dueDate.style.color = 'rgba(0, 0, 0, 1)';
            dueDate.style.border = 'none';
        }
        catch (error) {
            dueDate.style.color = 'rgb(255, 101, 119)';
            dueDate.style.border = '1px solid rgb(255, 101, 119)';
            return;
        }

        if (tagIndex == 0 && taskIndex == '') {
            tasks.addTask(+tagIndex, title.value, description.value, notes.value, priority.value, dueDate.value, false);
            closeForm();
        }
        else if (taskIndex != '') {
            tasks.editTask(tagIndex, taskIndex, title.value, description.value, notes.value, priority.value, dueDate.value);
            closeForm();
        }
    }

    tags.addTag('General','rgb(87, 111, 114)');

    return {
        displayTasks,
        displayTags,
        loadTasksForm,
        loadTagsForm,
        submitForm,
        closeForm,
    }
})();

export default dom
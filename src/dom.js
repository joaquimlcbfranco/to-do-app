import tags from './tags.js'
import tasks from './tasks.js'

const dom = (() => {
    const body = document.querySelector('body');

    const userDetails = document.querySelector('user-details');

    const navRows = document.querySelector('nav-buttons > nav-row');

    const tags = document.querySelector('.tags');
    const tagButton = document.querySelector('.tags > button');

    const headerDetails = document.querySelector('.header-details');
    const cardsContainer = document.querySelector('.cards');
    const emptyCard = document.querySelector('.empty-card');

    const displayTasks = () => {
        for (let tagIndex = 0; tagIndex < tags.tagList.length; i++) {
            for (let taskIndex = 0; taskIndex < tags.tagList.tasks.length; taskIndex++) {
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

                cardTitle.classList.add('card-title');
                cardTitle.textContent = task.title;

                cardDescription.classList.add('card-description');
                cardDescription.textContent = task.description;

                cardTags.classList.add('card-tags');
                cardPriority.textContent = 'test'
                cardDate.textContent = task.date;

                cardButtons.classList.add('card-buttons');
                checkboxLabel.classList.add('checkbox');
                checkboxInput.id = 'form-checkbox';
                checkboxInput.type = 'checkbox';
                checkboxIndicator.classList.add('indicator');
                editButton.classList.add('material-symbols-outlined');
                editButton.textContent = 'edit';
                deleteButton.classList.add('material-symbols-outlined');
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
    }

    const loadTasksForm = (formType, projectIndex, taskIndex) => {
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

        closeButton.classList.add('form-close');
        closeButton.setAttribute('type', 'button');
        closeButton.addEventListener('click', () => closeForm(dialog));

        titleText.textContent = 'Title';
        formTitle.id = 'form-title';
        formTitle.type = 'text'

        descriptionText.textContent = 'Description';
        formDescription.id = 'form-description';
        formDescription.type = 'text'

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
            prioritySelect.value = 'medium';
        }

        else if (formType === 'edit') {
            formTitle.value = projects.projectList[projectIndex].tasks[taskIndex].title;
            formDescription.value = projects.projectList[projectIndex].tasks[taskIndex].description;
            formNotes.value = projects.projectList[projectIndex].tasks[taskIndex].notes;
            prioritySelect.value = projects.projectList[projectIndex].tasks[taskIndex].priority;
            formDate.value = projectIndex.projectList[projectIndex].tasks[taskIndex].dueDate;
        }

        submitButton.addEventListener('click', (e) => {
            e.preventDefault();

            submitForm();
        });
    }

    const loadTagsForm = (formType, projectIndex) => {
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

        closeButton.classList.add('form-close');
        closeButton.setAttribute('type', 'button');
        closeButton.addEventListener('click', () => closeForm(dialog));

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
            formTitle.value = projects.projectList[projectIndex].tasks[taskIndex].title;
            formDescription.value = projects.projectList[projectIndex].tasks[taskIndex].description;
            formNotes.value = projects.projectList[projectIndex].tasks[taskIndex].notes;
            prioritySelect.value = projects.projectList[projectIndex].tasks[taskIndex].priority;
            formDate.value = projectIndex.projectList[projectIndex].tasks[taskIndex].dueDate;
        }

        submitButton.addEventListener('click', (e) => {
            e.preventDefault();

            submitForm();
        });
    }

    const closeForm = (dialog) => {
        dialog.close();
    }

    const submitForm = () => {

    }

    emptyCard.addEventListener('click', () => {
        loadTasksForm('add');
    });

    return {
        displayTasks,
        loadTasksForm,
        loadTagsForm,
        closeForm,
    }
})();

export default dom
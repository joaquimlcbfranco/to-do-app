import projects from './tags.js'
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

    const fetchTasks = (projectIndex, taskIndex) => {
        
    }

    const loadForm = (formType, projectIndex, taskIndex) => {
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

    const closeForm = (dialog) => {
        dialog.close();
    }

    const submitForm = () => {

    }

    emptyCard.addEventListener('click', () => {
        loadForm('add');
    });

    return {
        fetchTasks,
        loadForm,
        closeForm,
    }
})();

export default dom
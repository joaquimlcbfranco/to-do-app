import tags from './tags.js';


const tasks = (() => {
    class Task {
        constructor(title, notes, dueDate, complete) {
            this.title = title;
            this.notes = notes;
            this.dueDate = dueDate;
            this.complete = complete;
        }
    }

    const addTask = (tagIndex, title, notes = '', dueDate, complete) => {
        const task = new Task(title, notes, dueDate, complete);
        tags.tagList[tagIndex].tasks.push(task);
    };

    const editTask = (tagIndex, taskIndex, title, notes, dueDate) => {
        tags.tagList[tagIndex].tasks[taskIndex].title = title;
        tags.tagList[tagIndex].tasks[taskIndex].notes = notes;
        tags.tagList[tagIndex].tasks[taskIndex].dueDate = dueDate;
    };

    const deleteTask = (tagIndex, taskIndex) => {
        tags.tagList[tagIndex].tasks.splice(taskIndex, 1);
    };

    const filterTasks = (tagIndex = 'home') => {
        if (tagIndex === 'home') {
            const list = tags.tagList;
            dom.displayTasks(list);
        }
        else {
            const list = tags.tagList.filter((obj) => {
                if (obj === tags.tagList[tagIndex]) return 1;
            });
            dom.displayTasks(list);
        }
    }

    return {
        addTask,
        editTask,
        filterTasks,
        deleteTask,
    };
})();

export default tasks;

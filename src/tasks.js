import tags from "./tags.js";

const tasks = (() => {
    class Task {
        constructor(title, description, notes, priority, dueDate, complete) {
            this.title = title;
            this.description = description;
            this.notes = notes;
            this.priority = priority;
            this.dueDate = dueDate;
            this.complete = complete;
        }
    }

    const addTask = (tagIndex, title, description = '', notes = '', priority = '', dueDate, complete) => {
        const task = new Task(title, description, notes, priority, dueDate, complete);
        tags.tagList[tagIndex].tasks.push(task);
        console.log(tags.tagList[tagIndex]);
    };

    const editTask = (tagIndex, taskIndex, title, description, notes, priority, dueDate) => {
        tags.tagList[tagIndex].tasks[taskIndex].title = title;
        tags.tagList[tagIndex].tasks[taskIndex].description = description;
        tags.tagList[tagIndex].tasks[taskIndex].notes = notes;
        tags.tagList[tagIndex].tasks[taskIndex].priority = priority;
        tags.tagList[tagIndex].tasks[taskIndex].dueDate = dueDate;
    };

    const deleteTask = (tagIndex, taskIndex) => {
        tags.tagList[tagIndex].tasks.splice(taskIndex, 1);
        console.log(tags.tagList[tagIndex]);
    };

    return {
        addTask,
        editTask,
        deleteTask,
    };
})();

export default tasks;

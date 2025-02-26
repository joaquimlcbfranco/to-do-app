import projects from "./projects.js";

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

    const addTask = (projectIndex, title, description = '', notes = '', priority = '', dueDate, complete) => {
        const task = new Task(title, description, notes, priority, dueDate, complete);
        projects.projectList[projectIndex].tasks.push(task);
    };

    const editTask = (projectIndex, taskIndex, taskData) => {
        projects.projectList[projectIndex].tasks[taskIndex].map((field) => {
            this.field = taskData.field;
        });
    };

    const deleteTask = (projectIndex, taskIndex) => {
        projects.projectList[projectIndex].tasks.splice(taskIndex, 1);
    };

    return {
        addTask,
        editTask,
        deleteTask,
    };
})();

export default tasks;

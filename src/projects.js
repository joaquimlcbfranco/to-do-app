import tasks from './tasks.js'

const projects = (() => {
    let projectList = [];

    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
    }

    const addProject = (title) => {
        const project = new Project(title);
        projectList.push(project);
    }

    const editProject = (projectIndex, title) => {
        projectList[projectIndex].title = title;
    }

    const deleteProject = (projectIndex) => {
        projectList.splice(projectIndex, 1);
    }

    return {
        projectList,
        addProject,
        editProject,
        deleteProject,
    }
})();

export default projects;
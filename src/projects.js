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
        console.log(projectList);
    }

    const editProject = (projectIndex, title) => {
        projectList[projectIndex].title = title;
        console.log(projectList);
    }

    const deleteProject = (projectIndex) => {
        projectList.splice(projectIndex, 1);
        console.log(projectList);
    }

    return {
        projectList,
        addProject,
        editProject,
        deleteProject,
    }
})();

export default projects;
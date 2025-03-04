import tasks from './tasks.js';

const tags = (() => {
    let tagList = [];

    class Tag {
        constructor(title, color) {
            this.title = title;
            this.color = color;
            this.tasks = [];
        }
    }

    const addTag = (title, color) => {
        const tag = new Tag(title, color);
        tagList.push(tag);
    }

    const editTag = (tagIndex, title, color) => {
        tagList[tagIndex].title = title;
        tagList[tagIndex].color = color;
    }

    const deleteTag = (tagIndex) => {
        tagList.splice(tagIndex, 1);
    }

    return {
        tagList,
        addTag,
        editTag,
        deleteTag,
    }
})();

export default tags;
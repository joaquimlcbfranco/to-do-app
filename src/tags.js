import tasks from './tasks.js'

const tags = (() => {
    let tagList = [];

    class Tag {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
    }

    const addTag = (title) => {
        const tag = new Tag(title);
        tagList.push(tag);
        console.log(tagList);
    }

    const editTag = (tagIndex, title) => {
        tagList[tagIndex].title = title;
        console.log(tagList);
    }

    const deleteTag = (tagIndex) => {
        tagList.splice(tagIndex, 1);
        console.log(tagList);
    }

    return {
        tagList,
        addTag,
        editTag,
        deleteTag,
    }
})();

export default tags;
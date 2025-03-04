import tags from "./tags.js";
import {
  format,
  formatDistance,
  formatRelative,
  isThisMonth,
  isThisWeek,
  isToday,
  subDays,
} from "date-fns";

const tasks = (() => {
  class Task {
    constructor(title, notes, dueDate, complete) {
      this.title = title;
      this.notes = notes;
      this.dueDate = dueDate;
      this.complete = complete;
    }
  }

  const addTask = (tagIndex, title, notes = "", dueDate, complete) => {
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

  const markDone = (element, tagIndex, taskIndex) => {
    if (tags.tagList[tagIndex].tasks[taskIndex].complete) {
      tags.tagList[tagIndex].tasks[taskIndex].complete = false;
      element.querySelector("h4").style.textDecoration = "none";
    } else if (!tags.tagList[tagIndex].tasks[taskIndex].complete) {
      tags.tagList[tagIndex].tasks[taskIndex].complete = true;
      element.querySelector("h4").style.textDecoration = "line-through";
    }
  };

  const filterTasks = (tagIndex = "home", interval = "none") => {
    if (interval === "none") {
      if (tagIndex === "home") {
        const list = tags.tagList;
        dom.displayTasks(list);
      } else {
        const list = tags.tagList.filter((obj) => {
          if (obj === tags.tagList[tagIndex]) return 1;
        });
        dom.displayTasks(list);
      }
    } else if (tagIndex === "other" && interval === "today") {
      const list = [{ title: "Today", color: "#576F72", tasks: [] }];
      for (let i = 0; i < tags.tagList.length; i++) {
        for (let j = 0; j < tags.tagList[i].tasks.length; j++) {
          if (isToday(tags.tagList[i].tasks[j].dueDate)) {
            list[0].tasks.push(tags.tagList[i].tasks[j]);
          }
        }
      }
      dom.displayTasks(list);
    } else if (tagIndex === "other" && interval === "week") {
      const list = [{ title: "Today", color: "#576F72", tasks: [] }];
      for (let i = 0; i < tags.tagList.length; i++) {
        for (let j = 0; j < tags.tagList[i].tasks.length; j++) {
          if (isThisWeek(tags.tagList[i].tasks[j].dueDate)) {
            list[0].tasks.push(tags.tagList[i].tasks[j]);
          }
        }
      }
      dom.displayTasks(list);
    } else if (tagIndex === "other" && interval === "month") {
      const list = [{ title: "Today", color: "#576F72", tasks: [] }];
      for (let i = 0; i < tags.tagList.length; i++) {
        for (let j = 0; j < tags.tagList[i].tasks.length; j++) {
          if (isThisMonth(tags.tagList[i].tasks[j].dueDate)) {
            list[0].tasks.push(tags.tagList[i].tasks[j]);
          }
        }
      }
      dom.displayTasks(list);
    }
  };

  return {
    addTask,
    editTask,
    markDone,
    filterTasks,
    deleteTask,
  };
})();

export default tasks;

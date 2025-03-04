import "./styles.css";
import tags from "./tags.js";
import tasks from "./tasks.js";
import dom from "./dom.js";
import events from "./events.js";

window.tags = tags;
window.tasks = tasks;
window.dom = dom;

tags.addTag("General", "#576F72");
dom.displayTags();
dom.displayTasks();

import "./styles.css";
import tags from './tags.js'
import tasks from './tasks.js'
import dom from './dom.js'
import events from "./events.js";

window.tags = tags;
window.tasks = tasks;
window.dom = dom;
window.clear;

tags.addTag('test1', '#FF0000');
tags.addTag('test2', '#00FF00');
tasks.addTask(0, 'title1', '', '2025/02/02', false);
tasks.addTask(0, 'title2', '', '2025/03/04', false);
tasks.addTask(1, 'title3', '', '2025/03/20', false);
tasks.filterTasks(1);
dom.displayTags();
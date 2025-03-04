import "./styles.css";
import tags from './tags.js'
import tasks from './tasks.js'
import dom from './dom.js'
import events from './events.js'

window.tags = tags;
window.tasks = tasks;
window.dom = dom;
window.clear;

tags.addTag('General','#576F72');
tags.addTag('test1', '#FF0000');
tags.addTag('test2', '#00FF00');
tasks.addTask(0, 'today', '', '2025/03/03', false);
// tasks.addTask(0, 'this week', '', '2025/03/05', false);
// tasks.addTask(2, 'this week', '', '2025/03/07', false);
// tasks.addTask(1, 'this month', '', '2025/03/20', false);
// tasks.addTask(1, 'this month', '', '2025/03/21', false);
dom.displayTags();
dom.displayTasks();
dom.loadTasksForm();
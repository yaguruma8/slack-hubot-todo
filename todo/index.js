'use strict';

const fs = require('fs')
const fileName = './tasks.json';

// {name:string, done:boolean = false} []
let tasks = [];

// tasks.jsonの読み込み
try {
    const data = fs.readFileSync(fileName,'utf8')
    tasks = JSON.parse(data)
} catch(e) {
    console.log(`${fileName}から復元できませんでした。`)
}


/**
 * タスクの一覧をjsonに書き込む
 */
function saveTasks() {
    fs.writeFileSync(fileName, JSON.stringify(tasks),'utf8');
}


/**
 * タスクを追加
 * @param {string} task
 */
function add(task) {
    tasks.push({ name: task, done: false });
    saveTasks();
}

/**
 * 未完了のタスクの一覧を表示
 * @returns {string[]} タスクのnameの配列
 */
function list() {
    return tasks.filter((task) => !task.done).map((task) => task.name);
}

/**
 * 完了のタスクの一覧を表示
 * @returns {string[]} タスクのnameの配列
 */
function donelist() {
    return tasks.filter((task) => task.done).map((task) => task.name);
}

/**
 * タスクの状態を完了にする
 * @param {string} task 完了にするタスク
 */
function done(task) {
    const index = tasks.findIndex((t) => t.name === task);
    if (index !== -1) {
        tasks[index].done = true;
    }
    saveTasks();
}

/**
 * タスクを削除
 * @param {string} task 削除するタスク
 */
function del(task) {
    const index = tasks.findIndex((t) => t.name === task);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
    saveTasks()
}

module.exports = {
    add,
    list,
    donelist,
    done,
    del,
};

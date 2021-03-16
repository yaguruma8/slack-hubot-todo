'use strict';

// {name:string, done:boolean = false} []
const tasks = [];

// add, list, donelist, done, del

/**
 * タスクを追加
 * @param {string} task
 */
function add(task) {
    tasks.push({ name: task, done: false });
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
}

module.exports = {
    add,
    list,
    donelist,
    done,
    del,
};

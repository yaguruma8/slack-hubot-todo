// Description:
//     TODO を管理する Slack bot です
// Commands:
//     hubot add - TODO を作成する
//     hubot done - TODO を完了にする
//     hubot del - TODO を削除する
//     hubot list - 未完了の TODO の一覧表示
//     hubot donelist - 完了済の TODO の一覧表示

'use strict';

const todo = require('todo');

module.exports = (robot) => {
    // TODOの作成
    robot.respond(/add (.+)/i, (msg) => {
        const task = msg.match[1].trim();
        todo.add(task);
        msg.send(`TODOを追加しました: ${task}`);
    });
    // TODOの状態を未完了 -> 完了
    robot.respond(/done (.+)/i, (msg) => {
        const task = msg.match[1].trim();
        todo.done(task);
        msg.send(`TODOを完了しました: ${task}`);
    });
    // TODOの削除
    robot.respond(/del (.+)/i, (msg) => {
        const task = msg.match[1].trim();
        todo.del(task);
        msg.send(`TODOを削除しました: ${task}`);
    });
    // 未完了のTODOの一覧表示
    robot.respond(/list/i, (msg) => {
        msg.send(`未完了のTODO:\n${todo.list().join('\n')}`);
    });
    // 完了済のTODOの一覧表示
    robot.respond(/donelist/i, (msg) => {
        msg.send(`完了したTODO:\n${todo.donelist().join('\n')}`);
    });
};

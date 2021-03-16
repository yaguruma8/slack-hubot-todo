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
};

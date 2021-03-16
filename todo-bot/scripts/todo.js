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
    robot.respond(/hello (.+)/i, (msg) => {
        msg.send(`Hello, World ${msg.match[1].trim()}!`);
    });
};

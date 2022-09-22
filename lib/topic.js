
var template = require('./template.js');
var db = require("./db");

exports.home = function (response) {

    db.query("SELECT * FROM topic", function (error, topics) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = template.list(topics);
        var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
        );

        response.writeHead(200);
        response.end(html);
    });

}

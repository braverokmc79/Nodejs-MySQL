module.exports = {
  HTML: function (title, list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <a href="/author">author</a>
      
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  }, list: function (topics) {
    var list = '<ul>';
    var i = 0;
    while (i < topics.length) {
      list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
      i = i + 1;
    }
    list = list + '</ul>';
    return list;
  }, authorSelect: function (authors, author_id) {

    var tag = authors.map(author => (
      ` <option value="${author.id}" ${author.id === author_id ? 'selected' : ''}  >${author.name}</option>`
    ));

    return `<select name="author"> ${tag} </select>`;

  },
  authorTable(authors) {
    var tag = authors.map(author => (
      `<tr>
                    <td>${author.name}</td>
                    <td>${author.profile}</td>
                    <td><a href="/author/update?id=${author.id}">update</a></td>
                    <td>
                      <form action="/author/delete_process" method="post">
                          <input type="hidden" name="id" value="${author.id}" >
                          <input type="submit"  value="delete" >
                      </form>
                    </td>
                </tr>`
    )).join("");

    return `<table> ${tag} </table>`;

  }
}

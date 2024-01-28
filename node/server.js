const express = require("express");
const app = express();
const mysql = require("mysql");
const config = {
  host: "mysql",
  user: "root",
  password: "root",
  database: "nodedb",
};

let createPeople = `create table if not exists people(
  id int not null auto_increment,
  name varchar(50),
  primary key(id)
)`;

const connection = mysql.createConnection(config);
connection.query(createPeople, function (err) {
  if (err) throw err;
  console.log("Table created");
});
const sql =
  "INSERT INTO people (name) values ('Vitor'), ('Junior'), ('Wesley'), ('Edi'), ('Desafio')";
connection.query(sql);

const query = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, results, fields) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

app.get("/", async (req, res) => {
  const peoples = await query("SELECT * FROM people");

  const title = "<h1>Full Cycle Rocks!</h1>";
  const list = `
    <ul>
      ${peoples.map((people) => `<li>${people.name}</li>`).join("")}
    </ul>
  `;

  res.send(title + list);
});

app.listen(3000, () => {
  console.log("Servidor no ar");
});

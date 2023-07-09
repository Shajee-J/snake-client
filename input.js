const { msg } = require("./constants");

let connection;

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();

  }

  if (data === 'w') {
    connection.write("Move: up")
  }

  if (data === 'd') {
    connection.write("Move: right")

  }

  if (data === 'a') {
    connection.write("Move: left")

  }

  if (data === 's') {
    connection.write("Move: down")

  }

  if (data === "1") {
    connection.write(`Say: ${msg[1]}`)
  }

  if (data === "2") {
    connection.write(`Say: ${msg[2]}`)
  }

  if (data === "3") {
    connection.write(`Say: ${msg[3]}`)

  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



module.exports = setupInput
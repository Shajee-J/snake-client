const net = require("net");
const { ip, portKey } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: ip,
    port: portKey,
  });

  conn.on("data", (data) => {
    console.log(`${data} `)
  });

  conn.on("connect", () => {
    console.log("welcome to snake hell!")
  });

  conn.on("connect", () => {
    conn.write(`Name: MSJ`)
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = connect
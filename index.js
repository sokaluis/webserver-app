const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, {
      "Content-Type": "application/csv",
    });

    // const person = {
    //   id: 1,
    //   name: "Luis Azocar",
    // };
    res.write("id, name");
    res.write("1, Fernando");
    res.write("2, Maria");
    res.write("3, Jose");
    res.write("4, Pedro");
    res.end();
  })
  .listen(8080);

console.log("Escuchando en el puerto", 8080);

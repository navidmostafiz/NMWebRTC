"use strict";

var app = require("express")();
var http = require("http").Server(app);
var PORT = process.env.PORT || 5000;

const { PeerServer } = require("peer");
const peerServer = PeerServer({ port: 9000, path: "/myapp" });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(PORT, function () {
  console.log("TERMINAL-X STARTED ON PORT: " + PORT);
});

const store = require('api/store');

let connections = [];

exports.index = (req, res) => {
  res.status(200).send(store.tracks);
};

exports.setStatus = (req, res) => {
  store.status = req.body;

  connections.forEach((conn) => {
    conn.sse.send(store.status);
  });

  res.status(200).send('ok');
};

exports.getStatus = (req, res) => {
  res.status(200).send(store.status);
};

exports.stream = (req, res) => {
  res.sse.setup();
  res.sse.send(store.status);
  connections.push(res);
};

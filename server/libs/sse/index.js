module.exports = (req, res, next) => {
  function setup() {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
  }

  function send(data) {
    if(res) {
      res.write(`data: ${JSON.stringify(data)} \n\n`);
    }
  }

  res.sse = {
    setup,
    send
  };

  next();
};

var http = require('http');
var app = require('./app/app')

const port = process.env.PORT || 4000;

const server = http.createServer(app);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

server.listen(port, () => {
    console.log(`server running on ${port}`)
})
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/api/text', function(req, res) {
  let params = req.query;
  let texts = {};
  for (let key in params) {
    if (key.startsWith('msg')) {
      let newKey = key.substring(3);  // Remove the "msg" part
      texts[newKey] = params[key];
    }
  }
  res.render('index', { texts });
});




app.listen(80, function() {
  console.log('Server is listening on port 80');
});

require('dotenv').config();
const app = require('./src/app.js');

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


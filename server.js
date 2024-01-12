const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

//4)start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`APP running on port ${3000}....`);
});

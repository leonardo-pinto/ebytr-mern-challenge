require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT_HOST;

app.listen(PORT, () => console.log(`app listening to port ${PORT}`));

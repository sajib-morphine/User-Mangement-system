const app = require('./src/index');
const dotEnv = require('dotenv');
dotEnv.config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT}`);
});
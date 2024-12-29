const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

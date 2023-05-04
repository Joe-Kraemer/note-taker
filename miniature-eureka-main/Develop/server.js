const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
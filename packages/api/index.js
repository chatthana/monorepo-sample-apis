const express = require('express');
const { urlencoded, json } = require('body-parser');
const { withRequestUuid } = require('@api/common/release');

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(withRequestUuid);

app.get('/', (req, res) => {
  return res.json({ user_id: req.requestId });
});

app.listen(3000, () => {
  console.log('The application is listening on the port %s', 3000);
});
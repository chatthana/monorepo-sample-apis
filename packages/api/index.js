const express = require('express');
const { urlencoded, json } = require('body-parser');
const { validateRequest } = require('common');

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(validateRequest);

app.get('/', (req, res) => {
  return res.json({ user_id: req.user });
});

app.listen(3000, () => {
  console.log('The application is listening on the port %s', 3000);
});
const express = require('express');
const { urlencoded, json } = require('body-parser');
const { validateRequest } = require('@api/common/release');

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(validateRequest);

app.get('/', (req, res) => {
  return res.json({ message: 'Success', data: { message: process.env.SAMPLE_API_DATA || 'Sample Data (Non-Existing)' } });
});

app.listen(3100, () => {
  console.log('The application is listening on the port %s', 3100);
});
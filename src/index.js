const express = require('express');
const dateInfo = require('./helpers/dateInfo');
const hostInfo = require('./helpers/hostInfo');

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  const { time, date, timezone } = dateInfo();
  const { hostname, ipAddresses } = hostInfo();
  res.json({ time, date, timezone, hostname, ipAddresses });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
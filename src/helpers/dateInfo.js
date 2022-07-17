const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

const dateInfo = () => ({
  time: dayjs().format('HH:mm:ss'),
  date: dayjs().format('YYYY-MM-DD'),
  timezone: dayjs.tz.guess(),
});

module.exports = dateInfo;

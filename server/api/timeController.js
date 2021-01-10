const moment = require('moment-timezone');

exports.getServerTimeInTimezone = (ctx) => {
  const { zone } = ctx.request.query;
  if (zone && moment.tz.zone(zone) === null) {
    ctx.throw(400, `Zone ${zone} is invalid or does not exist.`);
  } else {
    const serverDate = Date.now();
    const dateString = new Date(serverDate).toISOString();
    const dateInZone = moment.tz(dateString, zone);
    ctx.body = dateInZone.format("HH:mm:ss");
  }
}
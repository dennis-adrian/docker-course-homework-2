const { networkInterfaces, hostname } = require('os');

const hostInfo = () => {
  const nets = networkInterfaces();
  const hostName = hostname();
  const ipAddresses = {};

  for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
          const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
          if (net.family === familyV4Value && !net.internal) {
              if (!ipAddresses[name]) {
                  ipAddresses[name] = [];
              }
              ipAddresses[name].push(net.address);
          }
      }
  }

  return { hostname: hostName, ipAddresses };
}

module.exports = hostInfo;

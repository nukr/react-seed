const superagent = require('superagent');

exports.getInitialData = function () {
  return new Promise(function (resolve, reject) {
    superagent
      .get('http://mtgjson.com/json/FRF-x.json')
      .end(function (res) {
        if (res.ok) {
          resolve(res);
        } else {
          reject(res);
        }
      });
  });
};


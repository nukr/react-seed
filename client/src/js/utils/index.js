import superagent from 'superagent';

export let getInitialData = function () {
  return new Promise(function (resolve, reject) {
    superagent
      .get('http://mtgjson.com/json/FRF-x.json')
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
  });
};

export let getData = () => {
  return new Promise(function (resolve, reject) {
    superagent
      .get('http://localhost:12345/products')
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
  });
};


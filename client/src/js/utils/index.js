import superagent from 'superagent';
import action from '../actions/ServerActionCreator';

export default {
  getData () {
    superagent
      .get('http://mtgjson.com/json/FRF-x.json')
      .end((err, res) => {
        if (err) throw new Error();
        action.getData(res);
      });
  }
}

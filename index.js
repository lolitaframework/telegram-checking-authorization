const crypto = require('crypto');

module.exports = function(data, token) {
  const secret = crypto.createHash('sha256').update(token).digest();
  let array = [];

  for (let key in data){
    if (key != 'hash') {
      array.push(key + '=' + data[key]);
    }
  }
  const check_hash = crypto
    .createHmac('sha256', secret)
    .update(array.sort().join('\n'))
    .digest('hex');

  return check_hash == data.hash;
}
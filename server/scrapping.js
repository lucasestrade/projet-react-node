const fs = require('fs');
const Scrapper = require('./lib/Scrapper');
const connection = require('./lib/db');
const Devise = require('./models/Devise');

const scrapper = new Scrapper(
  "https://www.boursorama.com/bourse/devises/taux-de-change/",
  {},
  $ => {
    const result = [];

    $('#mark .u-relative li').each((index, element) => {
      const jElement = $(element);
      const obj = {
        eurTo: jElement.find('img.spotexchangerate__flag').text().trim(),
        taux: jElement.find('a.c-link   c-link--animated').text().trim(),
      };
      result.push(obj);
    })

    return result;
  },
  result => {
    Promise.all(result.map(item => {
      const obj = new Devise(item);
      return obj.save();
    })).then(() => console.log('all data saved'), console.log(obj));
  }
);
scrapper.scrap();


Devise.mapReduce({
  map: function () {
    emit("moyenne", this.score);
  },
  reduce: function (k, values) {
    return Array.sum(values) / values.length;
  }
}).then(data => console.log(data));
const fs = require('fs');
const path = require('path');
const debug = require('debug')('fgl:service:search');

const _read = () => {
  const _extract = item => {
    const {
      Stockcode: stockcode,
      Name: name,
      Description: description,
      CupString: cupstring,
      MediumImageFile: image,
      AdditionalAttributes: attrs
    } = item;
    // const nutritions = JSON.parse(attrs.nutritionalinformation);
    return { stockcode, name, description, cupstring, image, ingredients: attrs.ingredients };
  };
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(process.cwd() + '/sample/bakery.json'), (err, content) => {
      if (err) {
        reject(err);
        return;
      }
      try {
        let data = JSON.parse(content);
        const max = data.products.length;
        const series = new Set();
        for (let i = 0; i < 10; i++) {
          let n = Math.floor(Math.random() * max);
          while (series.has(n)) {
            n = Math.floor(Math.random() * 10 + 1);
          }
          series.add(n);
        }

        const products = [...series.values()].map(i => _extract(data.products[i]));
        resolve(products);
      } catch (e) {
        reject(e);
      }
    });
  });
};

class SearchService {
  static async find(kw) {
    const products = await _read();
    debug('product found');
    return products;
  }
}

module.exports = SearchService;

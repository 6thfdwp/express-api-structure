const debug = require('debug')('fgl:service:location');

const LocatationError = require('../errors/LocationError');
const { Store } = require('../db/models');

const stores = [
  {
    industry: 'supermarket',

    brand: 'woolworths',

    suburb: 'south brisbane',

    postcode: 1234
  },
  {
    industry: 'supermarket',

    brand: 'coles',

    suburb: 'south brisbane',

    postcode: 1234
  }
];

class LocationService {
  /**
   * @param {Object} options plain object represent request data body
   *  with format {industry, brand, postcode, last_modified}
   *  all propertiees can be optional
   */
  static async getStoreLocations(options) {
    // no postcode and suburb provided
    if (!options || (!options.postcode && !options.suburb)) {
      const stores = await Store.findAllStores();
      const last_modified = stores[0]['last_modified'];
      const lastFetch = new Date(options.last_modified);
      // if lastFetch invalid or not provided
      // or there is new update since last fetch
      if (!lastFetch.getDate() || lastFetch < last_modified) {
        // return all
        return { last_modified, store_locations: stores };
      }

      // no new updates
      return { last_modified, store_locations: [] };
    }
    const { postcode, suburb } = options;
    if (postcode) {
      const stores = await Store.findByPostcode(postcode);
      debug(`find by postcode: ${stores.length} found`);
      if (!stores || !stores.length) {
        throw new LocatationError.InvalidPostCode();
      }
      const last_modified = stores[0]['last_modified'];
      return { last_modified, store_locations: stores };
    }
  }
}

module.exports = LocationService;

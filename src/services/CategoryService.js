const LocatationError = require('../errors/LocationError');
const { Category } = require('../db/models');

class CategoryService {
  static async getPopularList() {
    return Category.findByLevel();
  }
}

module.exports = (sequelize, DataTypes) => {
  let Store = sequelize.define(
    'Store',
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true
      },
      store_name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      postcode: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      suburb: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      industry: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      brand: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      last_modified: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: 'Store',
      timestamps: false
    }
  );

  Store.findAllStores = async () => {
    const recs = await Store.findAll({
      // attributes: { exclude: ['last_modified'] },
      order: [['last_modified', 'DESC']]
    });

    const stores = recs.map(r => r.toJSON());
    return stores;
    // const last_modified = stores[0]['last_modified'];
    // return { last_modified, stores };
  };

  Store.findByPostcode = async postcode => {
    const recs = await Store.findAll({
      where: { postcode },
      // attributes: { exclude: ['last_modified'] },
      order: [['last_modified', 'DESC']]
    });
    return recs.map(r => r.toJSON());
  };

  Store.findBySuburb = suburb => {
    //
  };

  return Store;
};

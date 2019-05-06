module.exports = (sequelize, DataTypes) => {
  let Category = sequelize.define(
    'Category',
    {
      Id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true
      },
      Description: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      Level: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      ParentId: {
        type: DataTypes.STRING(100),
        allowNull: true
      }
    },
    {
      tableName: 'Category',
      timestamps: false
    }
  );

  Category.findByLevel = async (level = 1) => {
    // default is the first level of category
    const recs = await Category.findAll({ where: { level } });
    return recs.map(r => r.toJSON());
  };

  Category.findByParent = parentId => {
    //
  };

  return Category;
};

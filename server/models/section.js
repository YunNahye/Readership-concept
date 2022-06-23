module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'section',
    {
      sectionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(500)
      }
    },
    {
      timestamps: false,
      tableName: 'section'
    }
  );
}
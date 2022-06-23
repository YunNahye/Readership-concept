module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'report',
    {
      reportId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
      tableName: 'report'
    }
  );
}
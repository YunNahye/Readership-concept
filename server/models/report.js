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
      title: {
        type: DataTypes.STRING(500),
        allowNull: false
      },
      content: {
        type: DataTypes.JSON,
        allowNull: false
      },
      date: {
        type: DataTypes.DATEONLY
      }
    },
    {
      timestamps: false,
      tableName: 'report'
    }
  );
}
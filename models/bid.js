module.exports = function(sequelize, DataTypes) {
  var Bid = sequelize.define('Bid', {
    amount: DataTypes.STRING
    // jobId: DataTypes.INTEGER
  });

  Bid.associate = function(models) {
    // Job.belongsTo(models.User, {
    //   onDelete: "CASCADE",
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
    Bid.belongsTo(models.Job, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Bid;
};
module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define('Job', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Job.associate = function(models) {
    Job.hasMany(models.Bid);
    // Job.belongsTo(models.User, {
    //   onDelete: "CASCADE",
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
  };


  return Job;
};
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING
  });

  // User.associate = function(models) {
  //   User.hasMany(models.Job);
  // };

  return User;
};
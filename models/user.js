module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // User.associate = function(models) {
  //   User.hasMany(models.Job);
  // };

  return User;
};
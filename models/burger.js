module.exports = function(sequelize, DataTypes) {
  
  //db "Constructor" for schema, table Burger(s) created with columns...
  var Burger = sequelize.define("Burger", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new todos complete value to false if
      // it isn't supplied one
      defaultValue: false
    },
    date: {
      type: DataTypes.DATE
    }}, {
    timestamps: false,
    freezeTableName: true,
  });
  return Burger;
};

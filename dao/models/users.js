const { DataTypes } = require("sequelize/dist");


module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define('users',{
        id : {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        username : {
            type : DataTypes.TEXT,
            allowNull: false

        }
    }, {
        tableName: 'users',
        timestamps: false
    });
    return User;
}
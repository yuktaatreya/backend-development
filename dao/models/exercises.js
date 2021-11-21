module.exports = (sequelize,DataTypes) => {
    const Exercise = sequelize.define('exercises',{
        id : {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        userid : {
            type : DataTypes.UUIDV4,
            references: 'users',
            referencesKey: 'id' 
        },
        description : {
            type : DataTypes.TEXT,
            allowNull: false
        },
        duration : {
            type : DataTypes.DOUBLE,
            allowNull: false
        },
        date : {
            type : DataTypes.DATEONLY,
        }
    }, {
        tableName: 'exercises',
        timestamps: false
    });
    return Exercise;
}
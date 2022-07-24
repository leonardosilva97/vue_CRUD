const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            medida: DataTypes.STRING,
            quantidade: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Produto;
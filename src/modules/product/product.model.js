const path = require("path");
const sequelize = require(path.join(process.cwd(), "/src/config/lib/sequelize.js"));
const { DataTypes } = require("sequelize");
const File = require(path.join(process.cwd(), "src/modules/core/storage/file.model"));

const Product = sequelize.define(
	"products",
	{
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
        price: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		description: {
			allowNull: false,
			type: DataTypes.STRING,
		},
        discount: {
			allowNull: false,
			type: DataTypes.STRING,
		},
        stock_quantity: {
            allowNull: false,
			type: DataTypes.STRING,
        },
		created_by: {
			type: DataTypes.UUID,
		},
		updated_by: {
			type: DataTypes.UUID,
		},
	},
	{
		tableName: "products",
		timestamps: false,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

Product.hasMany(File, { as: "files", foreignKey: "owner_id" });

module.exports = Product;

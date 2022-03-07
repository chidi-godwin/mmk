import { QueryInterface } from "sequelize"
import { STRING, INTEGER } from "sequelize/types"


export default {
    up: (queryInterface: QueryInterface): Promise<void> => {
        return queryInterface.createTable('phone_number', {
            number: {
                allowNull: false,
                type: STRING
            },
            account_id: {
                allowNull: false,
                onUpdate: 'cascade',
                onDelete: 'cascade',
                references: {
                    model: 'account',
                    key: 'id'
                },
                type: INTEGER,
            }
        });
    },

    down: (queryInteface: QueryInterface): Promise<void> => {
        return queryInteface.dropTable('phone_number');
    }
}

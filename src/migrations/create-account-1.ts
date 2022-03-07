import { QueryInterface } from "sequelize"
import { STRING } from "sequelize/types"


export default {
    up: (queryInterface: QueryInterface): Promise<void> => {
        return queryInterface.createTable('account', {
            username: {
                allowNull: false,
                type: STRING
            },
            auth_id: {
                allowNull: false,
                type: STRING
            }
        });
    },

    down: (queryInteface: QueryInterface): Promise<void> => {
        return queryInteface.dropTable('account');
    }
}

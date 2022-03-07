import { Table, Column, Model, HasMany } from "sequelize-typescript";
import PhoneNumber from "./PhoneNumber";


@Table({
    tableName: "account",
    timestamps: false,
})
export default class Account extends Model<Account> {
    @Column
    public auth_id!: string;

    @Column
    public username!: string;

    @HasMany(() => PhoneNumber)
    numbers: PhoneNumber[]
}

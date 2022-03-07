import { Table, Column, Model, CreatedAt, UpdatedAt } from "sequelize-typescript";


@Table
export class Account extends Model<Account> {
    @Column
    public auth_id!: string;

    @Column
    public username!: string;
}

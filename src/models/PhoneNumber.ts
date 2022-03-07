import { Table, Column, Model, ForeignKey, BelongsTo } from "sequelize-typescript";

import Account from "./Account";


@Table
export default class PhoneNumber extends Model<PhoneNumber> {
    @Column
    public number!: string;

    @ForeignKey(() => Account)
    @Column
    account_id: number;

    @BelongsTo(() => Account)
    account: Account
}
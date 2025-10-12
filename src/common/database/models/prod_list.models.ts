import {
  Table,
  Column,
  Model,
  DataType,
  Default,
  AllowNull,
  PrimaryKey,
  AutoIncrement,
  Unique,
} from 'sequelize-typescript';

@Table({
  tableName: 'prod_list',
  timestamps: true,
})
export class prod_list extends Model<prod_list> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  Brand: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  Processer: string;

  @AllowNull(false)
  @Default(500)
  @Column(DataType.INTEGER)
  Battery: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  Storage: number;

  @AllowNull(false)
  @Column(DataType.ENUM('White', 'Black', 'Red', 'Blue', 'Other'))
  Color: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  Price: number;
}

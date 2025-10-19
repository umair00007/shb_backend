import { connectDatabase } from 'src/utils/databaseUtil';
import { Sample } from './models/sample.models';
import { prod_list } from './models/prod_list.models';
import { Platform } from './models/platform.model';
import { family } from './models/family.model';
import { customer } from './models/customer.model';

export default async function initModels(config: {
  dialect: string;
  host: string;
  port: string | number;
  database: string;
  username: string;
  password: string;
}) {
  const sequelize = connectDatabase({
    dialect: config.dialect,
    host: config.host,
    port: Number(config.port),
    database: config.database,
    username: config.username,
    password: config.password,
  });
  sequelize.addModels([Sample, prod_list, Platform, family, customer]);
  const influencer: any = {};
  influencer.sequelize = sequelize;
  influencer.Sample = Sample;
  influencer.prod_list = prod_list;
  influencer.Platforms = Platform;
  influencer.family = family;
  influencer.customer = customer;

  return influencer;
}

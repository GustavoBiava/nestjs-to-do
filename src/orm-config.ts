import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: './db/sql',
  synchronize: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};

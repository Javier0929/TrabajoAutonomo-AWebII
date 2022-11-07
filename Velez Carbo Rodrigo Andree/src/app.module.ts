import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CanalModule } from './canal/canal.module';
import { ProgramaModule } from './programa/programa.module';
import { GuiaModule } from './guia/guia.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ssl: process.env.ENTORNO === 'prod',
      extra: {
        ssl: process.env.ENTORNO === 'prod'
          ? { rejectUnauthorized: false }
          : null,
      },
      type: 'postgres',
      host: process.env.HOSTDB,
      port: +process.env.PORTDB,
      username: process.env.USERNAMEDB,
      password: process.env.PASSWORD,
      database: process.env.DATABASEDB,
      autoLoadEntities: true,
      synchronize: true
    }),
    CanalModule, ProgramaModule, GuiaModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

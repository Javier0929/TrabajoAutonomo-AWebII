import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AlumnoModule } from './alumno/alumno.module';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { NotaModule } from './nota/nota.module';
import { SucribirseModule } from './sucribirse/sucribirse.module';

@Module({
  imports: [

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
    AlumnoModule, AsignaturaModule, NotaModule, SucribirseModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

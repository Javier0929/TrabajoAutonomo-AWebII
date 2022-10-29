import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { EquipoModule } from './equipo/equipo.module';
import { PiezaModule } from './pieza/pieza.module';
import { ManejoModule } from './manejo/manejo.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,"..","public"),
      }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.Mongo_Uri_Conection),
    EquipoModule,
    PiezaModule,
    ManejoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

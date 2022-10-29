import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Mongoose } from 'mongoose';
import { join } from 'path';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { EspacioParqueoModule } from './espacio-parqueo/espacio-parqueo.module';
import { ParquearModule } from './parquear/parquear.module';


@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname,"..","public"),
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    VehiculoModule,
    EspacioParqueoModule,
    ParquearModule
    
  ],
  
  controllers: [],
  providers: [],
})
export class AppModule {}

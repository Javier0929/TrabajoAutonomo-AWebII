import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnoModule } from './alumno/alumno.module';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { NotaModule } from './nota/nota.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.urlMongo),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),
    AlumnoModule, AsignaturaModule, NotaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

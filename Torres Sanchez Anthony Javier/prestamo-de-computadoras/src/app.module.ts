import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';
import { ComputadoraModule } from './computadora/computadora.module';
import { PrestamistaModule } from './prestamista/prestamista.module';
import { PrestamoModule } from './prestamo/prestamo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_ENLACE),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),

    ComputadoraModule,

    PrestamistaModule,

    PrestamoModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

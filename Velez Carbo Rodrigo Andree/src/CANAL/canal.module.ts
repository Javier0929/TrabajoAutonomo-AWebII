import { Module } from '@nestjs/common';
import { CanalService } from './canal.service';
import { CanalController } from './canal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Canal } from './entities/canal.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Canal])
  ],
  controllers: [CanalController],
  providers: [CanalService]
})
export class CanalModule {}

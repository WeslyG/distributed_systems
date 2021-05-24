import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// pg - низкоуровневый драйвер
// typeorm - orm высокуровневое взаимодействие
// nest/typeorm - интеграция typorm -> nestjs

const host = process.env.HOST;
console.log(host);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host,
      port: 5432,
      username: 'postgres',
      password: 'changeme',
      database: 'superapp',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';
import { ImagesproductModule } from './imagesproduct/imagesproduct.module';
import { ImagesproductController } from './imagesproduct/imagesproduct.controller';
import { ImagesproductService } from './imagesproduct/imagesproduct.service';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
       autoLoadEntities:true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CustomerModule,
    ImagesproductModule,
    
  ],
  controllers: [AppController, CustomerController,ImagesproductController],
  providers: [AppService, CustomerService,ImagesproductService ],
})
export class AppModule {}

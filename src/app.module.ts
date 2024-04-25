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
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { WishListController } from './wish-list/wish-list.controller';
import { WishListService } from './wish-list/wish-list.service';
import { WishListModule } from './wish-list/wish-list.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';


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
    CategoryModule,
    ProductModule,
    WishListModule,
    UserModule,
    
  ],
  controllers: [AppController, CustomerController,ImagesproductController, CategoryController, ProductController, WishListController, UserController],
  providers: [AppService, CustomerService,ImagesproductService, CategoryService, ProductService, WishListService, UserService ],
})
export class AppModule {}

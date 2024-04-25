"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const customer_controller_1 = require("./customer/customer.controller");
const customer_service_1 = require("./customer/customer.service");
const customer_module_1 = require("./customer/customer.module");
const imagesproduct_module_1 = require("./imagesproduct/imagesproduct.module");
const imagesproduct_controller_1 = require("./imagesproduct/imagesproduct.controller");
const imagesproduct_service_1 = require("./imagesproduct/imagesproduct.service");
const category_controller_1 = require("./category/category.controller");
const category_service_1 = require("./category/category.service");
const category_module_1 = require("./category/category.module");
const product_controller_1 = require("./product/product.controller");
const product_service_1 = require("./product/product.service");
const product_module_1 = require("./product/product.module");
const wish_list_controller_1 = require("./wish-list/wish-list.controller");
const wish_list_service_1 = require("./wish-list/wish-list.service");
const wish_list_module_1 = require("./wish-list/wish-list.module");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
const user_module_1 = require("./user/user.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    autoLoadEntities: true,
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            customer_module_1.CustomerModule,
            imagesproduct_module_1.ImagesproductModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            wish_list_module_1.WishListModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController, customer_controller_1.CustomerController, imagesproduct_controller_1.ImagesproductController, category_controller_1.CategoryController, product_controller_1.ProductController, wish_list_controller_1.WishListController, user_controller_1.UserController],
        providers: [app_service_1.AppService, customer_service_1.CustomerService, imagesproduct_service_1.ImagesproductService, category_service_1.CategoryService, product_service_1.ProductService, wish_list_service_1.WishListService, user_service_1.UserService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
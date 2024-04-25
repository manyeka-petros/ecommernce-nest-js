"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
const common_1 = require("@nestjs/common");
const customer_controller_1 = require("./customer.controller");
const customer_service_1 = require("./customer.service");
const typeorm_1 = require("@nestjs/typeorm");
const customerEnti_1 = require("./entity/customerEnti");
let CustomerModule = exports.CustomerModule = class CustomerModule {
};
exports.CustomerModule = CustomerModule = __decorate([
    (0, common_1.Module)({
        controllers: [customer_controller_1.CustomerController],
        providers: [customer_service_1.CustomerService],
        imports: [typeorm_1.TypeOrmModule.forFeature([customerEnti_1.CustomerEntity])],
        exports: [typeorm_1.TypeOrmModule]
    })
], CustomerModule);
//# sourceMappingURL=customer.module.js.map
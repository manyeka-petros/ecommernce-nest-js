"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesproductModule = void 0;
const common_1 = require("@nestjs/common");
const imagesproduct_controller_1 = require("./imagesproduct.controller");
const imagesproduct_service_1 = require("./imagesproduct.service");
const typeorm_1 = require("@nestjs/typeorm");
const Iimagesproduct_1 = require("./entitys/Iimagesproduct");
let ImagesproductModule = exports.ImagesproductModule = class ImagesproductModule {
};
exports.ImagesproductModule = ImagesproductModule = __decorate([
    (0, common_1.Module)({
        controllers: [imagesproduct_controller_1.ImagesproductController],
        providers: [imagesproduct_service_1.ImagesproductService],
        imports: [typeorm_1.TypeOrmModule.forFeature([Iimagesproduct_1.ImagesProductEntit])],
        exports: [typeorm_1.TypeOrmModule]
    })
], ImagesproductModule);
//# sourceMappingURL=imagesproduct.module.js.map
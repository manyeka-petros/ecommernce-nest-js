"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesproductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Iimagesproduct_1 = require("./entitys/Iimagesproduct");
const typeorm_2 = require("typeorm");
let ImagesproductService = exports.ImagesproductService = class ImagesproductService {
    constructor(imageProductRepos) {
        this.imageProductRepos = imageProductRepos;
    }
    async getAllFiles() {
        return this.imageProductRepos.find();
    }
    async uploadDatabaseFile(dataBuffer, filename) {
        const newFile = await this.imageProductRepos.create({
            filename,
            data: dataBuffer
        });
        await this.imageProductRepos.save(newFile);
        return newFile;
    }
};
exports.ImagesproductService = ImagesproductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Iimagesproduct_1.ImagesProductEntit)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImagesproductService);
//# sourceMappingURL=imagesproduct.service.js.map
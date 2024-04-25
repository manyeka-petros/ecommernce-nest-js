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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesproductController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const imagesproduct_service_1 = require("./imagesproduct.service");
const multer_1 = require("multer");
let ImagesproductController = exports.ImagesproductController = class ImagesproductController {
    constructor(imageProdectServi) {
        this.imageProdectServi = imageProdectServi;
    }
    async addAvatar(file) {
        return this.imageProdectServi.uploadDatabaseFile(file.buffer, file.originalname);
    }
    getAllFiles() {
        return this.imageProdectServi.getAllFiles();
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof multer_1.Multer !== "undefined" && multer_1.Multer.ImagesProductEntit) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ImagesproductController.prototype, "addAvatar", null);
__decorate([
    (0, common_1.Get)('down'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImagesproductController.prototype, "getAllFiles", null);
exports.ImagesproductController = ImagesproductController = __decorate([
    (0, common_1.Controller)('file'),
    __metadata("design:paramtypes", [imagesproduct_service_1.ImagesproductService])
], ImagesproductController);
//# sourceMappingURL=imagesproduct.controller.js.map
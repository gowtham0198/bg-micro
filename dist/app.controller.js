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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getRemoveImageBackground(imageUrl, response) {
        if (imageUrl == null) {
            throw new common_1.HttpException('Bad Request', common_1.HttpStatus.BAD_REQUEST);
        }
        const resImageBgRemoved = await this.appService.removeImageBackground(imageUrl);
        response.send({
            message: "success"
        });
    }
    async send(app_id, user_id, organization_id, others, dp_image_url) {
        const payload = {
            app_id,
            user_id,
            organization_id,
            others,
            dp_image_url
        };
        const resImageBgRemoved = await this.appService.removeImageBackground(payload);
        return resImageBgRemoved;
    }
};
__decorate([
    (0, common_1.Get)('show-image'),
    __param(0, (0, common_1.Query)('url')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getRemoveImageBackground", null);
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)("app_id")),
    __param(1, (0, common_1.Body)("user_id")),
    __param(2, (0, common_1.Body)("organization_id")),
    __param(3, (0, common_1.Body)("others")),
    __param(4, (0, common_1.Body)("dp_image_url")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "send", null);
AppController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map
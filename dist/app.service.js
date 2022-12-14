"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AppService = class AppService {
    async getSessionData() {
        try {
            const response = await axios_1.default.post('https://api.depositphotos.com/?dp_command=login&dp_apikey=7a249bf2e385e13cc89b26ebf82d306e3009f1f5&dp_login_user=removebgELB.elblearning.com&dp_login_password=El23@gu38@@', {});
            return response.data;
        }
        catch (error) {
            return null;
        }
    }
    async removeImageBackground(payload) {
        const sessionData = await this.getSessionData();
        if (sessionData && sessionData.type === 'success') {
            return sessionData;
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
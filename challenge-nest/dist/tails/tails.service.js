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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TailsService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const urlTest = /^http/ig;
let TailsService = class TailsService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getHasuke(tail) {
        return this.httpService.get(`http://graphql:8080/api/rest/tail?tail=${tail}`);
    }
    async getJsonData(param) {
        if (process.env.FILE_NAME) {
            let file;
            if (urlTest.test(process.env.FILE_NAME)) {
                const preResult = await this.httpService.get(`${process.env.FILE_NAME}`).toPromise();
                file = preResult.data;
            }
            else {
                const preResult = await fs_1.promises.readFile(`/file-dir/${process.env.FILE_NAME}`);
                file = JSON.parse(preResult);
            }
            const data = file.find((item) => item.id === param);
            return data;
        }
        return null;
    }
};
TailsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], TailsService);
exports.TailsService = TailsService;
//# sourceMappingURL=tails.service.js.map
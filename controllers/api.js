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
const kwyjibo_1 = require("kwyjibo");
let Api = class Api {
    ping(context) {
        return { response: "OK" };
    }
    echo(context) {
        context.response.send(context.request.body);
    }
};
__decorate([
    kwyjibo_1.DocAction(`Responds "OK" when accessed.`),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kwyjibo_1.Context]),
    __metadata("design:returntype", Object)
], Api.prototype, "ping", null);
__decorate([
    kwyjibo_1.Post(),
    kwyjibo_1.DocAction("Echoes the received body"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kwyjibo_1.Context]),
    __metadata("design:returntype", void 0)
], Api.prototype, "echo", null);
Api = __decorate([
    kwyjibo_1.Controller("/api"),
    kwyjibo_1.DocController("Sample API Controller.")
], Api);
//# sourceMappingURL=api.js.map
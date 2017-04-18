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
const K = require("kwyjibo");
let Dev = class Dev {
    doSomething(context) {
        return { result: "This can only be hit in dev" };
    }
    docs() {
        return K.getDocsAsHTML();
    }
};
__decorate([
    kwyjibo_1.DocAction("Does something, only for dev"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kwyjibo_1.Context]),
    __metadata("design:returntype", Object)
], Dev.prototype, "doSomething", null);
__decorate([
    kwyjibo_1.DocAction("Shows the app documentation"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Dev.prototype, "docs", null);
Dev = __decorate([
    K.Dev(),
    kwyjibo_1.Controller("/dev"),
    kwyjibo_1.DocController("This controller is only mounted if NODE_ENV == development")
], Dev);
exports.default = Dev;
//# sourceMappingURL=dev.js.map
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
const app_1 = require("../app");
let Frontend = Frontend_1 = class Frontend {
    index(context) {
        context.response.render("helloworld");
    }
    login(context) {
        context.response.render("login");
    }
    goToAuthentication(context) {
        // once you get here, the user will be successfully authenticated
        context.response.redirect(K.getActionRoute(Frontend_1, "onlyForUsers"));
    }
    onlyForUsers(context) {
        context.response.render("authorized");
    }
};
__decorate([
    kwyjibo_1.Get("/"),
    kwyjibo_1.DocAction(`Sample index`),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kwyjibo_1.Context]),
    __metadata("design:returntype", void 0)
], Frontend.prototype, "index", null);
__decorate([
    kwyjibo_1.Get("/authenticate"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kwyjibo_1.Context]),
    __metadata("design:returntype", void 0)
], Frontend.prototype, "login", null);
__decorate([
    kwyjibo_1.Post("/authenticate"),
    kwyjibo_1.DocAction(`Action that triggers the authentication middleware`),
    kwyjibo_1.ActionMiddleware(app_1.default.authenticate),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kwyjibo_1.Context]),
    __metadata("design:returntype", void 0)
], Frontend.prototype, "goToAuthentication", null);
__decorate([
    kwyjibo_1.Get("/authorized"),
    kwyjibo_1.DocAction(`Action that verifies that a user is authorized`),
    kwyjibo_1.ActionMiddleware(app_1.default.authorize),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kwyjibo_1.Context]),
    __metadata("design:returntype", void 0)
], Frontend.prototype, "onlyForUsers", null);
Frontend = Frontend_1 = __decorate([
    kwyjibo_1.Controller("/frontend"),
    kwyjibo_1.DocController("Sample frontend Controller.")
], Frontend);
var Frontend_1;
//# sourceMappingURL=frontend.js.map
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
const K = require("kwyjibo");
let Fixture = class Fixture {
    prepare() {
        // this method will run before the tests
    }
    test1() {
        return new Promise((resolve, reject) => {
            if (1 !== 1) {
                reject(new Error("equality is failing!!!"));
            }
            else {
                resolve();
            }
        });
    }
    test2() {
        throw new Error("failed test!");
    }
    cleanUp() {
        // this method will run after the tests
    }
};
__decorate([
    K.Before(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Fixture.prototype, "prepare", null);
__decorate([
    K.Test("A test that passes"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Fixture.prototype, "test1", null);
__decorate([
    K.Test("A test that fails"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Fixture.prototype, "test2", null);
__decorate([
    K.After(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Fixture.prototype, "cleanUp", null);
Fixture = __decorate([
    K.Fixture()
], Fixture);
exports.default = Fixture;
//# sourceMappingURL=fixture.js.map
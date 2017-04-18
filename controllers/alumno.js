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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const kwyjibo_1 = require("kwyjibo");
const inversify_1 = require("inversify");
const types_1 = require("./../interfaces/types");
const inversify_2 = require("./../config/inversify");
let Alumno = class Alumno {
    constructor() {
        this.alumnoRepo = inversify_2.InversifyContainer.get(types_1.TYPES.AlumnoRepoType);
    }
    getAll(context) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("controller alumno Get all");
            return this.alumnoRepo.getAll();
        });
    }
};
__decorate([
    kwyjibo_1.Get("/GetAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kwyjibo_1.Context]),
    __metadata("design:returntype", Promise)
], Alumno.prototype, "getAll", null);
Alumno = __decorate([
    kwyjibo_1.Controller("/alumno"),
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], Alumno);
exports.Alumno = Alumno;
//# sourceMappingURL=alumno.js.map
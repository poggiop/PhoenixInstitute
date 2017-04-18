"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repositories = require("./../repositories/repositories");
const lagash_dbaccess_1 = require("lagash-dbaccess");
const inversify_1 = require("inversify");
const types_1 = require("./../interfaces/types");
const inversify = require("inversify");
require("reflect-metadata");
inversify.decorate(inversify.injectable(), lagash_dbaccess_1.RepositoryBase);
var InversifyContainer = new inversify_1.Container();
exports.InversifyContainer = InversifyContainer;
InversifyContainer.bind(types_1.TYPES.AlumnoRepoType).to(Repositories.AlumnoRepository);
//# sourceMappingURL=inversify.js.map
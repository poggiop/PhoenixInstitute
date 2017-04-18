import * as RepoInterfaces from "./../interfaces/repositories/repoInterfaces";
import * as Repositories from "./../repositories/repositories";
import { RepositoryBase } from "lagash-dbaccess";
import { Container } from "inversify";
import { TYPES } from "./../interfaces/types";
import * as inversify from "inversify"
import "reflect-metadata";


inversify.decorate(inversify.injectable(), RepositoryBase);

var InversifyContainer = new Container();

InversifyContainer.bind<RepoInterfaces.AlumnoInterfaceRepository>(TYPES.AlumnoRepoType).to(Repositories.AlumnoRepository);

export { InversifyContainer };
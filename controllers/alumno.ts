import {Controller, DocController, DocAction, Get, Context} from "kwyjibo";
import * as K from "kwyjibo";
import { injectable, inject } from "inversify";
import { TYPES } from "./../interfaces/types";
import * as RepoInterface from "./../interfaces/repositories/repoInterfaces"
import { InversifyContainer } from "./../config/inversify";
import * as Model from "./../models/model"

@Controller("/alumno")
@injectable()
export class Alumno{


    private alumnoRepo : RepoInterface.AlumnoInterfaceRepository;

    constructor(){
       this.alumnoRepo = InversifyContainer.get<RepoInterface.AlumnoInterfaceRepository>(TYPES.AlumnoRepoType); 
    }

    @Get("/GetAll")
    async getAll(context: Context): Promise<Model.Alumno[]>{

        console.log("controller alumno Get all");

        return this.alumnoRepo.getAll();
           

    }

}
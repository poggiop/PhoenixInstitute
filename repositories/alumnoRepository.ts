import { RepositoryBase, DBQueryParameter, DBTypes } from "lagash-dbaccess";
import * as Model from "./../models/model";

import { injectable, inject } from "inversify";
import "reflect-metadata";
import * as RepoInterface from "./../interfaces/repositories/repoInterfaces"
import { TYPES } from "./../interfaces/types";

@injectable()
export class AlumnoRepository extends RepositoryBase implements RepoInterface.AlumnoInterfaceRepository {
    
    
   async getAll(): Promise<Model.Alumno[]>{
       let output= new Array<Model.Alumno>();
       let alumno = new Model.Alumno();
       alumno.Apellido = "poggio"
       output.push(alumno);
       return output;
   }


}
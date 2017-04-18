import * as Model from "./../../models/model";

export interface AlumnoInterfaceRepository {

    getAll(): Promise<Model.Alumno[]>;

}
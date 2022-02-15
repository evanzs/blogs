import { Interface } from "readline";
import { UpdateResult } from "typeorm";

interface IRepository<T>{

     getById(id:string):Promise<T | undefined>;
     getAll():Promise<T[]>;
     create(entity:T):Promise<T>;
     update(id:string, entity:T):Promise<UpdateResult>;
     delete(id:string):Promise<boolean>;

}
export default IRepository
import { EntityTarget, getRepository, ObjectType, Repository, UpdateResult } from "typeorm";

import IRepository from "./IRepository";

class Repository<T> implements IRepository<T>{

    private readonly _entity: ObjectType<T>;     

    constructor(entity:ObjectType<T>){
        this._entity = entity;              
    }   

   async getById(id: string): Promise<T | undefined> {
        return await getRepository(this._entity).findOne(id)
    }
    async getAll(): Promise<T[]> {
        return await getRepository(this._entity).find(undefined)
    }
    async create(entity: T): Promise<T> {
         return await getRepository(this._entity).create(entity)
    }
    async update(id: string, entity: T): Promise<UpdateResult> {
        return await getRepository(this._entity).update(id,entity)
    }
    async delete(id: string): Promise<boolean> {
        await getRepository(this._entity).delete(id)
        return true;
    }
    
}

export default Repository
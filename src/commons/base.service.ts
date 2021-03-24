import {
  CreateQuery,
  Document,
  FilterQuery,
  Model,
  Schema,
  Types,
  UpdateQuery,
} from 'mongoose';

type MongoID = string | Schema.Types.ObjectId | Types.ObjectId;
export class BaseService<T extends Document, TPopulated extends T = T> {
  constructor(private model: Model<T>) {}

  async getAll(): Promise<TPopulated[]> {
    return (this.model.find() as unknown) as TPopulated[];
  }

  async getById(id: MongoID): Promise<TPopulated> {
    return (this.model.findById(id) as unknown) as TPopulated;
  }

  async getByIds(ids: MongoID[]): Promise<TPopulated[]> {
    return this.model.where('id').in(ids);
  }

  async getAllByQuery(query: FilterQuery<T>): Promise<TPopulated[]> {
    return (this.model.find(query) as unknown) as Promise<TPopulated[]>;
  }

  async create(input: CreateQuery<T>): Promise<TPopulated> {
    return (this.model.create(input) as unknown) as Promise<TPopulated>;
  }

  async createMany(input: CreateQuery<T>[]): Promise<TPopulated[]> {
    return (this.model.create(input) as unknown) as Promise<TPopulated[]>;
  }

  async updateById(id: MongoID, input: UpdateQuery<T>): Promise<TPopulated> {
    return (this.model.findByIdAndUpdate(id, input, {
      new: true,
    }) as unknown) as Promise<TPopulated>;
  }

  async deleteById(id: MongoID): Promise<TPopulated> {
    return (this.model.findByIdAndDelete(id) as unknown) as Promise<TPopulated>;
  }
}

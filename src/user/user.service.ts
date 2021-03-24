import {Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'commons/base.service';
import {Model} from 'mongoose';
import {User,UserDocument} from './user.schema';

@Injectable()
export class UserService extends BaseService<UserDocument>{
    constructor(
        @InjectModel(User.name)
        private readonly userModel:Model<UserDocument>)
        {
            super(userModel)
            
        }
}


/* async getUsers():Promise<UserDocument[]>{
    return await this.userModel.find();
}

async getUser(id):Promise<UserDocument>{
    return await this.userModel.findById(id);
}

async addUsers(input): Promise<UserDocument>{
    return await this.userModel.create(input);
}

async updateUsers(id, input): Promise<UserDocument>{
    return await this.userModel.findByIdAndUpdate(id, input, {new:true});
}
 */
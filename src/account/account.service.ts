import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BaseService } from 'src/commons/base.service';
import {
  Account,
  AccountDocument,
  AccountPopulatedDocument,
} from './account.schema';

@Injectable()
export class AccountService extends BaseService<
  AccountDocument,
  AccountPopulatedDocument
> {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<AccountDocument>,
  ) {
    super(accountModel);
  }
}

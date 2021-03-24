import { Account } from './account.schema';
import { AccountService } from './account.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { AccountInput } from './account.input';

@Resolver()
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query(() => [Account])
  async accounts() {
    return this.accountService.getAll();
  }

  @Query(() => Account)
  async account(@Args({ name: 'id' }) id: Types.ObjectId) {
    return this.accountService.getById(id);
  }

  @Mutation(() => Account)
  async addAccount(@Args({ name: 'input' }) input: AccountInput) {
    return await this.accountService.create(input);
  }

  @Mutation(() => Account)
  async updateAccount(
    @Args({ name: 'id' }) id: string,
    @Args({ name: 'input' }) input: AccountInput,
  ) {
    return await this.accountService.updateById(id, input);
  }

  @Mutation(() => Account)
  async deleteAccount(@Args({ name: 'id' }) id: Types.ObjectId) {
    return await this.accountService.deleteById(id);
  }
}

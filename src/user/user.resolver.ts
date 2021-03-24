import { User } from './user.schema';
import { UserService } from './user.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { UserInput } from './user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.getAll();
  }

  @Query(() => User)
  async user(@Args({ name: 'id' }) id: Types.ObjectId) {
    return this.userService.getById(id);
  }

  @Mutation(() => User)
  async addUser(@Args({ name: 'input' }) input: UserInput) {
    return await this.userService.create(input);
  }

  @Mutation(() => User)
  async updateUser(
    @Args({ name: 'id' }) id: string,
    @Args({ name: 'input' }) input: UserInput,
  ) {
    return await this.userService.updateById(id, input);
  }

  @Mutation(() => User)
  async deleteUser(@Args({ name: 'id' }) id: Types.ObjectId) {
    return await this.userService.deleteById(id);
  }
}

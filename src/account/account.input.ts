import { Field, ID, InputType } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@InputType()
export class AccountInput {
  @Field()
  number: string;

  @Field()
  user: Types.ObjectId;
}

//export const UserInputSchema = SchemaFactory.createForClass(UserInput);

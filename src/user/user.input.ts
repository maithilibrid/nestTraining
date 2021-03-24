import { Field, ID, InputType } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@InputType()
export class UserInput {
  @Field()
  name: string;

  @Field()
  dob: string;

  @Field()
  gender: string;
}

//export const UserInputSchema = SchemaFactory.createForClass(UserInput);

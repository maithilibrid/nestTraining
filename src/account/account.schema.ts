import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/user/user.schema';
import { Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema()
export class Account {
  @Field(() => ID)
  id: Types.ObjectId;

  @Field()
  @Prop()
  number: string;

  @Field(() => User)
  @Prop([
    {
      required: true,
      type: MongooseSchema.Types.ObjectId,
      ref: User.name,
      autopopulate: true,
    },
  ])
  user: UserDocument;
}

export interface AccountDocument extends Document {
  user: UserDocument | User['id'];
  number: string;
}

export interface AccountPopulatedDocument extends AccountDocument {
  user: UserDocument;
}

export const AccountSchema = SchemaFactory.createForClass(Account);

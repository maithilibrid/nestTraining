import { Field, ID, ObjectType, InputType } from "@nestjs/graphql";
import { Document, Types } from "mongoose";
import {Schema,Prop, SchemaFactory} from "@nestjs/mongoose";

@ObjectType()
@Schema()
export class User{
    @Field(() => ID)
    id: Types.ObjectId;

    @Field()
    @Prop()
    name:string;

    @Field()
    @Prop()
    gender:string;

    @Field({nullable:true})
    @Prop()
    dob:string;
}

@InputType()
export class UserInput{
    @Field()
    name: String

    @Field()
    gender: String

    @Field()
    dob:String
}

@InputType()
export class UserUpdate{
    @Field({nullable:true})
    name: String

    @Field({nullable:true})
    gender: String

    @Field({nullable:true})
    dob:String
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
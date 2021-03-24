import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import {UserModule} from './user/user.module';
//import { UserSchema } from './user/user.schema';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:H7GKRr6qXbUgnxlo@cluster0.rhzvb.mongodb.net/test?retryWrites=true&w=majority',
      {
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true,
      },
    ),
    GraphQLModule.forRoot({
      autoSchemaFile:true,
    }),
    UserModule,
    AccountModule,
  ],
  providers:[],
})
export class AppModule {}

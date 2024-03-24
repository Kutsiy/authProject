import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ type: String, unique: true, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: Boolean, required: true })
  isActivated: boolean;

  @Prop({ type: String, default: false })
  activationLink: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

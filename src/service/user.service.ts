import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schema/user.schema';
import * as uuid from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async registration(email, password) {
    const candidate = await this.userModel.findOne({ email });
    if (candidate) {
      throw new Error('User already exists');
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await this.userModel.create({
      email,
      password: hashPassword,
      activationLink,
    });
  }
}

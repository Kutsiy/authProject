import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller()
export class AppController {
  @Post('registration')
  async registration() {
    try {
    } catch (error) {}
  }
  @Post('login')
  async login() {
    try {
    } catch (error) {}
  }
  @Post('logout')
  async logout() {
    try {
    } catch (error) {}
  }
  @Get('activate/:link')
  async activate() {
    try {
    } catch (error) {}
  }
  @Get('refresh')
  async refresh() {
    try {
    } catch (error) {}
  }
  @Get('users')
  async getUsers() {
    try {
    } catch (error) {}
  }
}

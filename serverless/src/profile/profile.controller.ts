import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profle.service';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('test')
  getTest(): string {
    console.log('RUN');
    return this.profileService.getTest();
  }

  @Get()
  getAll(): any[] {
    console.log('RUN');
    return [];
  }
}

import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ProfileService } from './profle.service';
import { Profile } from './profile.interface';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('test')
  getTest(): string {
    console.log('RUN');
    return this.profileService.getTest();
  }

  @Get(':id')
  getProfile(@Param('id') id: number): Profile | any {
    const profile = this.profileService.getOne(+id);
    if (!profile) {
      throw new NotFoundException('Not found this use id');
    }
    return profile;
  }

  @Get()
  getAll(): any[] {
    console.log('RUN');
    return this.profileService.getAll();
  }
}

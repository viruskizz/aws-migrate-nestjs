import { Injectable } from '@nestjs/common';
import { Profile } from './profile.interface';

@Injectable()
export class ProfileService {
  private readonly data: Profile[] = [
    {
      id: 1,
      firstname: 'Araiva',
      lastname: 'Viruskizz',
    },
    {
      id: 2,
      firstname: 'Thitiwut',
      lastname: 'Somsa',
    },
  ];

  getAll(): Profile[] {
    return this.data;
  }

  get(id: number) {

  }

  getTest(): string {
    return 'Hello Profile!';
  }
}

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

  getOne(id: number): Profile | undefined {
    return this.data.find((e) => e.id === id);
  }

  getTest(): string {
    return 'Hello Profile!';
  }
}

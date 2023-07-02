import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getTest(): string {
    return 'Hello Product!';
  }
}

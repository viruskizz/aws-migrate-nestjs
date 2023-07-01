import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get('test')
  getTest(): string {
    return this.productService.getTest();
  }

  @Get()
  getAll(): any[] {
    return [];
  }
}

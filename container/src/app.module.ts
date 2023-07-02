import { Module } from '@nestjs/common';
import { ProfileController } from './profile/profile.controller';
import { ProductController } from './product/product.controller';
import { ProfileService } from './profile/profle.service';
import { ProductService } from './product/product.service';

@Module({
  imports: [],
  controllers: [ProfileController, ProductController],
  providers: [ProfileService, ProductService],
})
export class AppModule {}

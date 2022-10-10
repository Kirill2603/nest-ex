import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Controller('products')
export class ProductsController {

  @Get()
  getAll(): string {
    return 'getAll!!'
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne' + id
  }

  @Post()
  create(@Body() createProduct: CreateProductDto): string {
    return `Title: ${createProduct.title}, Price: ${createProduct.price}`
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Deleted: ${id}`
  }

  @Put(':id')
  update(@Body() updateProduct: UpdateProductDto, @Param('id') id: string) {
    return `Product ${id} updated: Title: ${updateProduct.title}, Price: ${updateProduct.price}`
  }
}

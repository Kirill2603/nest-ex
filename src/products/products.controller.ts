import { Controller, Get, Param } from '@nestjs/common'

@Controller('products')
export class ProductsController {

  @Get()
  getAll() {
    return 'getAll!!'
  }

  @Get(':id')
  getOne(@Param() params) {
    return 'getOne' + params.id
  }
}
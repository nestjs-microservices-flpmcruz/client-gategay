import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from '../enum/order.enum';
import { PaginationDto } from 'src/common';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatus, {
    message: `status must be a valid enum value: ${OrderStatus}`,
  })
  status: OrderStatus;
}

// src/users/dto/user-response.dto.ts
export class UserResponseDto {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  sales: number;
  sales_sum: number;
  purchases: number;
  purchases_sum: number;
  balance: number;
}

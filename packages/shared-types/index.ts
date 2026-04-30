export enum OrderStatus {
  PENDING = "PENDING",
  PAYMENT_COMPLETED = "PAYMENT_COMPLETED",
  INVENTORY_RESERVED = "INVENTORY_RESERVED",
  COMPLETED = "COMPLETED",
  PAYMENT_FAILED = "PAYMENT_FAILED",
  INVENTORY_FAILED = "INVENTORY_FAILED",
  CANCELLED = "CANCELLED"
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: "ADMIN" | "USER";
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface PaymentEvent {
  orderId: string;
  userId: string;
  amount: number;
  status: "SUCCESS" | "FAILED";
}

export interface InventoryEvent {
  orderId: string;
  items: OrderItem[];
  status: "RESERVED" | "OUT_OF_STOCK" | "RELEASED";
}

export interface NotificationEvent {
  userId: string;
  message: string;
  type: "EMAIL" | "PUSH" | "SMS";
}

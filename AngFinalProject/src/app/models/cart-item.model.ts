// cart-item.model.ts

export class CartItem {
    id: number; // Product ID or unique identifier
    title: string; // Product title
    price: number; // Product price
    quantity: number; // Product quantity
  
    constructor() {
      this.id = 0;
      this.title = '';
      this.price = 0;
      this.quantity = 0;
    }
  }
  
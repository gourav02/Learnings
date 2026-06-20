import { StockNotificationObserver } from "../observer/StockNotificationObserver";
import { StockAvailabilityObservable } from "./StockAvailabilityObservable";

//concrete observable class
export class IphoneProductObservable implements StockAvailabilityObservable {
  private readonly productId: string;
  private readonly productName: string;
  private readonly price: number;
  private readonly stockObservers: StockNotificationObserver[];
  private stockQuantity: number;

  constructor(
    productId: string,
    productName: string,
    price: number,
    stockQuantity: number,
  ) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.stockQuantity = stockQuantity;

    this.stockObservers = [];
  }

  addStockObserver(observer: StockNotificationObserver): void {
    this.stockObservers.push(observer);

    console.log(
      `[+]${observer.getUserId()} subscribed for notifications on ${this.productName}`,
    );
  }

  removeStockObserver(observer: StockNotificationObserver): void {
    const index = this.stockObservers.indexOf(observer);

    if (index > -1) {
      this.stockObservers.splice(index, 1);
    }

    console.log(
      `[-]${observer.getUserId()} unsubscribed for notifications on ${this.productName}`,
    );
  }

  notifyStockObservers(): void {
    if (this.stockQuantity > 0 && this.stockObservers.length > 0) {
      console.log(`Notifying ${this.stockObservers.length} subscribers...`);

      const observersToNotify = [...this.stockObservers];

      for (const observer of observersToNotify) {
        observer.update();
      }
    }
  }

  purchase(quantity: number): boolean {
    if (this.stockQuantity >= quantity) {
      this.stockQuantity -= quantity;
      console.log(
        `✓ Purchase successful: ${quantity} ${this.productName}(s) sold. Stock remaining: ${this.stockQuantity}`,
      );

      if (this.stockQuantity === 0) {
        console.log(`⚠️  ${this.productName} is now OUT OF STOCK!`);
      }
      return true;
    } else {
      console.log(
        `✗ Purchase failed: Only ${this.stockQuantity} ${this.productName}(s) available, but ${quantity} requested.`,
      );
      return false;
    }
  }

  restock(quantity: number): void {
    const previousStock = this.stockQuantity;
    this.stockQuantity += quantity;
    console.log(
      `📦 Restocked: ${quantity} ${this.productName}(s) added. Stock: ${previousStock} → ${this.stockQuantity}`,
    );

    if (previousStock === 0 && this.stockQuantity > 0) {
      this.notifyStockObservers();
    }
  }
}

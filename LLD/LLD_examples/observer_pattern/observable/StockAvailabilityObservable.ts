import { StockNotificationObserver } from "../observer/StockNotificationObserver";

// Observable interface
export interface StockAvailabilityObservable {
  addStockObserver(observer: StockNotificationObserver): void;

  removeStockObserver(observer: StockNotificationObserver): void;

  notifyStockObservers(): void;

  purchase(quantity: number): boolean;

  restock(quantity: number): void;
}

// Observer interface for stock availability notifications
export interface StockNotificationObserver {
  update(): void;
  getNotificationMethod(): string;

  getUserId(): string;
}

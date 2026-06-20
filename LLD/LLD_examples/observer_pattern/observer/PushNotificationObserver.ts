import { StockNotificationObserver } from "./StockNotificationObserver";

export class PushNotificationObserver
  implements StockNotificationObserver
{
  private readonly userId: string;
  private readonly deviceToken: string;

  constructor(userId: string, deviceToken: string) {
    this.userId = userId;
    this.deviceToken = deviceToken;
  }

  update(): void {
    this.sendPushNotification();
  }

  private sendPushNotification(): void {
    console.log(
      `!! PUSH NOTIFICATION SENT to: ${this.deviceToken} - Product is back in stock! Hurry Up!!`
    );
  }

  getNotificationMethod(): string {
    return "Push Notification";
  }

  getUserId(): string {
    return this.userId;
  }
}
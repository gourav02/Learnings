import { StockNotificationObserver } from "./StockNotificationObserver";

export class EmailNotificationObserver implements StockNotificationObserver{
    private userId: string;
    private emailAddress: string;

    constructor(userId: string, emailAddress: string){
        this.userId = userId;
        this.emailAddress = emailAddress;
    }

    update(): void {
        this.sendEmail();
    }

    private sendEmail(): void {
        console.log(`Sending stock notification to ${this.emailAddress} for user ${this.userId}`);
    }

      getNotificationMethod(): string {
    return "Email";
  }

  getUserId(): string {
    return this.userId;
  }
}